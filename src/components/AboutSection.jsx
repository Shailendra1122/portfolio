import React, { useEffect, useRef, useState } from 'react';
import { Rocket, GraduationCap, Lightbulb, CheckCircle2, Heart, Code2, Layers } from 'lucide-react';

function useInView(threshold = 0.15) {
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

function AnimatedStat({ value, label, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`glass-card p-5 flex flex-col items-center justify-center text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl font-black gradient-text mb-1">{value}</span>
      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider leading-snug">{label}</span>
    </div>
  );
}

export default function AboutSection() {
  const [sectionRef, sectionInView] = useInView(0.1);

  const learningItems = [
    'Advanced Machine Learning & Deep Learning',
    'Cloud Architecture (AWS, Docker)',
    'Web3 & Blockchain Fundamentals',
    'Advanced Cybersecurity Techniques',
  ];

  const driveItems = [
    'Building tools that solve real problems',
    'Exploring AI/ML applications in everyday life',
    'Securing the digital world',
    'Creating fast, beautiful web experiences',
  ];

  const stats = [
    { value: '12+', label: 'GitHub Repos' },
    { value: '5+', label: 'Projects Built' },
    { value: '1', label: 'Sim Program' },
    { value: '3', label: 'Degrees' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-300 relative"
    >
      {/* Section Header */}
      <div className={`text-center mb-14 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="section-capsule">Who I Am</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="section-underline" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

        {/* Card 1: Building the Future */}
        <div
          className={`md:col-span-7 glass-card p-8 flex flex-col justify-between transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#FF5F8F]/10 border border-[#FF5F8F]/20 flex items-center justify-center text-[#FF5F8F]">
                <Rocket size={20} />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Building the Future</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a passionate{' '}
              <span className="font-semibold text-white">Full Stack Developer</span> and{' '}
              <span className="font-semibold text-white">ML Enthusiast</span> currently pursuing my B.Tech in
              Computer Science & Engineering at KIIT University, Bhubaneswar. I love creating innovative
              solutions that make a real impact.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              My journey in tech is driven by curiosity and a desire to solve complex problems. From building
              full-stack applications with{' '}
              <span className="text-[#FF5F8F] font-medium">Java / Spring Boot</span> to exploring the depths
              of machine learning, I am constantly pushing my boundaries to build efficient, scalable
              architectures.
            </p>
          </div>

          {/* Quick tech tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['Java', 'Spring Boot', 'React', 'Python', 'Docker', 'MySQL'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Card 2: Currently Learning */}
        <div
          className={`md:col-span-5 glass-card p-8 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Currently Learning</h3>
          </div>
          <ul className="space-y-3.5">
            {learningItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start text-sm text-slate-400">
                <CheckCircle2 size={16} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Row */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((st, idx) => (
            <AnimatedStat key={idx} value={st.value} label={st.label} delay={idx * 100} />
          ))}
        </div>

        {/* Card 4: What Drives Me */}
        <div
          className={`md:col-span-5 glass-card p-8 transition-all duration-700 ${sectionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center text-[#F97316]">
              <Lightbulb size={20} />
            </div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">What Drives Me</h3>
          </div>
          <ul className="space-y-3.5">
            {driveItems.map((item, idx) => (
              <li key={idx} className="flex gap-3 items-start text-sm text-slate-400">
                <Heart size={14} className="text-[#FF5F8F] fill-current shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
