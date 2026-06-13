import React from 'react';
import { Rocket, GraduationCap, Lightbulb, CheckCircle2, Heart } from 'lucide-react';

export default function AboutSection() {
  const learningItems = [
    "Advanced Machine Learning & Deep Learning",
    "Cloud Architecture (AWS, Docker)",
    "Web3 & Blockchain Fundamentals",
    "Advanced Cybersecurity Techniques"
  ];

  const driveItems = [
    "Building tools that solve real problems",
    "Exploring AI/ML applications in everyday life",
    "Securing the digital world",
    "Creating fast, beautiful web experiences"
  ];

  const stats = [
    { value: "12+", label: "GitHub Repos" },
    { value: "5+", label: "Projects Completed" },
    { value: "1", label: "Software Simulation" },
    { value: "3", label: "Academic Degrees" }
  ];

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-600 relative select-text"
    >
      {/* Heading */}
      <div className="text-center mb-12 select-none">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#372e48]">About Me</h2>
        <div className="section-underline" />
      </div>

      {/* Grid Layout matching the SuchitDas page layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        
        {/* Card 1: Building the Future (col-span-7) */}
        <div className="md:col-span-7 premium-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4 select-none">
              <div className="w-10 h-10 rounded-xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink">
                <Rocket size={18} />
              </div>
              <h3 className="text-base font-bold text-[#372e48] uppercase tracking-wider">Building the Future</h3>
            </div>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              I am a passionate <span className="font-semibold text-[#372e48]">Full Stack Developer</span> and <span className="font-semibold text-[#372e48]">ML Enthusiast</span> currently pursuing my B.Tech in Computer Science & Engineering at KIIT University, Bhubaneswar. I love creating innovative solutions that make a real impact.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              My journey in tech is driven by curiosity and a desire to solve complex problems. From building full-stack applications with <span className="text-brand-pink font-medium">Java / Spring Boot</span> to exploring the depths of machine learning, I am constantly pushing my boundaries to build efficient, scalable architectures.
            </p>
          </div>
        </div>

        {/* Card 2: Currently Learning (col-span-5) */}
        <div className="md:col-span-5 premium-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 select-none">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-base font-bold text-[#372e48] uppercase tracking-wider">Currently Learning</h3>
          </div>

          <ul className="space-y-3">
            {learningItems.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                <CheckCircle2 size={15} className="text-brand-purple shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Metrics Stat Row (col-span-7) */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 select-none">
          {stats.map((st, idx) => (
            <div 
              key={idx} 
              className="premium-card p-4 flex flex-col items-center justify-center text-center bg-white/60"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-[#372e48] tracking-tight bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                {st.value}
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wide mt-1.5 leading-snug">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Card 4: What Drives Me (col-span-5) */}
        <div className="md:col-span-5 premium-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4 select-none">
            <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange">
              <Lightbulb size={18} />
            </div>
            <h3 className="text-base font-bold text-[#372e48] uppercase tracking-wider">What Drives Me</h3>
          </div>

          <ul className="space-y-3">
            {driveItems.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                <Heart size={14} className="text-brand-pink fill-current shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
