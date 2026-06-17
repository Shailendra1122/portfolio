import React, { useEffect, useRef, useState } from 'react';
import { Palette, Cpu, Code2, Cloud, BrainCircuit, Wrench, CircleDot } from 'lucide-react';

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

const SKILLS_CATEGORIES = [
  {
    title: 'Frontend Universe',
    icon: Palette,
    gradient: 'from-[#FF5F8F] to-[#F97316]',
    glow: 'rgba(255,95,143,0.15)',
    iconBg: 'bg-[#FF5F8F]/10 border-[#FF5F8F]/20 text-[#FF5F8F]',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend & Database',
    icon: Cpu,
    gradient: 'from-[#8B5CF6] to-[#06B6D4]',
    glow: 'rgba(139,92,246,0.15)',
    iconBg: 'bg-[#8B5CF6]/10 border-[#8B5CF6]/20 text-[#8B5CF6]',
    skills: ['Spring Boot', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'SQLite']
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    gradient: 'from-[#F97316] to-[#FBBF24]',
    glow: 'rgba(249,115,22,0.15)',
    iconBg: 'bg-[#F97316]/10 border-[#F97316]/20 text-[#F97316]',
    skills: ['Java', 'JavaScript', 'Python', 'C / C++', 'PHP']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    gradient: 'from-[#06B6D4] to-[#8B5CF6]',
    glow: 'rgba(6,182,212,0.15)',
    iconBg: 'bg-[#06B6D4]/10 border-[#06B6D4]/20 text-[#06B6D4]',
    skills: ['Git & GitHub', 'Docker', 'GCP', 'Linux', 'Vercel']
  },
  {
    title: 'ML / AI Specialist',
    icon: BrainCircuit,
    gradient: 'from-[#10B981] to-[#06B6D4]',
    glow: 'rgba(16,185,129,0.15)',
    iconBg: 'bg-[#10B981]/10 border-[#10B981]/20 text-[#10B981]',
    skills: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Tools & Productivity',
    icon: Wrench,
    gradient: 'from-[#64748B] to-[#94A3B8]',
    glow: 'rgba(100,116,139,0.15)',
    iconBg: 'bg-white/[0.08] border-white/10 text-slate-400',
    skills: ['VS Code', 'Eclipse', 'Postman', 'Thymeleaf', 'Flutter']
  }
];

function SkillCard({ cat, delay, inView }) {
  const CategoryIcon = cat.icon;
  return (
    <div
      className={`glass-card-neon p-6 flex flex-col gap-5 group transition-all duration-700 cursor-default ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.iconBg}`}>
          <CategoryIcon size={18} />
        </div>
        <div>
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">{cat.title}</h3>
          <div className={`h-0.5 mt-1 w-8 rounded-full bg-gradient-to-r ${cat.gradient} transition-all duration-500 group-hover:w-full`} />
        </div>
      </div>

      {/* Skill Pills */}
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <div key={skill} className="skill-pill text-xs">
            <CircleDot size={8} className="text-[#FF5F8F] opacity-70" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Top skills with progress bars
const TOP_SKILLS = [
  { name: 'Java / Spring Boot', level: 88, color: 'from-[#FF5F8F] to-[#F97316]' },
  { name: 'React / JavaScript', level: 82, color: 'from-[#8B5CF6] to-[#06B6D4]' },
  { name: 'MySQL / MongoDB', level: 78, color: 'from-[#10B981] to-[#06B6D4]' },
  { name: 'Python / ML', level: 70, color: 'from-[#F97316] to-[#FBBF24]' },
  { name: 'Docker / GCP', level: 65, color: 'from-[#06B6D4] to-[#8B5CF6]' },
];

function ProgressBar({ name, level, color, inView, delay }) {
  return (
    <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-slate-300">{name}</span>
        <span className="text-xs font-mono text-[#FF5F8F] font-bold">{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className={`progress-fill bg-gradient-to-r ${color}`}
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [headerRef, headerInView] = useInView(0.1);
  const [progressRef, progressInView] = useInView(0.2);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-300 relative"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-14 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="section-capsule">My expertise</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <div className="section-underline" />
      </div>

      {/* Progress Bars - Top Skills */}
      <div
        ref={progressRef}
        className="glass-card p-8 mb-10"
      >
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5F8F]" />
          Proficiency Levels
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {TOP_SKILLS.map((skill, idx) => (
            <ProgressBar
              key={skill.name}
              {...skill}
              inView={progressInView}
              delay={idx * 120}
            />
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <SkillCard key={idx} cat={cat} delay={idx * 80} inView={gridInView} />
        ))}
      </div>
    </section>
  );
}
