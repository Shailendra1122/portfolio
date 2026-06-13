import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Mail, MapPin, Briefcase, Github, Linkedin, Code, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', 'error-fields'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setIsLoading(false);
      setStatus('error-fields');
      return;
    }

    // EmailJS configured check
    if (EMAILJS_CONFIG.SERVICE_ID === 'service_placeholder' || !EMAILJS_CONFIG.PUBLIC_KEY) {
      // Demo / Sandbox mode simulation
      setTimeout(() => {
        setIsLoading(false);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
      return;
    }

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      setIsLoading(false);
      setStatus('error');
      console.error("EmailJS sending error:", err);
    });
  };

  return (
    <section 
      id="contact"
      className="py-16 md:py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-600 relative select-text"
    >
      {/* Header */}
      <div className="text-center mb-12 select-none">
        <span className="section-capsule">Get in touch</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#372e48]">Let's Work Together</h2>
        <div className="section-underline" />
      </div>

      {/* Grid Layout matching SuchitDas contact layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Let's Connect */}
        <div className="md:col-span-5 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-[#372e48] mb-2 select-none">Let's Connect!</h3>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to shoot a message!
            </p>
          </div>

          {/* Details Lists */}
          <div className="space-y-4 font-sans select-none">
            {/* Email info */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Email</p>
                <a href="mailto:shailendraprbns@gmail.com" className="text-xs sm:text-sm font-semibold text-[#372e48] hover:text-brand-pink transition-colors">
                  shailendraprbns@gmail.com
                </a>
              </div>
            </div>

            {/* Location info */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-[#372e48]">Bhubaneswar, India</p>
              </div>
            </div>

            {/* Status info */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange shrink-0">
                <Briefcase size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Status</p>
                <p className="text-xs sm:text-sm font-semibold text-[#372e48]">3rd Year CSE @ KIIT DU</p>
              </div>
            </div>
          </div>

          {/* Long Pill Social Buttons */}
          <div className="flex flex-col gap-2 max-w-sm select-none">
            {/* GitHub */}
            <a 
              href="https://github.com/Shailendra1122/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#f8e5db] bg-[#fdf7f4]/40 hover:bg-[#fdf7f4]/80 text-[#372e48] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Github size={14} className="text-[#372e48]" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#f8e5db] bg-[#fdf7f4]/40 hover:bg-[#fdf7f4]/80 text-[#372e48] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Linkedin size={14} className="text-sky-600" />
              <span>LinkedIn</span>
            </a>

            {/* LeetCode */}
            <a 
              href="https://leetcode.com/u/Shailendra1122/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#f8e5db] bg-[#fdf7f4]/40 hover:bg-[#fdf7f4]/80 text-[#372e48] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Code size={14} className="text-amber-500" />
              <span>LeetCode</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="premium-card p-6 md:p-8 bg-[#fdf7f4]/50 space-y-4"
          >
            {/* Alerts */}
            {status === 'success' && (
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 text-xs p-3 rounded-xl border border-emerald-100 select-none">
                <CheckCircle2 size={15} className="shrink-0 animate-bounce" />
                <span>Message sent! (Mock sandbox completed successfully if keys are placeholders).</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 text-xs p-3 rounded-xl border border-rose-100 select-none">
                <AlertCircle size={15} className="shrink-0" />
                <span>Message failed to transmit. Check console or credentials.</span>
              </div>
            )}
            {status === 'error-fields' && (
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 text-xs p-3 rounded-xl border border-rose-100 select-none">
                <AlertCircle size={15} className="shrink-0" />
                <span>Error: All fields are required to submit form.</span>
              </div>
            )}

            {/* Fields */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-sans select-none">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#f8e5db] rounded-xl px-4 py-2.5 text-xs text-[#372e48] focus:outline-none focus:border-brand-pink/50 transition-colors bg-[#fffbf9]"
                placeholder="John Doe"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-sans select-none">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#f8e5db] rounded-xl px-4 py-2.5 text-xs text-[#372e48] focus:outline-none focus:border-brand-pink/50 transition-colors bg-[#fffbf9]"
                placeholder="john@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-sans select-none">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-white border border-[#f8e5db] rounded-xl px-4 py-2.5 text-xs text-[#372e48] focus:outline-none focus:border-brand-pink/50 transition-colors bg-[#fffbf9]"
                placeholder="Let's collaborate!"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500 font-sans select-none">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-white border border-[#f8e5db] rounded-xl px-4 py-2.5 text-xs text-[#372e48] focus:outline-none focus:border-brand-pink/50 transition-colors resize-none bg-[#fffbf9]"
                placeholder="Your message here..."
                disabled={isLoading}
              />
            </div>

            {/* Gradient Send button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-pink hover:opacity-90 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 select-none"
            >
              {isLoading ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={12} fill="currentColor" />
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
