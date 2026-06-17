import React, { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Medal, Star, ExternalLink } from 'lucide-react';

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

const ACHIEVEMENTS_DATA = [
  {
    org: 'JPMorganChase & Co.',
    title: 'SDE Program Certified',
    description: 'Completed Software Engineering Sim Program via Forage. Integrated Kafka message broker to Spring Boot microservices and persistence templates.',
    icon: Award,
    gradient: 'from-[#10B981] to-[#059669]',
    glowColor: 'rgba(16,185,129,0.25)',
    ringColor: 'border-[#10B981]/30',
    highlightText: 'Forage Cert',
    highlightClass: 'bg-[#10B981]/10 text-[#10B981] border-[#10B981]/25',
  },
  {
    org: 'KIIT University DU',
    title: 'Top Tier Scholar',
    description: 'Maintained a strong 7.1 CGPA in B.Tech Computer Science & Engineering, mastering Data Structures, Algorithms, DBMS, and OS.',
    icon: Trophy,
    gradient: 'from-[#FF5F8F] to-[#F97316]',
    glowColor: 'rgba(255,95,143,0.25)',
    ringColor: 'border-[#FF5F8F]/30',
    highlightText: '7.1 CGPA',
    highlightClass: 'bg-[#FF5F8F]/10 text-[#FF5F8F] border-[#FF5F8F]/25',
  },
  {
    org: 'B.N.S English School',
    title: 'Class XII Honors',
    description: 'Completed Senior Secondary Board Examinations with a distinguished merit of 76% in Physics, Chemistry, and Mathematics.',
    icon: Medal,
    gradient: 'from-[#8B5CF6] to-[#06B6D4]',
    glowColor: 'rgba(139,92,246,0.25)',
    ringColor: 'border-[#8B5CF6]/30',
    highlightText: '76% Score',
    highlightClass: 'bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/25',
  },
  {
    org: 'B.N.S English School',
    title: 'Class X Honors',
    description: 'Concluded Secondary Board Examinations with a distinguished high honors percentage score of 74%.',
    icon: Star,
    gradient: 'from-[#F97316] to-[#FBBF24]',
    glowColor: 'rgba(249,115,22,0.25)',
    ringColor: 'border-[#F97316]/30',
    highlightText: '74% Score',
    highlightClass: 'bg-[#F97316]/10 text-[#FB923C] border-[#F97316]/25',
  }
];

function AchievementCard({ item, delay, inView }) {
  const ItemIcon = item.icon;
  return (
    <div
      className={`glass-card p-6 flex flex-col items-center text-center gap-4 group transition-all duration-700 cursor-default ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Glowing Icon */}
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: item.glowColor, transform: 'scale(1.5)' }}
        />
        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center border ${item.ringColor} bg-gradient-to-br ${item.gradient} bg-opacity-10`}
          style={{ background: `linear-gradient(135deg, ${item.glowColor.replace('0.25)', '0.15)')}, ${item.glowColor.replace('0.25)', '0.05)')})` }}
        >
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} opacity-20`} />
          <ItemIcon size={26} className="relative z-10 text-white" />
        </div>
      </div>

      {/* Org */}
      <div>
        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{item.org}</span>
        <h3 className="font-extrabold text-white text-sm mt-1 mb-2 leading-snug">{item.title}</h3>
        <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-lg mb-3 font-mono border ${item.highlightClass}`}>
          {item.highlightText}
        </span>
        <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.1);

  return (
    <section
      id="achievements"
      className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-300 relative"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-14 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="section-capsule">Recognition</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          Achievements & <span className="gradient-text">Certifications</span>
        </h2>
        <div className="section-underline" />
      </div>

      {/* Cards Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <AchievementCard key={idx} item={item} delay={idx * 100} inView={gridInView} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={`mt-12 flex justify-center transition-all duration-700 ${gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <a
          href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-sm font-bold text-slate-300 hover:text-white transition-all hover:border-[#8B5CF6]/30 hover:shadow-lg hover:shadow-[#8B5CF6]/10"
        >
          <ExternalLink size={15} className="text-[#8B5CF6]" />
          View Full Profile on LinkedIn
        </a>
      </div>
    </section>
  );
}
