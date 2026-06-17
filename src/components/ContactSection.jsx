import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { Mail, MapPin, Briefcase, Github, Linkedin, Code2, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [headerRef, headerInView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setIsLoading(false);
      setStatus('error-fields');
      return;
    }

    if (EMAILJS_CONFIG.SERVICE_ID === 'service_placeholder' || !EMAILJS_CONFIG.PUBLIC_KEY) {
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
      console.error('EmailJS error:', err);
    });
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shailendraprbns@gmail.com',
      href: 'mailto:shailendraprbns@gmail.com',
      iconBg: 'bg-[#FF5F8F]/10 border-[#FF5F8F]/20 text-[#FF5F8F]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhubaneswar, India',
      href: null,
      iconBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20 text-[#8B5CF6]',
    },
    {
      icon: Briefcase,
      label: 'Status',
      value: '3rd Year CSE @ KIIT DU',
      href: null,
      iconBg: 'bg-[#F97316]/10 border-[#F97316]/20 text-[#F97316]',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Shailendra1122/',
      sub: '@Shailendra1122',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shailendra-pratap-singh-067281362/',
      sub: 'Connect with me',
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/Shailendra1122/',
      sub: '@Shailendra1122',
    },
    {
      icon: MessageSquare,
      label: 'Email Me',
      href: 'mailto:shailendraprbns@gmail.com',
      sub: 'shailendraprbns@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-300 relative"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-14 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="section-capsule">Get in touch</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <div className="section-underline" />
        <p className="text-slate-400 text-sm mt-4 max-w-md mx-auto">
          I'm always excited to discuss new projects, creative ideas, or opportunities.
          Feel free to reach out!
        </p>
      </div>

      <div
        ref={contentRef}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
      >
        {/* Left Column */}
        <div className={`md:col-span-5 space-y-6 transition-all duration-700 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          {/* Contact Detail Cards */}
          <div className="glass-card p-6 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact Info</h3>
            {contactDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${detail.iconBg} shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-0.5">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-sm font-semibold text-white hover:text-[#FF5F8F] transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{detail.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="glass-card p-6 space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Find Me On</h3>
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <Icon size={16} className="shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm">{link.label}</div>
                    <div className="text-[10px] text-slate-500 font-mono truncate">{link.sub}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div
          className={`md:col-span-7 transition-all duration-700 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Send a Message</h3>

            {/* Status Alerts */}
            {status === 'success' && (
              <div className="flex items-center gap-2.5 bg-[#10B981]/10 text-[#10B981] text-sm p-4 rounded-xl border border-[#10B981]/20">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2.5 bg-[#EF4444]/10 text-[#EF4444] text-sm p-4 rounded-xl border border-[#EF4444]/20">
                <AlertCircle size={16} className="shrink-0" />
                <span>Message failed to send. Please check console for details.</span>
              </div>
            )}
            {status === 'error-fields' && (
              <div className="flex items-center gap-2.5 bg-[#F97316]/10 text-[#F97316] text-sm p-4 rounded-xl border border-[#F97316]/20">
                <AlertCircle size={16} className="shrink-0" />
                <span>All fields are required to submit the form.</span>
              </div>
            )}

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="dark-input"
                  placeholder="John Doe"
                  disabled={isLoading}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="dark-input"
                  placeholder="john@example.com"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="dark-input"
                placeholder="Let's collaborate!"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="dark-input resize-none"
                placeholder="Your message here..."
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider py-3.5"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Transmitting...
                </span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={14} fill="currentColor" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
