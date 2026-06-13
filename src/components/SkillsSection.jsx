import React from 'react';
import { Palette, Cpu, Code2, Cloud, BrainCircuit, Wrench, CircleDot } from 'lucide-react';

const SKILLS_CATEGORIES = [
  {
    title: 'Frontend Universe',
    icon: Palette,
    color: 'text-brand-pink border-brand-pink/20',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend & Database',
    icon: Cpu,
    color: 'text-brand-purple border-brand-purple/20',
    skills: ['Spring Boot', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'SQLite']
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'text-brand-orange border-brand-orange/20',
    skills: ['Java', 'JavaScript', 'Python', 'C / C++', 'PHP']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-sky-500 border-sky-200/60',
    skills: ['Git & GitHub', 'Docker', 'GCP', 'Linux', 'Vercel']
  },
  {
    title: 'ML / AI Specialist',
    icon: BrainCircuit,
    color: 'text-emerald-500 border-emerald-200/60',
    skills: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Tools & Productivity',
    icon: Wrench,
    color: 'text-slate-600 border-slate-200/60',
    skills: ['VS Code', 'Eclipse', 'Postman', 'Thymeleaf', 'Flutter']
  }
];

export default function SkillsSection() {
  return (
    <section 
      id="skills"
      className="py-16 md:py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-600 relative"
    >
      {/* Header */}
      <div className="text-center mb-12 select-none">
        <span className="section-capsule">My expertise</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#372e48]">Skills & Technologies</h2>
        <div className="section-underline" />
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_CATEGORIES.map((cat, idx) => {
          const CategoryIcon = cat.icon;
          return (
            <div 
              key={idx}
              className="premium-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 select-none">
                  <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-slate-100 ${cat.color}`}>
                    <CategoryIcon size={16} />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#372e48]">{cat.title}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="skill-pill"
                    >
                      <CircleDot size={10} className="text-brand-accent animate-pulse" />
                      <span className="select-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
