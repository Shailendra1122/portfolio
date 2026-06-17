import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
      className={`w-full z-[9999] px-6 sm:px-12 flex items-center justify-between font-sans select-none transition-all duration-300 ${
        scrolled
          ? 'h-14 bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'h-16 bg-[#0F172A]/60 backdrop-blur-md'
      }`}
    >
      {/* Brand Logo */}
      <div
        onClick={() => handleScrollTo('home')}
        className="text-base sm:text-lg font-bold tracking-tight cursor-pointer flex items-center gap-0.5"
      >
        <span className="text-[#FF5F8F]">&lt;</span>
        <span className="text-white">Shailendra</span>
        <span className="text-[#8B5CF6]">/&gt;</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={`px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer relative ${
              activeSection === item.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-[#FF5F8F] to-[#8B5CF6] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* CTA & Mobile Toggle */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:shailendraprbns@gmail.com"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider btn-primary"
        >
          Hire Me
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white transition-colors hover:bg-white/[0.1] cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl md:hidden flex flex-col p-4 space-y-1 z-50 animate-fade-in-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold uppercase tracking-wider ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-[#FF5F8F]/10 to-[#8B5CF6]/10 text-white border border-[#FF5F8F]/20'
                  : 'text-slate-400 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="mailto:shailendraprbns@gmail.com"
            className="mt-2 text-center px-4 py-3 rounded-xl btn-primary text-sm font-bold uppercase tracking-wider"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
