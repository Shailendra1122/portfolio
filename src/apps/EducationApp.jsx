import React from 'react';
import { GraduationCap, Calendar, BookOpen, Star, CheckCircle } from 'lucide-react';

export default function EducationApp() {
  const educationTimeline = [
    {
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "KIIT DU, Bhubaneswar",
      details: "CGPA (5th Semester): 7.1",
      courses: "Data Structures, Algorithms, Operating Systems, DBMS, Object Oriented Programming",
      color: "border-cyber-cyan text-cyber-cyan bg-cyber-cyan/5 shadow-[0_0_15px_rgba(0,255,204,0.15)]",
      bulletColor: "bg-cyber-cyan",
      borderColor: "border-cyber-cyan/30",
      stats: [
        { label: "CGPA", val: "7.1" },
        { label: "Streams", val: "CSE" },
      ]
    },
    {
      period: "2022",
      degree: "Class XII (CBSE)",
      institution: "B.N.S English School, Varanasi",
      details: "Percentage: 76%",
      courses: "Physics, Chemistry, Mathematics",
      color: "border-cyber-purple text-cyber-purple bg-cyber-purple/5 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
      bulletColor: "bg-cyber-purple",
      borderColor: "border-cyber-purple/30",
      stats: [
        { label: "Grade", val: "76%" },
        { label: "Domain", val: "Science" },
      ]
    },
    {
      period: "2020",
      degree: "Class X (CBSE)",
      institution: "B.N.S English School, Varanasi",
      details: "Percentage: 74%",
      courses: null,
      color: "border-cyber-pink text-cyber-pink bg-cyber-pink/5 shadow-[0_0_15px_rgba(236,72,153,0.15)]",
      bulletColor: "bg-cyber-pink",
      borderColor: "border-cyber-pink/30",
      stats: [
        { label: "Grade", val: "74%" },
        { label: "Domain", val: "General" },
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* Header Panel */}
      <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-white tracking-wide uppercase">Education Timeline</h2>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">Academic milestones and core courses</p>
        </div>
        <div className="p-2 bg-slate-900 border border-white/5 rounded-lg text-cyber-cyan">
          <GraduationCap size={16} className="glow-cyan" />
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative ml-4 md:ml-8 border-l border-white/10 pl-6 md:pl-8 space-y-8 select-text">
        {educationTimeline.map((edu, index) => (
          <div key={index} className="relative">
            
            {/* Cyber Connector Dot */}
            <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-slate-950 flex items-center justify-center shrink-0 ${edu.bulletColor}`} style={{ boxShadow: '0 0 10px currentColor' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />
            </span>

            {/* Glass Card */}
            <div className={`p-5 rounded-xl border bg-slate-900/10 backdrop-blur-md hover:bg-slate-900/20 transition-all duration-300 ${edu.borderColor} ${edu.color}`}>
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-white/5">
                <div>
                  <h3 className="font-bold text-white text-sm leading-snug">{edu.degree}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">{edu.institution}</p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/5 shrink-0 self-start sm:self-center">
                  <Calendar size={11} />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Achievements stats grid */}
              <div className="grid grid-cols-2 gap-4 my-4 font-mono text-[10px]">
                {edu.stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-slate-950/50 p-2 rounded border border-white/5 text-center">
                    <p className="text-slate-500 uppercase tracking-wider">{st.label}</p>
                    <p className="text-white font-bold text-xs mt-0.5">{st.val}</p>
                  </div>
                ))}
              </div>

              {/* Coursework */}
              {edu.courses && (
                <div className="pt-3 border-t border-white/5 flex gap-2 items-start text-xs text-slate-300">
                  <BookOpen size={12} className="text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-400 text-[10px] uppercase font-mono block mb-0.5">Core Coursework</span>
                    <p className="leading-relaxed">{edu.courses}</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
