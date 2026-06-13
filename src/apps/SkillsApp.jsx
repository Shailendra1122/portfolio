import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Code, ShieldCheck, Heart } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Languages',
    icon: Code,
    color: 'text-cyber-cyan border-cyber-cyan/35',
    barColor: 'bg-cyber-cyan shadow-[0_0_10px_#00ffcc]',
    items: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C / C++', level: 75 },
      { name: 'HTML / CSS', level: 92 },
    ]
  },
  {
    category: 'Backend & Frameworks',
    icon: Cpu,
    color: 'text-cyber-purple border-cyber-purple/35',
    barColor: 'bg-cyber-purple shadow-[0_0_10px_#a855f7]',
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Node.js & Express', level: 70 },
    ]
  },
  {
    category: 'Databases & Storage',
    icon: Database,
    color: 'text-cyber-blue border-cyber-blue/35',
    barColor: 'bg-cyber-blue shadow-[0_0_10px_#3b82f6]',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'SQLite', level: 75 },
    ]
  },
  {
    category: 'DevOps & Tooling',
    icon: Terminal,
    color: 'text-cyber-pink border-cyber-pink/35',
    barColor: 'bg-cyber-pink shadow-[0_0_10px_#ec4899]',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux OS', level: 80 },
      { name: 'Postman / APIs', level: 85 }
    ]
  },
  {
    category: 'Specialized Fields',
    icon: ShieldCheck,
    color: 'text-emerald-400 border-emerald-500/35',
    barColor: 'bg-emerald-400 shadow-[0_0_10px_#34d399]',
    items: [
      { name: 'AI / Machine Learning', level: 75 },
      { name: 'Data Structures & Algo', level: 80 },
      { name: 'REST Architecture', level: 88 }
    ]
  }
];

export default function SkillsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small timeout to trigger level animations after render
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* Intro Header */}
      <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-white tracking-wide uppercase">Core Technologies</h2>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">Inventory of capabilities and stack levels</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/20 px-2 py-1 rounded-md">
          <Heart size={10} className="animate-pulse" />
          <span>FULLSTACK CAPABLE</span>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILLS_DATA.map((cat, catIdx) => {
          const Icon = cat.icon;
          return (
            <div 
              key={catIdx} 
              className={`p-4 rounded-xl border bg-slate-900/20 backdrop-blur-sm flex flex-col justify-between ${cat.color}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4">
                  <Icon size={16} />
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Level list */}
                <div className="space-y-3.5">
                  {cat.items.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-200 select-text">{skill.name}</span>
                        <span className="font-mono text-[10px] text-slate-400">{skill.level}%</span>
                      </div>
                      
                      {/* Track */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        {/* Fill */}
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${cat.barColor}`}
                          style={{ width: mounted ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
