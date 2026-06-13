import React from 'react';
import { Github, ExternalLink, Terminal, Cpu, Sprout, Share2, Ticket } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'JobQuest — Job Application Tracker',
    description: 'A full-stack tracking system with a Kanban workflow to manage job search stages. Includes analytics dashboards for tracking status distribution and resume upload capabilities.',
    tech: ['Spring Boot', 'Java', 'SQLite', 'Thymeleaf', 'Bootstrap'],
    github: 'https://github.com/Shailendra1122/',
    live: 'https://jobquest-gqlq.onrender.com',
    icon: Terminal,
    themeColor: 'from-cyber-cyan to-cyber-blue',
    neonShadow: 'shadow-[0_0_15px_rgba(0,255,204,0.15)]',
    mockupType: 'kanban'
  },
  {
    title: 'JPMorganChase Software Engineering Simulation',
    description: 'Designed a microservice integrated with Kafka message broker to consume transaction details, validating and persisting data via Spring Data JPA into H2 database.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Spring Data JPA', 'H2 SQL'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Cpu,
    themeColor: 'from-cyber-purple to-cyber-pink',
    neonShadow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]',
    mockupType: 'microservice'
  },
  {
    title: 'KrishiSeva — AI Agri-Tech Platform',
    description: 'An AI agriculture platform implementing machine learning models for crop disease detection and yield recommendation, backed by FastAPI and React.',
    tech: ['FastAPI', 'React', 'Python', 'Machine Learning'],
    github: 'https://github.com/Shailendra1122/',
    live: 'https://krishiseva-blush.vercel.app',
    icon: Sprout,
    themeColor: 'from-emerald-400 to-cyber-cyan',
    neonShadow: 'shadow-[0_0_15px_rgba(52,211,153,0.15)]',
    mockupType: 'agritech'
  },
  {
    title: 'CoLab Connect — Innovation Platform',
    description: 'A collaboration hub allowing creators to outline project ideas and recruit teams. Developed REST APIs for authentication, team request models, and Mongo databases.',
    tech: ['Node.js', 'Express', 'JavaScript', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Share2,
    themeColor: 'from-cyber-blue to-cyber-purple',
    neonShadow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]',
    mockupType: 'colab'
  },
  {
    title: 'Booking Management System (1Stop)',
    description: 'Ticket reservation and blogging environment designed using Laravel MVC architecture, rendering user dashboards and scheduling operations.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Ticket,
    themeColor: 'from-cyber-pink to-cyber-cyan',
    neonShadow: 'shadow-[0_0_15px_rgba(236,72,153,0.15)]',
    mockupType: 'booking'
  }
];

export default function ProjectsApp() {
  
  // Render visual mockups in CSS
  const renderMockup = (type) => {
    switch (type) {
      case 'kanban':
        return (
          <div className="w-full h-28 bg-slate-950/80 rounded-lg p-2 font-mono text-[9px] flex gap-2 border border-cyber-cyan/15 select-none">
            <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] p-1.5 rounded border border-white/5">
              <span className="text-cyber-cyan font-bold">APPLIED (4)</span>
              <div className="bg-slate-900 p-1 border border-white/5 rounded">Amazon Dev</div>
              <div className="bg-slate-900 p-1 border border-white/5 rounded">Stripe SDE</div>
            </div>
            <div className="flex-1 flex flex-col gap-1.5 bg-white/[0.02] p-1.5 rounded border border-white/5">
              <span className="text-cyber-purple font-bold">INTERVIEW (2)</span>
              <div className="bg-[#a855f7]/10 p-1 border border-[#a855f7]/30 rounded text-slate-200">Google Inc</div>
            </div>
          </div>
        );
      case 'microservice':
        return (
          <div className="w-full h-28 bg-slate-950/80 rounded-lg p-3 font-mono text-[9px] flex flex-col justify-between border border-cyber-purple/15 select-none">
            <div className="flex items-center justify-between text-cyber-purple border-b border-cyber-purple/15 pb-1">
              <span>[KAFKA CONSUMER]</span>
              <span className="text-emerald-400">CONNECT ACTIVE</span>
            </div>
            <div className="text-slate-400 space-y-1 mt-1 overflow-hidden flex-1 leading-normal">
              <p className="text-cyber-pink font-semibold">&gt; Fetching transactions...</p>
              <p className="text-slate-400">ID: tx_88192A4 - Status: VALIDATED</p>
              <p className="text-slate-400">Persisted to H2 Database [JPA]</p>
            </div>
          </div>
        );
      case 'agritech':
        return (
          <div className="w-full h-28 bg-slate-950/80 rounded-lg p-3 font-mono text-[9px] flex flex-col justify-between border border-emerald-500/15 select-none">
            <div className="flex items-center justify-between text-emerald-400 border-b border-emerald-500/15 pb-1">
              <span>[DISEASE DETECTOR]</span>
              <span className="text-cyber-cyan">FastAPI</span>
            </div>
            <div className="text-slate-300 space-y-1 mt-1 flex-1 overflow-hidden flex flex-col justify-center">
              <div className="flex justify-between items-center bg-emerald-500/5 px-2 py-1 rounded border border-emerald-500/20">
                <span>Tomato Early Blight</span>
                <span className="text-emerald-400 font-bold">94% CONFIDENCE</span>
              </div>
              <p className="text-[8px] text-slate-400 mt-1">Recommended treatment: Copper-based fungicides</p>
            </div>
          </div>
        );
      case 'colab':
        return (
          <div className="w-full h-28 bg-slate-950/80 rounded-lg p-3 font-mono text-[9px] flex flex-col justify-between border border-cyber-blue/15 select-none">
            <div className="flex items-center justify-between text-cyber-blue border-b border-cyber-blue/15 pb-1">
              <span>[CO-LAB CONNECTOR]</span>
              <span>USERS online: 24</span>
            </div>
            <div className="text-slate-300 space-y-1 mt-1 flex-1 overflow-hidden flex flex-col justify-center">
              <div className="bg-slate-900 p-1.5 border border-white/5 rounded flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">Project: CyberNet</p>
                  <p className="text-[7px] text-slate-500">Looking for: React Dev</p>
                </div>
                <button className="px-1.5 py-0.5 rounded bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/40 text-[7px]">Apply</button>
              </div>
            </div>
          </div>
        );
      case 'booking':
        return (
          <div className="w-full h-28 bg-slate-950/80 rounded-lg p-3 font-mono text-[9px] flex flex-col justify-between border border-cyber-pink/15 select-none">
            <div className="flex items-center justify-between text-cyber-pink border-b border-cyber-pink/15 pb-1">
              <span>[1STOP BOOKING]</span>
              <span className="text-slate-500">Laravel MVC</span>
            </div>
            <div className="text-slate-300 mt-1 flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-2 text-center text-[8px]">
                <div className="bg-slate-900 border border-white/5 p-1 rounded">
                  <p className="text-slate-400">Total Bookings</p>
                  <p className="text-cyber-pink font-bold text-[10px]">1,280</p>
                </div>
                <div className="bg-slate-900 border border-white/5 p-1 rounded">
                  <p className="text-slate-400">Active Blogs</p>
                  <p className="text-cyber-cyan font-bold text-[10px]">42</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* Title Header */}
      <div className="mb-6 pb-4 border-b border-white/5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-white tracking-wide uppercase">Software Engineering Projects</h2>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">Showcase of fullstack services and systems</p>
        </div>
      </div>

      {/* Grid Layout of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((proj, idx) => {
          const ProjIcon = proj.icon;
          return (
            <div
              key={idx}
              className={`rounded-xl border border-white/5 bg-slate-900/10 backdrop-blur-md p-5 flex flex-col justify-between hover:border-white/10 hover:bg-slate-900/20 transition-all duration-300 ${proj.neonShadow}`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${proj.themeColor} text-slate-950 shrink-0`}>
                      <ProjIcon size={16} />
                    </div>
                    <h3 className="font-bold text-white text-sm select-text leading-tight">{proj.title}</h3>
                  </div>
                </div>

                {/* Tech tag list */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[9px] font-mono font-medium tracking-wide bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visual mockup slot */}
                <div className="mb-4">
                  {renderMockup(proj.mockupType)}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs leading-relaxed mb-5 select-text">
                  {proj.description}
                </p>
              </div>

              {/* Action Link buttons */}
              <div className="flex items-center gap-2 mt-auto">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-[10px] font-mono font-semibold"
                >
                  <Github size={12} />
                  <span>SOURCE_CODE</span>
                </a>
                
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/35 text-cyber-cyan hover:bg-cyber-cyan/20 transition-colors text-[10px] font-mono font-semibold shadow-[0_0_8px_rgba(0,255,204,0.1)]"
                  >
                    <ExternalLink size={12} />
                    <span>LIVE_DEMO</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
