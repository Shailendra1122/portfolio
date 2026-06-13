import React from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    org: 'JPMorganChase & Co.',
    title: 'SDE Program Certified',
    description: 'Completed Software Engineering Sim Program via Forage. Integrated Kafka message broker to Spring Boot microservices and persistence templates.',
    icon: Award,
    iconBg: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20 shadow-[0_0_12px_rgba(52,211,153,0.15)]',
    highlightText: 'Forage Cert'
  },
  {
    org: 'KIIT University DU',
    title: 'Top Tier Scholar',
    description: 'Maintained a strong 7.1 CGPA in B.Tech Computer Science & Engineering, mastering Data Structures, Algorithms, DBMS, and OS.',
    icon: Trophy,
    iconBg: 'bg-brand-pink/10 text-brand-pink border-brand-pink/20 shadow-[0_0_12px_rgba(253,104,133,0.15)]',
    highlightText: '7.1 CGPA'
  },
  {
    org: 'B.N.S English School',
    title: 'Class XII Honors',
    description: 'Completed Senior Secondary Board Examinations with a distinguished merit of 76% in Physics, Chemistry, and Mathematics.',
    icon: Medal,
    iconBg: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20 shadow-[0_0_12px_rgba(157,92,242,0.15)]',
    highlightText: '76% Score'
  },
  {
    org: 'B.N.S English School',
    title: 'Class X Honors',
    description: 'Concluded Secondary Board Examinations with a distinguished high honors percentage score of 74%.',
    icon: Star,
    iconBg: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20 shadow-[0_0_12px_rgba(255,158,67,0.15)]',
    highlightText: '74% Score'
  }
];

export default function AchievementsSection() {
  return (
    <section 
      id="achievements"
      className="py-16 md:py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-600 relative select-text"
    >
      {/* Header */}
      <div className="text-center mb-12 select-none">
        <span className="section-capsule">Recognition</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#372e48]">Achievements & Certifications</h2>
        <div className="section-underline" />
      </div>

      {/* Grid of 4 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <div 
              key={idx}
              className="premium-card p-6 flex flex-col items-center text-center justify-between"
            >
              <div className="flex flex-col items-center">
                {/* Glowing Circle Icon */}
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center mb-4 shrink-0 select-none ${item.iconBg}`}>
                  <ItemIcon size={22} />
                </div>

                {/* Org & Highlight */}
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider select-none">
                  {item.org}
                </span>
                
                <h3 className="font-extrabold text-[#372e48] text-sm mt-1 mb-1.5 leading-snug">
                  {item.title}
                </h3>
                
                <span className="inline-block text-[10px] font-bold text-brand-pink bg-brand-pink/5 border border-brand-pink/15 px-2 py-0.5 rounded-md mb-3 font-mono select-none">
                  {item.highlightText}
                </span>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
