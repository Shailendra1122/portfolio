import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Phone, Mail, Linkedin, Github, Send, AlertCircle, CheckCircle, Terminal } from 'lucide-react';

export default function ContactApp() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setIsLoading(false);
      setStatus('error-fields');
      return;
    }

    // Check if user has configured the keys
    if (EMAILJS_CONFIG.SERVICE_ID === 'service_placeholder' || !EMAILJS_CONFIG.PUBLIC_KEY) {
      // Demo / Sandbox mode simulation
      setTimeout(() => {
        setIsLoading(false);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
      return;
    }

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      setIsLoading(false);
      setStatus('error');
      console.error("EmailJS Error: ", err);
    });
  };

  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* Container grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Column - Contact Details & Socials */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold text-cyber-cyan uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Terminal size={12} /> Direct Channels
            </h3>
            
            <div className="space-y-3 font-mono text-xs">
              {/* Phone */}
              <a 
                href="tel:+917080692505"
                className="flex items-center gap-3 p-2.5 rounded-lg border border-white/5 bg-slate-950/30 hover:border-cyber-cyan/30 hover:bg-cyber-cyan/5 transition-colors"
              >
                <Phone size={13} className="text-cyber-cyan shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-[9px] text-slate-500 uppercase font-bold">Phone</p>
                  <p className="text-slate-300 truncate">+91 7080692505</p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:shailendraprbns@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded-lg border border-white/5 bg-slate-950/30 hover:border-cyber-purple/30 hover:bg-cyber-purple/5 transition-colors"
              >
                <Mail size={13} className="text-cyber-purple shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-[9px] text-slate-500 uppercase font-bold">Email</p>
                  <p className="text-slate-300 truncate">shailendraprbns@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Profiles Window */}
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md">
            <h3 className="text-xs font-bold text-cyber-purple uppercase tracking-[0.2em] mb-4">
              Social Profiles
            </h3>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a 
                href="https://github.com/Shailendra1122/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 border border-white/5 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <Github size={12} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 border border-white/5 rounded-lg hover:bg-cyber-blue/10 transition-colors"
              >
                <Linkedin size={12} className="text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/Shailendra1122/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 border border-white/5 rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                <span className="font-bold text-amber-500 text-[10px]">LC</span>
                <span>LeetCode</span>
              </a>
              <a 
                href="https://www.hackerrank.com/profile/Shailendra1122"
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 p-2 border border-white/5 rounded-lg hover:bg-emerald-500/10 transition-colors"
              >
                <span className="font-bold text-emerald-500 text-[10px]">HR</span>
                <span>HackerRank</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - EmailJS Contact Form */}
        <div className="md:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="p-5 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm space-y-4"
          >
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-1">
              Transmit Message
            </h3>
            
            {/* Status alerts */}
            {status === 'success' && (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-lg">
                <CheckCircle size={14} className="shrink-0" />
                <span>Message transmitted successfully! (Demo Mode active if keys are placeholders).</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs p-3 rounded-lg">
                <AlertCircle size={14} className="shrink-0" />
                <span>Transmission failure. Verify configuration details.</span>
              </div>
            )}
            {status === 'error-fields' && (
              <div className="flex items-center gap-2 bg-cyber-pink/10 border border-cyber-pink/30 text-cyber-pink text-xs p-3 rounded-lg">
                <AlertCircle size={14} className="shrink-0" />
                <span>Validation error: All form fields are required.</span>
              </div>
            )}

            {/* Fields */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyber-cyan/60 transition-colors"
                placeholder="Enter your name"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyber-cyan/60 transition-colors"
                placeholder="you@example.com"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold font-mono">Message Payload</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyber-cyan/60 transition-colors resize-none"
                placeholder="Write your message here..."
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-slate-950 bg-cyber-cyan hover:bg-cyan-300 transition-colors cursor-pointer select-none"
            >
              {isLoading ? (
                <span>TRANSMITTING...</span>
              ) : (
                <>
                  <Send size={12} />
                  <span>TRANSMIT_MESSAGE</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

    </div>
  );
}
