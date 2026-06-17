import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, MessageSquare, ShieldAlert, Sprout, Share2, Ticket } from 'lucide-react';

function useInView(threshold = 0.1) {
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
    gradient: 'from-[#10B981] via-[#059669] to-[#065F46]',
    accentColor: '#10B981',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    featured: true,
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
    gradient: 'from-[#EF4444] via-[#DC2626] to-[#991B1B]',
    accentColor: '#EF4444',
    categoryColor: 'bg-red-500/10 text-red-400 border-red-500/20',
    featured: false,
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
    gradient: 'from-[#F59E0B] via-[#D97706] to-[#92400E]',
    accentColor: '#F59E0B',
    categoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    featured: true,
  },
  {
    title: 'CoLab Connect Platform',
    displayName: 'CoLab Connect',
    category: 'Full Stack',
    description: 'An open collaboration hub allowing users to publish projects, recruit members, and secure connections. REST APIs handled by Express and MongoDB.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Shailendra1122/',
    live: null,
    icon: Share2,
    gradient: 'from-[#0EA5E9] via-[#0284C7] to-[#075985]',
    accentColor: '#0EA5E9',
    categoryColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    featured: false,
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
    gradient: 'from-[#8B5CF6] via-[#7C3AED] to-[#5B21B6]',
    accentColor: '#8B5CF6',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    featured: false,
  }
];

function ProjectCard({ proj, delay, inView }) {
  const [hovered, setHovered] = useState(false);
  const ProjectIcon = proj.icon;

  return (
    <div
      className={`relative glass-card overflow-hidden flex flex-col group cursor-default transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Featured Badge */}
      {proj.featured && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-[#FF5F8F]/15 border border-[#FF5F8F]/30 text-[#FF5F8F] text-[9px] font-mono font-bold uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Gradient Banner */}
      <div className={`relative h-36 bg-gradient-to-br ${proj.gradient} flex items-center justify-center overflow-hidden`}>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}
        />
        {/* Scan line effect on hover */}
        <div
          className="absolute inset-x-0 h-1 blur-sm opacity-30 transition-all duration-300"
          style={{
            background: 'rgba(255,255,255,0.5)',
            top: hovered ? '100%' : '-10%',
            transition: 'top 0.8s ease',
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <ProjectIcon size={28} className="text-white/90" />
          <span className="text-white font-black text-base uppercase tracking-wider drop-shadow-sm">
            {proj.displayName}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Category */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-bold text-sm text-white leading-snug">{proj.title}</h3>
            <span className={`shrink-0 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${proj.categoryColor}`}>
              {proj.category}
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-xs leading-relaxed mb-4">{proj.description}</p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {proj.tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:bg-white/[0.1] hover:text-white hover:border-white/20 text-[11px] font-semibold transition-all duration-200"
          >
            <Github size={13} />
            Code
          </a>
          {proj.live ? (
            <a
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl btn-primary text-[11px] font-semibold"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-600 text-[11px] font-semibold cursor-not-allowed">
              Private Repo
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [headerRef, headerInView] = useInView(0.1);
  const [gridRef, gridInView] = useInView(0.05);

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-12 w-full max-w-7xl mx-auto font-sans text-slate-300 relative"
    >
      {/* Section Header */}
      <div
        ref={headerRef}
        className={`text-center mb-8 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="section-capsule">What I've built</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="section-underline" />
      </div>

      {/* GitHub Callout */}
      <div className={`flex justify-center mb-10 transition-all duration-700 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
        <a
          href="https://github.com/Shailendra1122/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-sm font-bold text-slate-300 hover:text-white transition-all hover:border-[#FF5F8F]/30 hover:shadow-lg hover:shadow-[#FF5F8F]/10"
        >
          <Github size={16} className="text-[#FF5F8F]" />
          View All Projects on GitHub
          <ExternalLink size={13} className="text-slate-500" />
        </a>
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} delay={idx * 100} inView={gridInView} />
        ))}
      </div>
    </section>
  );
}
