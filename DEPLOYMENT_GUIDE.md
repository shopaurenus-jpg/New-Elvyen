# Elvyen Digital Agency - Deployment Guide

## Quick Fix for "Page Not Found" Error

The "page not found" error happens because React Router needs special configuration for static hosting platforms.

### ✅ Files Added to Fix This:

1. **`/frontend/public/_redirects`** - For Netlify
2. **`/frontend/vercel.json`** - For Vercel

These files tell the hosting platform to redirect all routes to index.html, which allows React Router to handle routing.

---

## Deployment Instructions by Platform

### 🔷 Vercel (Recommended for Frontend)

1. **Frontend Only Deploy:**
   ```bash
   # In your local project
   cd frontend
   npm install
   npm run build
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set **Root Directory**: `frontend`
   - **Build Command**: `npm run build` or `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install` or `yarn install`

3. **Environment Variables (in Vercel):**
   ```
   REACT_APP_BACKEND_URL=https://your-backend-url.com
   ```

### 🔷 Netlify

1. **Build Settings:**
   - **Base directory**: `frontend`
   - **Build command**: `npm run build` or `yarn build`
   - **Publish directory**: `frontend/build`

2. **Environment Variables:**
   ```
   REACT_APP_BACKEND_URL=https://your-backend-url.com
   ```

### 🔷 Railway (For Full Stack)

1. **Create Two Services:**
   - Frontend Service (React)
   - Backend Service (FastAPI)

2. **Frontend Settings:**
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Start Command**: `cd frontend && npx serve -s build -p $PORT`
   - **Root Directory**: Leave blank or set to `/`

3. **Backend Settings:**
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: Leave blank

4. **Environment Variables:**
   
   **Frontend:**
   ```
   REACT_APP_BACKEND_URL=${{Backend.RAILWAY_PUBLIC_DOMAIN}}
   ```
   
   **Backend:**
   ```
   MONGO_URL=your_mongodb_connection_string
   DB_NAME=elvyen_db
   CORS_ORIGINS=*
   RESEND_API_KEY=re_Ebk5TzVH_JFEsXirmH66uHQuTe54EauJm
   SENDER_EMAIL=onboarding@resend.dev
   RECIPIENT_EMAIL=workelvyen@gmail.com
   ```

### 🔷 Render

1. **Create Web Service for Backend:**
   - **Build Command**: `cd backend && pip install -r requirements.txt`
   - **Start Command**: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`

2. **Create Static Site for Frontend:**
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/build`

---

## Common Issues & Solutions

### ❌ Issue: "Page not found" on routes
**Solution**: Make sure `_redirects` (Netlify) or `vercel.json` (Vercel) exists in `/frontend/public/`

### ❌ Issue: "Cannot connect to backend"
**Solution**: Check `REACT_APP_BACKEND_URL` environment variable is set correctly

### ❌ Issue: Build fails
**Solution**: 
- Make sure you're in the correct directory (`frontend` for frontend deploy)
- Run `npm install` or `yarn install` first
- Check Node version (should be 16+ or 18+)

### ❌ Issue: Contact form/meeting scheduler not working
**Solution**: 
- Ensure backend is deployed and environment variables are set
- Update `REACT_APP_BACKEND_URL` to your deployed backend URL
- Make sure CORS is enabled on backend

---

## Recommended Setup

**Best Practice:**
1. Deploy **Backend** to Railway/Render (supports Python/FastAPI)
2. Deploy **Frontend** to Vercel/Netlify (optimized for React)
3. Connect them via environment variables

**Example Setup:**
```
Frontend (Vercel): https://elvyen.vercel.app
Backend (Railway): https://elvyen-backend.up.railway.app
MongoDB: MongoDB Atlas (free tier)
```

---

## Testing After Deployment

1. Visit your deployed frontend URL
2. Test all routes:
   - `/` (Home)
   - `/about`
   - `/services`
   - `/portfolio`
   - `/contact`

3. Test functionality:
   - Contact form submission
   - Meeting scheduler
   - WhatsApp button
   - Portfolio project links

---

## Need Help?

If you still see "page not found" after adding these files:
1. Clear your browser cache
2. Redeploy the site
3. Check browser console for errors (F12 → Console)
4. Verify the `_redirects` or `vercel.json` file is in the build output

---

**Made with ❤️ by Elvyen**
