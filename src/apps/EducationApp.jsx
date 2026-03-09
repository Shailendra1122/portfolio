import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function EducationApp() {
  const educationTimeline = [
    {
      period: "2023 – 2027",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "KIIT DU, Bhubaneswar",
      details: "CGPA (5th Semester): 7.1",
      courses: "Data Structures, Algorithms, Operating Systems, DBMS, OOP",
      color: "#00ffcc"
    },
    {
      period: "2022",
      degree: "Class XII (CBSE)",
      institution: "B.N.S English School, Varanasi",
      details: "Percentage: 76%",
      courses: "Physics, Chemistry, Mathematics",
      color: "#818cf8"
    },
    {
      period: "2020",
      degree: "Class X (CBSE)",
      institution: "B.N.S English School, Varanasi",
      details: "Percentage: 74%",
      courses: null,
      color: "#f472b6"
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#0b0f19] to-[#111827] text-slate-200 p-5 overflow-y-auto font-sans">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap size={20} className="text-[#00ffcc]" />
        <h1 className="text-xl font-bold text-white tracking-wide">Education Timeline</h1>
      </div>
      
      <div className="relative ml-4">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#00ffcc]/50 via-[#818cf8]/50 to-[#f472b6]/50"></div>

        {educationTimeline.map((edu, index) => (
          <div key={index} className="mb-6 relative pl-8 last:mb-0 animate-fade-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
            {/* Timeline dot */}
            <div 
              className="absolute w-3 h-3 rounded-full left-[-5px] top-1.5 ring-4 ring-[#0b0f19]"
              style={{ backgroundColor: edu.color, boxShadow: `0 0 10px ${edu.color}40` }}
            ></div>
            
            <div className="bg-white/5 rounded-xl border border-white/10 p-4 hover:bg-white/8 transition-colors">
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm">{edu.degree}</h3>
                  <p className="text-slate-400 text-xs mt-1">{edu.institution}</p>
                </div>
                <span 
                  className="text-[10px] px-2 py-1 rounded font-mono shrink-0 flex items-center gap-1"
                  style={{ 
                    backgroundColor: `${edu.color}10`, 
                    color: edu.color, 
                    border: `1px solid ${edu.color}30` 
                  }}
                >
                  <Calendar size={10} /> {edu.period}
                </span>
              </div>
              
              <p className="text-xs font-medium mt-2" style={{ color: edu.color }}>{edu.details}</p>
              
              {edu.courses && (
                <div className="mt-2 flex items-start gap-1.5">
                  <BookOpen size={11} className="text-slate-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-400">{edu.courses}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
