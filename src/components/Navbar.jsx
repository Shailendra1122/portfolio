import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    <nav className="sticky top-0 w-full h-16 bg-white/70 backdrop-blur-md border-b border-[#f8e5db] z-[9999] px-6 sm:px-12 flex items-center justify-between font-sans select-none">
      
      {/* Brand Logo in Cyber-Pastel */}
      <div 
        onClick={() => handleScrollTo('home')}
        className="text-base sm:text-lg font-bold tracking-tight text-[#372e48] cursor-pointer flex items-center gap-0.5"
      >
        <span className="text-brand-pink">&lt;</span>
        <span>ShailendraPratap</span>
        <span className="text-brand-purple">/&gt;</span>
      </div>

      {/* Desktop Links list */}
      <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScrollTo(item.id)}
            className={`transition-colors duration-250 cursor-pointer relative py-1 ${
              activeSection === item.id 
                ? 'text-[#372e48]' 
                : 'hover:text-[#372e48] text-slate-400'
            }`}
          >
            <span>{item.label}</span>
            {activeSection === item.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-pink to-brand-purple rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Burger Menu Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-[#372e48] p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Nav Overlay Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#fffcfb] border-b border-[#f8e5db] shadow-lg md:hidden flex flex-col p-4 space-y-3 font-semibold uppercase tracking-wider text-xs z-50 text-slate-500 animate-fade-slide-up">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`text-left px-4 py-2.5 rounded-lg transition-all ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-brand-peach to-transparent text-[#372e48] font-bold border-l-2 border-brand-pink' 
                  : 'hover:bg-slate-50 text-slate-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
