import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Sparkles, FolderKanban, Download, Mail, Play } from 'lucide-react';
import resumePdf from '../assets/RESUME.pdf';

export default function Hero({ onNavigate }) {
  const [typedText, setTypedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skills = [
    'Spring Boot Microservices',
    'Scalable REST APIs',
    'React & Frontend Interfaces',
    'AI/ML Models & Python',
    'Database Optimization'
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
      }, 70);
    }

    if (!isDeleting && typedText === currentFull) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setSkillIndex(prev => (prev + 1) % skills.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, skillIndex]);

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center p-4 overflow-hidden bg-radial from-[#1e1136] via-[#070a13] to-[#03050a]">
      {/* Background neon grid shapes */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-cyber-purple/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyber-cyan/10 blur-[120px] pointer-events-none" />

      {/* Main glass card container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl w-full rounded-2xl border border-white/10 bg-slate-950/40 p-8 md:p-12 backdrop-blur-2xl shadow-2xl text-center shadow-black/80 flex flex-col items-center animate-border-glow"
      >
        {/* Futuristic layout top panel element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 bg-cyber-cyan/10 border-b border-x border-cyber-cyan/30 rounded-b-xl text-[10px] uppercase tracking-[0.3em] font-mono text-cyber-cyan font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,255,204,0.1)]">
          <Cpu size={10} className="animate-spin" style={{ animationDuration: '6s' }} /> SYSTEM STABLE // PORTFOLIO ONLINE
        </div>

        {/* Floating animated sparkles */}
        <div className="absolute top-6 right-6 text-cyber-pink animate-pulse">
          <Sparkles size={20} />
        </div>

        {/* Subtitle / Status */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 mb-4 flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-cyan glow-cyan inline-block"></span>
          <span>SYSTEMS ACTIVE · AVAILABLE FOR OPPORTUNITIES</span>
        </motion.div>

        {/* Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white select-text"
        >
          Shailendra Pratap Singh
        </motion.h1>

        {/* Title */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mt-2 flex items-center justify-center gap-2 select-text"
        >
          <Code size={18} className="text-cyber-purple" />
          Java Full Stack Developer
        </motion.p>

        {/* Typing animation block */}
        <div className="h-8 md:h-10 mt-3 mb-8 flex items-center justify-center font-mono">
          <span className="text-slate-500 text-sm md:text-base">{'>'} console.log(</span>
          <span className="text-cyber-cyan text-sm md:text-base font-semibold select-text">
            "{typedText}"
          </span>
          <span className="text-slate-500 text-sm md:text-base">)</span>
          <span className="w-1.5 h-4 md:h-5 bg-cyber-cyan ml-1 animate-pulse" />
        </div>

        {/* Action Button layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-2">
          {/* Launch OS Workspace */}
          <button
            onClick={() => onNavigate('desktop')}
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-cyan/20 to-cyber-blue/20 hover:from-cyber-cyan/35 hover:to-cyber-blue/35 border border-cyber-cyan/40 hover:border-cyber-cyan text-cyber-cyan hover:text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(0,255,204,0.1)] hover:shadow-[0_0_35px_rgba(0,255,204,0.25)] hover:scale-[1.02]"
          >
            <Play size={16} fill="currentColor" />
            Enter OS Workspace
          </button>

          {/* View Projects */}
          <button
            onClick={() => onNavigate('desktop', 'projects')}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-purple/40 hover:bg-cyber-purple/10 text-slate-200 hover:text-cyber-purple font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:scale-[1.02]"
          >
            <FolderKanban size={16} />
            View Projects
          </button>

          {/* Download Resume */}
          <a
            href={resumePdf}
            download="Shailendra_Pratap_Singh_Resume.pdf"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-pink/40 hover:bg-cyber-pink/10 text-slate-200 hover:text-cyber-pink font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:scale-[1.02]"
          >
            <Download size={16} />
            Download Resume
          </a>

          {/* Contact Me */}
          <button
            onClick={() => onNavigate('desktop', 'contact')}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan/40 hover:bg-cyber-cyan/10 text-slate-200 hover:text-cyber-cyan font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,204,0.15)] hover:scale-[1.02]"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>

        {/* Small retro system detail footer */}
        <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between w-full text-[10px] font-mono text-slate-500">
          <span>REACT 19.2 // TAILWIND 4.0</span>
          <span>IP: 127.0.0.1 // LOCALHOST</span>
        </div>
      </motion.div>
    </div>
  );
}
