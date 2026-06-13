import React from 'react';
import { Github, ExternalLink, MessageSquare, ShieldAlert, Sprout, Share2, Ticket, Github as GithubIcon } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'JobQuest — Job Tracker',
    displayName: 'JobQuest',
    category: 'Full Stack',
    description: 'A full-stack job application tracker utilizing a Kanban workflow to monitor application stages, track status trends via dashboards, and manage resumes.',
    tech: ['Spring Boot', 'Java', 'SQLite', 'Thymeleaf', 'Bootstrap'],
    github: 'https://github.com/Shailendra1122/',
    live: 'https://jobquest-gqlq.onrender.com',
    icon: MessageSquare,
    bannerColor: 'bg-emerald-500 text-white',
    categoryColor: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20'
  },
  {
    title: 'JPMorganChase Microservice',
    displayName: 'JPMorgan Microservice',
    category: 'SDE Program',
    description: 'Integrated Kafka message broker to Spring Boot microservice to validate and persist high-volume transaction messages into H2 database tables.',
    tech: ['Java', 'Spring Boot', 'Kafka', 'Spring Data JPA', 'H2 SQL'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: ShieldAlert,
    bannerColor: 'bg-red-500 text-white',
    categoryColor: 'bg-red-500/10 text-red-600 border border-red-500/20'
  },
  {
    title: 'KrishiSeva Agri-Tech',
    displayName: 'KrishiSeva AI',
    category: 'ML / AI',
    description: 'Agri-Tech intelligence platform employing machine learning models for real-time crop disease detection and tailored yield recommendations.',
    tech: ['FastAPI', 'React', 'Python', 'Machine Learning', 'OpenCV'],
    github: 'https://github.com/Shailendra1122/',
    live: 'https://krishiseva-blush.vercel.app',
    icon: Sprout,
    bannerColor: 'bg-amber-500 text-white',
    categoryColor: 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
  },
  {
    title: 'CoLab Connect Platform',
    displayName: 'CoLab Connect',
    category: 'Full Stack',
    description: 'An open collaboration hub allowing users to publish projects, recruit members, and secure connections. Rest APIs handled by Express and MongoDB.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Share2,
    bannerColor: 'bg-sky-500 text-white',
    categoryColor: 'bg-sky-500/10 text-sky-600 border border-sky-500/20'
  },
  {
    title: 'BMS Booking System (1Stop)',
    displayName: '1Stop Booking',
    category: 'MVC Backend',
    description: 'A Laravel booking management system and blog with customized user/admin scheduling dashboards and database queries.',
    tech: ['PHP', 'Laravel', 'Bootstrap', 'MySQL'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Ticket,
    bannerColor: 'bg-purple-500 text-white',
    categoryColor: 'bg-purple-500/10 text-purple-600 border border-purple-500/20'
  }
];

export default function ProjectsSection() {
  return (
    <section 
      id="projects"
      className="py-16 md:py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-600 relative select-text"
    >
      {/* Header */}
      <div className="text-center mb-6 select-none">
        <span className="section-capsule">What I've built</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#372e48]">Featured Projects</h2>
        <div className="section-underline" />
      </div>

      {/* GitHub Callout button from screenshot 2 */}
      <div className="flex justify-center mb-10 select-none">
        <button
          onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-pink to-brand-accent hover:opacity-90 text-white text-xs font-mono font-bold transition-all shadow-md"
        >
          <GithubIcon size={14} />
          <span>View All Projects on GitHub</span>
        </button>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((proj, idx) => {
          const ProjectIcon = proj.icon;
          return (
            <div 
              key={idx}
              className="premium-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Colored Header Banner */}
                <div className={`h-32 ${proj.bannerColor} flex items-center justify-center p-4 select-none relative`}>
                  {/* Subtle vector lines design */}
                  <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none" />
                  <span className="text-lg font-bold tracking-wide text-center drop-shadow-sm font-sans uppercase">
                    {proj.displayName}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between gap-2.5 mb-3.5 select-none">
                    <div className="flex items-center gap-1.5 text-[#372e48]">
                      <ProjectIcon size={15} className="shrink-0" />
                      <span className="font-bold text-xs truncate max-w-[130px] sm:max-w-[150px]">{proj.title}</span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider ${proj.categoryColor}`}>
                      {proj.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Tech tags list */}
                  <div className="flex flex-wrap gap-1 mb-2 select-none">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white border border-[#f8e5db] text-slate-500 text-[9px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links footer */}
              <div className="p-5 pt-0 flex items-center gap-2 select-none">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-[#f8e5db] bg-white hover:bg-slate-50 text-[#372e48] text-[10px] font-semibold transition-colors cursor-pointer"
                >
                  <Github size={12} />
                  <span>Code</span>
                </a>
                
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand-pink text-white hover:opacity-95 text-[10px] font-semibold transition-colors cursor-pointer"
                  >
                    <ExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
