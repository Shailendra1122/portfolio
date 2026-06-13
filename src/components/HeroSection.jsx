import React, { useState, useEffect } from 'react';
import { Download, Mail, ArrowDown, FolderGit2, Calendar } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resumePdf from '../assets/RESUME.pdf';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    'Spring Boot Microservices',
    'React Full-Stack Apps',
    'Scalable REST APIs',
    'AI/ML Models & Python',
    'Database Architectures'
  ];

  useEffect(() => {
    let timer;
    const currentFull = skills[skillIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, prev.length - 1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFull.slice(0, typedText.length + 1));
      }, 75);
    }

    if (!isDeleting && typedText === currentFull) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setSkillIndex(prev => (prev + 1) % skills.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, skillIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-[calc(100vh-64px)] w-full flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-gradient-to-br from-[#fff6f2] via-[#fbf8ff] to-[#fff6f6] select-none text-center font-sans"
    >
      {/* Decorative floating dots arc inspired by the images */}
      <div className="absolute top-[20%] left-[10%] hidden md:flex items-center gap-2.5 opacity-40 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/60 transform translate-y-0" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/70 transform translate-y-1" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-pink/80 transform translate-y-2.5" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/60 transform translate-y-4" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/50 transform translate-y-5" />
        <span className="w-1 h-1 rounded-full bg-brand-purple/40 transform translate-y-6" />
      </div>

      <div className="absolute bottom-[20%] right-[10%] hidden md:flex items-center gap-2.5 opacity-40 select-none">
        <span className="w-1 h-1 rounded-full bg-brand-purple/40 transform -translate-y-6" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/50 transform -translate-y-5" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/60 transform -translate-y-4" />
        <span className="w-2.5 h-2.5 rounded-full bg-brand-pink/80 transform -translate-y-2.5" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/70 transform -translate-y-1" />
        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/60 transform translate-y-0" />
      </div>

      {/* Profile Picture Slot */}
      <div className="relative mb-6 select-none animate-fade-in-up">
        <div className="w-32 h-32 rounded-full p-1 border border-[#f8e5db] bg-white shadow-lg shadow-orange-100/30 overflow-hidden flex items-center justify-center mx-auto">
          <img 
            src={profilePic} 
            alt="Shailendra Pratap Singh" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        {/* Availability tag */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-pink to-brand-accent text-white font-mono text-[9px] uppercase tracking-wider font-bold py-1 px-3.5 rounded-full shadow-md select-none">
          Active Node
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#372e48] tracking-tight max-w-2xl select-text">
        Shailendra Pratap Singh
      </h1>

      {/* Role */}
      <p className="text-base sm:text-lg font-semibold text-slate-500 mt-2 select-text">
        Java Full Stack Developer
      </p>

      {/* Typing animation details */}
      <div className="h-6 mt-2 mb-8 font-mono text-xs sm:text-sm text-brand-pink font-semibold">
        <span>&gt; </span>
        <span>{typedText}</span>
        <span className="w-1 h-3 bg-brand-pink ml-0.5 animate-pulse inline-block" />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-center select-none">
        
        {/* View Projects */}
        <button
          onClick={() => handleScrollTo('projects')}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-accent hover:opacity-90 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-pink-100/50 cursor-pointer"
        >
          <span className="flex items-center justify-center gap-1.5"><FolderGit2 size={13} /> View Projects</span>
        </button>

        {/* Download Resume */}
        <a
          href={resumePdf}
          download="Shailendra_Pratap_Singh_Resume.pdf"
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#372e48] border border-[#f8e5db] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
        >
          <span className="flex items-center justify-center gap-1.5"><Download size={13} /> Download Resume</span>
        </a>

        {/* Contact Me */}
        <button
          onClick={() => handleScrollTo('contact')}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-[#372e48] border border-[#f8e5db] font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
        >
          <span className="flex items-center justify-center gap-1.5"><Mail size={13} /> Contact Me</span>
        </button>
      </div>

      {/* Scroll Down Hint */}
      <div 
        onClick={() => handleScrollTo('about')}
        className="mt-12 text-slate-400 hover:text-[#372e48] cursor-pointer animate-bounce transition-colors"
        title="Scroll Down"
      >
        <ArrowDown size={18} />
      </div>

    </section>
  );
}
