import React, { useState, useEffect, useRef } from 'react';
import { Download, Mail, ArrowDown, Github, Linkedin, Code2, ExternalLink } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import resumePdf from '../assets/RESUME.pdf';

// Floating particle component
function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={style}
    />
  );
}

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  const skills = [
    'Java Full Stack Developer',
    'AI Enthusiast',
    'Backend Engineer',
    'Open Source Contributor',
    'Spring Boot Microservices'
  ];

  // Typing animation
  useEffect(() => {
    let timer;
    const currentFull = skills[skillIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(prev => prev.slice(0, prev.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFull.slice(0, typedText.length + 1));
      }, 80);
    }

    if (!isDeleting && typedText === currentFull) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setSkillIndex(prev => (prev + 1) % skills.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, skillIndex]);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particleArr = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#FF5F8F' : '#8B5CF6',
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particleArr.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw connecting lines
      for (let i = 0; i < particleArr.length; i++) {
        for (let j = i + 1; j < particleArr.length; j++) {
          const dx = particleArr[i].x - particleArr[j].x;
          const dy = particleArr[i].y - particleArr[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = 0.06 * (1 - dist / 100);
            ctx.strokeStyle = '#8B5CF6';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particleArr[i].x, particleArr[i].y);
            ctx.lineTo(particleArr[j].x, particleArr[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shailendra1122/', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', label: 'LinkedIn', color: 'hover:text-sky-400' },
    { icon: Code2, href: 'https://leetcode.com/u/Shailendra1122/', label: 'LeetCode', color: 'hover:text-amber-400' },
    { icon: Mail, href: 'mailto:shailendraprbns@gmail.com', label: 'Email', color: 'hover:text-[#FF5F8F]' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Canvas Particles Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF5F8F]/10 border border-[#FF5F8F]/25 text-[#FF5F8F] text-xs font-mono font-bold uppercase tracking-wider mb-8 animate-fade-in-down">
          <span className="w-2 h-2 rounded-full bg-[#FF5F8F] animate-pulse" />
          Available for Opportunities
        </div>

        {/* Profile Image */}
        <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {/* Outer ring glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF5F8F] to-[#8B5CF6] blur-xl opacity-40 scale-110 animate-pulse-slow" />
          {/* Ring border */}
          <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-br from-[#FF5F8F] via-[#8B5CF6] to-[#06B6D4]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0F172A]">
              <img
                src={profilePic}
                alt="Shailendra Pratap Singh"
                className="w-full h-full object-cover profile-glow"
              />
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF5F8F] to-[#8B5CF6] text-white font-mono text-[9px] uppercase tracking-wider font-bold shadow-lg whitespace-nowrap">
            Active Node
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Shailendra Pratap{' '}
          <span className="gradient-text">Singh</span>
        </h1>

        {/* Static Role */}
        <p className="text-base sm:text-lg text-slate-400 font-medium mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Java Full Stack Developer
        </p>

        {/* Typing Animation */}
        <div className="h-8 flex items-center justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <span className="font-mono text-sm sm:text-base text-[#FF5F8F] font-semibold">
            &gt; {typedText}
            <span className="typing-cursor" />
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-10 w-full max-w-2xl justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => handleScrollTo('projects')}
            className="btn-primary w-full sm:w-auto gap-2 text-sm font-bold uppercase tracking-wider px-7"
          >
            <ExternalLink size={15} />
            View Projects
          </button>
          <a
            href={resumePdf}
            download="Shailendra_Pratap_Singh_Resume.pdf"
            className="btn-ghost w-full sm:w-auto gap-2 text-sm font-bold uppercase tracking-wider px-7"
          >
            <Download size={15} />
            Download Resume
          </a>
          <button
            onClick={() => handleScrollTo('contact')}
            className="btn-ghost w-full sm:w-auto gap-2 text-sm font-bold uppercase tracking-wider px-7"
          >
            <Mail size={15} />
            Contact Me
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className={`w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-slate-400 transition-all duration-300 hover:bg-white/[0.1] hover:border-[#FF5F8F]/40 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#FF5F8F]/20 ${link.color}`}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-sm w-full animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          {[
            { value: '12+', label: 'GitHub Repos' },
            { value: '5+', label: 'Projects' },
            { value: '3+', label: 'Years Coding' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={() => handleScrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-600 hover:text-[#FF5F8F] transition-colors scroll-indicator z-10"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
