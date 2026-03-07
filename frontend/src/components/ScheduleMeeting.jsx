import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Briefcase, MessageSquare, Send } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ScheduleMeeting = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API}/schedule-meeting`, formData);

      if (response.data.status === 'success') {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            date: '',
            time: '',
            message: '',
          });
        }, 8000);
      }
    } catch (err) {
      console.error('Error scheduling meeting:', err);
      setError(err.response?.data?.detail || 'Failed to schedule meeting. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '919306928510';
    const message = 'Hello, I want to schedule a consultation call.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-black to-white/[0.02]" data-testid="schedule-meeting-section">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-500 font-mono text-sm mb-4">BOOK A CALL</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Schedule a Free
            <br />
            <span className="text-cyan-500">Consultation Call</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose a convenient date and time to discuss your project with us.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="schedule-meeting-form">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User className="w-4 h-4 text-cyan-500" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  data-testid="meeting-input-name"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 text-cyan-500" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="meeting-input-email"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Phone and Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 text-cyan-500" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  data-testid="meeting-input-phone"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="+91 9306928510"
                />
              </div>

              <div>
                <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Briefcase className="w-4 h-4 text-cyan-500" />
                  Company / Project Type
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  data-testid="meeting-input-company"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Company Name or Project Type"
                />
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  Select Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  data-testid="meeting-input-date"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>

              <div>
                <label htmlFor="time" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Clock className="w-4 h-4 text-cyan-500" />
                  Select Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  data-testid="meeting-input-time"
                  className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 text-cyan-500" />
                Message / Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                data-testid="meeting-input-message"
                className="w-full px-6 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project or what you'd like to discuss..."
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center" data-testid="meeting-error-message">
                {error}
              </div>
            )}

            {/* Success Message */}
            {submitted ? (
              <div className="p-6 bg-cyan-500/20 border border-cyan-500/50 rounded-xl text-cyan-500 text-center" data-testid="meeting-success-message">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-bold">Meeting Request Submitted!</span>
                </div>
                <p className="text-sm">Your meeting request has been submitted. We will confirm your appointment soon.</p>
              </div>
            ) : (
              <MagneticButton
                type="submit"
                disabled={loading}
                data-testid="schedule-meeting-btn"
                className={`w-full px-8 py-4 bg-cyan-500 text-black rounded-full font-medium text-lg flex items-center justify-center gap-2 ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="w-5 h-5" />
                {loading ? 'Scheduling...' : 'Schedule Meeting'}
              </MagneticButton>
            )}
          </form>

          {/* WhatsApp Quick Chat */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Or schedule instantly via WhatsApp</p>
              <button
                onClick={openWhatsApp}
                data-testid="meeting-whatsapp-btn"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BA5A] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quick Chat on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
