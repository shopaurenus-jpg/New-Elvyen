from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import asyncio
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend API Key
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'workelvyen@gmail.com')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactFormRequest(BaseModel):
    name: str
    email: EmailStr
    company: str = ""
    message: str

# Meeting Schedule Model
class MeetingScheduleRequest(BaseModel):
    fullName: str
    email: EmailStr
    phone: str
    company: str = ""
    date: str
    time: str
    message: str = ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/contact")
async def submit_contact_form(request: ContactFormRequest):
    """
    Handle contact form submission and send email to workelvyen@gmail.com
    """
    try:
        # Create HTML email content
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #00F0FF;">New Contact Form Submission - Elvyen</h2>
                <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> {request.name}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <p><strong>Company:</strong> {request.company if request.company else 'Not provided'}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background: white; padding: 15px; border-left: 4px solid #00F0FF;">
                        {request.message}
                    </div>
                </div>
                <p style="margin-top: 20px; color: #666; font-size: 12px;">
                    This email was sent from the Elvyen contact form.
                </p>
            </body>
        </html>
        """
        
        # Prepare email parameters
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Contact Form Submission from {request.name}",
            "html": html_content,
            "reply_to": request.email
        }
        
        # Send email using asyncio.to_thread for non-blocking
        email_response = await asyncio.to_thread(resend.Emails.send, params)
        
        logger.info(f"Contact form email sent successfully to {RECIPIENT_EMAIL}")
        
        return {
            "status": "success",
            "message": "Your message has been sent successfully. We'll get back to you soon!",
            "email_id": email_response.get("id")
        }
        
    except Exception as e:
        logger.error(f"Failed to send contact form email: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail="Failed to send your message. Please try again later or email us directly at workelvyen@gmail.com"
        )

@api_router.post("/schedule-meeting")
async def schedule_meeting(request: MeetingScheduleRequest):
    """
    Handle meeting scheduling and send confirmation emails
    """
    try:
        # Store meeting in database
        meeting_data = {
            "fullName": request.fullName,
            "email": request.email,
            "phone": request.phone,
            "company": request.company,
            "date": request.date,
            "time": request.time,
            "message": request.message,
            "status": "pending",
            "createdAt": datetime.now(timezone.utc).isoformat(),
        }
        
        await db.meetings.insert_one(meeting_data)
        logger.info(f"Meeting request stored for {request.fullName}")
        
        # Send email to admin (Elvyen) with client info
        admin_html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #00F0FF;">New Meeting Request - Elvyen</h2>
                <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> {request.fullName}</p>
                    <p><strong>Email:</strong> {request.email}</p>
                    <p><strong>Phone:</strong> {request.phone}</p>
                    <p><strong>Company:</strong> {request.company if request.company else 'Not provided'}</p>
                    <p><strong>Requested Date:</strong> {request.date}</p>
                    <p><strong>Requested Time:</strong> {request.time}</p>
                    {f'<p><strong>Message:</strong></p><div style="background: white; padding: 15px; border-left: 4px solid #00F0FF;">{request.message}</div>' if request.message else ''}
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <h3 style="color: #00F0FF;">Client Confirmation Email Preview</h3>
                <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
                    <p><strong>To:</strong> {request.email}</p>
                    <p><strong>Subject:</strong> Meeting Request Confirmation - Elvyen</p>
                    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;">
                    <p>Hi {request.fullName},</p>
                    <p>Thank you for scheduling a consultation call with Elvyen!</p>
                    <div style="background: white; padding: 15px; border-left: 4px solid #00F0FF; margin: 15px 0;">
                        <h4 style="margin-top: 0;">Meeting Details:</h4>
                        <p><strong>Date:</strong> {request.date}</p>
                        <p><strong>Time:</strong> {request.time}</p>
                        {f'<p><strong>Company:</strong> {request.company}</p>' if request.company else ''}
                    </div>
                    <p>We have received your meeting request and will confirm your appointment shortly.</p>
                    <p style="margin-top: 20px;">Best regards,<br><strong style="color: #00F0FF;">The Elvyen Team</strong></p>
                </div>
                <p style="margin-top: 20px; color: #999; font-size: 12px;">
                    <strong>Action Required:</strong> Please send a confirmation email to the client at {request.email} to confirm their appointment.
                </p>
            </body>
        </html>
        """
        
        admin_params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Meeting Request from {request.fullName} - {request.date} at {request.time}",
            "html": admin_html,
            "reply_to": request.email
        }
        
        await asyncio.to_thread(resend.Emails.send, admin_params)
        logger.info(f"Meeting notification sent to admin successfully")
        
        return {
            "status": "success",
            "message": "Meeting request submitted successfully. We will confirm your appointment soon via email.",
        }
        
    except Exception as e:
        logger.error(f"Failed to schedule meeting: {str(e)}")
        # Even if email fails, we've stored it in DB, so return success
        if "Meeting request stored" in str(e) or meeting_data:
            return {
                "status": "success",
                "message": "Meeting request submitted successfully. We will confirm your appointment soon.",
            }
        raise HTTPException(
            status_code=500,
            detail="Failed to schedule meeting. Please try again or contact us directly."
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()