import React, { useState } from 'react';
import { Download, Mail, Github, Linkedin, FileText, Eye, MapPin, Sparkles } from 'lucide-react';
import resumePdf from '../assets/RESUME.pdf';

export default function ResumeApp() {
  const [view, setView] = useState('styled'); // 'styled' or 'pdf'

  const skills = {
    'Languages': ['C', 'C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript'],
    'Web Dev': ['Next.js (React)', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express'],
    'Databases': ['Firestore', 'MongoDB', 'Hygraph CMS', 'SQLite'],
    'Data Science': ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib'],
    'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Vercel'],
    'Other Skills': ['Flutter', 'Cryptography', 'GCP', 'Linux', 'Ethical Hacking']
  };

  return (
    <div className="h-full w-full bg-slate-950 text-slate-200 flex flex-col font-sans">
      
      {/* Dynamic view toggles & download actions */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-slate-900/40 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 font-mono text-[10px]">
          <button
            onClick={() => setView('styled')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
              view === 'styled'
                ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/20 shadow-[0_0_8px_rgba(0,255,204,0.15)]'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <FileText size={11} /> OVERVIEW
          </button>
          <button
            onClick={() => setView('pdf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold transition-all cursor-pointer ${
              view === 'pdf'
                ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/20 shadow-[0_0_8px_rgba(0,255,204,0.15)]'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Eye size={11} /> PDF_VIEW
          </button>
        </div>

        <a
          href={resumePdf}
          download="Shailendra_Pratap_Singh_Resume.pdf"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyber-cyan text-slate-950 text-xs font-mono font-bold hover:bg-cyan-300 transition-all shadow-[0_0_12px_rgba(0,255,204,0.15)] active:scale-95"
        >
          <Download size={12} />
          <span>DOWNLOAD_PDF</span>
        </a>
      </div>

      {/* Frame / Stylized Overview */}
      {view === 'pdf' ? (
        <div className="flex-1 w-full bg-slate-900 relative">
          <iframe
            src={resumePdf}
            title="Resume PDF"
            className="w-full h-full border-none bg-slate-900"
            style={{ minHeight: '100%' }}
          />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-5 space-y-6 select-text">
          
          {/* Main Info Card */}
          <div className="text-center pb-5 border-b border-white/5 relative">
            <div className="absolute right-0 top-0 text-cyber-cyan animate-pulse">
              <Sparkles size={16} />
            </div>

            <h1 className="text-xl font-bold text-white tracking-wide uppercase">Shailendra Pratap Singh</h1>
            <p className="text-cyber-cyan font-mono text-xs font-medium mt-1">B.Tech 3rd Year | Developer | Student</p>
            
            <div className="flex items-center justify-center gap-3 mt-3.5 text-[10px] font-mono text-slate-400 flex-wrap">
              <span className="flex items-center gap-1"><Mail size={11} className="text-cyber-purple" /> shailendraprbns@gmail.com</span>
              <span>•</span>
              <a href="https://github.com/Shailendra1122/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyber-cyan transition-colors">
                <Github size={11} /> GitHub
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyber-cyan transition-colors">
                <Linkedin size={11} /> LinkedIn
              </a>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin size={11} className="text-cyber-pink" /> KP1, KIIT, Bhubaneswar, Odisha</span>
            </div>
            
            <p className="text-xs text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
              Backend-focused Computer Science student skilled in Java and Spring Boot, passionate about building scalable REST APIs and efficient, microservice-based software systems.
            </p>
          </div>

          {/* Technical Skills Categorization */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-cyber-cyan mb-3 flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan glow-cyan" />
              Technical Core Inventory
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-slate-900/30 rounded-lg border border-white/5 p-3">
                  <p className="text-[9px] font-bold uppercase font-mono tracking-wider text-slate-500 mb-2">{category}</p>
                  <div className="flex flex-wrap gap-1">
                    {items.map(item => (
                      <span key={item} className="px-2 py-0.5 text-[9px] font-mono rounded bg-white/[0.03] text-slate-300 border border-white/5 hover:border-cyber-cyan/25 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internships & Experience Projects */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-cyber-purple mb-4 flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple" />
              Experience & Project History
            </h2>

            <div className="space-y-4">
              
              {/* JobQuest */}
              <div className="bg-slate-900/10 rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                  <div>
                    <h3 className="font-bold text-white text-sm">JobQuest — Job Application Tracker</h3>
                    <p className="text-[10px] font-mono text-cyber-cyan mt-0.5">Personal Project</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a href="https://github.com/Shailendra1122" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 hover:text-white transition-colors">Source</a>
                    <a href="https://jobquest-gqlq.onrender.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 hover:bg-cyber-cyan/20 transition-colors">Live ↗</a>
                  </div>
                </div>
                
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed pl-1">
                  <li className="flex gap-2"><span className="text-cyber-cyan shrink-0">▸</span>Built a full-stack job application tracking system with REST APIs and MVC architecture.</li>
                  <li className="flex gap-2"><span className="text-cyber-cyan shrink-0">▸</span>Implemented Kanban workflow to track application stages (Applied → Interview → Offer).</li>
                  <li className="flex gap-2"><span className="text-cyber-cyan shrink-0">▸</span>Developed analytics dashboard for tracking application trends and status distribution.</li>
                  <li className="flex gap-2"><span className="text-cyber-cyan shrink-0">▸</span>Integrated file uploads for resumes and cover letters.</li>
                </ul>

                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {['Spring Boot', 'Java', 'SQLite', 'Thymeleaf', 'Bootstrap'].map(t => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
              
              {/* JPMorgan */}
              <div className="bg-slate-900/10 rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                  <div>
                    <h3 className="font-bold text-white text-sm">JPMorganChase Software Engineering Job Simulation</h3>
                    <p className="text-[10px] font-mono text-cyber-purple mt-0.5">Job Simulation Program (Forage)</p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#bf55ec]/10 text-slate-300 border border-[#bf55ec]/20 shrink-0 select-none">2025</span>
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed pl-1">
                  <li className="flex gap-2"><span className="text-cyber-purple shrink-0">▸</span>Integrated Kafka into a Spring Boot microservice to consume high-volume transaction messages.</li>
                  <li className="flex gap-2"><span className="text-cyber-purple shrink-0">▸</span>Implemented transaction validation and persistence using Spring Data JPA with H2 SQL database.</li>
                  <li className="flex gap-2"><span className="text-cyber-purple shrink-0">▸</span>Connected the service to an external REST Incentive API using RestTemplate.</li>
                  <li className="flex gap-2"><span className="text-cyber-purple shrink-0">▸</span>Developed REST endpoints for querying user balances via Spring controllers.</li>
                </ul>

                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {['Java', 'Spring Boot', 'Kafka', 'Spring Data JPA', 'H2 SQL'].map(t => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>

              {/* KrishiSeva */}
              <div className="bg-slate-900/10 rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                  <div>
                    <h3 className="font-bold text-white text-sm">KrishiSeva — AI-Driven Agri-Tech Platform</h3>
                    <p className="text-[10px] font-mono text-emerald-400 mt-0.5">Project Collaboration</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 select-none">2025</span>
                    <a href="https://krishiseva-blush.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 hover:bg-cyber-cyan/20 transition-colors">Live ↗</a>
                  </div>
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed pl-1">
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>Built a smart agriculture platform using FastAPI and React for crop disease detection and soil intelligence.</li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>Integrated machine learning models for crop recommendation and yield prediction.</li>
                  <li className="flex gap-2"><span className="text-emerald-400 shrink-0">▸</span>Developed a responsive web interface for real-time farmer interaction and advisory services.</li>
                </ul>

                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {['FastAPI', 'React', 'ML', 'Python'].map(t => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>

              {/* CoLab Connect */}
              <div className="bg-slate-900/10 rounded-xl border border-white/5 p-4 hover:border-white/10 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2 flex-wrap sm:flex-nowrap">
                  <div>
                    <h3 className="font-bold text-white text-sm">CoLab Connect — Open Collaboration Platform</h3>
                    <p className="text-[10px] font-mono text-cyber-blue mt-0.5">Backend Development</p>
                  </div>
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 shrink-0 select-none">2024</span>
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed pl-1">
                  <li className="flex gap-2"><span className="text-cyber-blue shrink-0">▸</span>Built a collaboration platform allowing users to publish projects and recruit team members.</li>
                  <li className="flex gap-2"><span className="text-cyber-blue shrink-0">▸</span>Developed REST APIs using Node.js and Express for authentication and project management.</li>
                  <li className="flex gap-2"><span className="text-cyber-blue shrink-0">▸</span>Designed scalable MongoDB schema for user relationships and project tracking.</li>
                </ul>

                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {['JavaScript', 'Node.js', 'MongoDB', 'Tailwind CSS'].map(t => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Details */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-cyber-pink mb-4 flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-pink" />
              Academic Record
            </h2>
            <div className="space-y-3">
              <div className="bg-slate-900/10 rounded-xl border border-white/5 p-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <p className="font-semibold text-white text-xs md:text-sm">B.Tech in Computer Science & Engineering</p>
                    <p className="text-slate-400 text-xs mt-0.5">KIIT DU, Bhubaneswar</p>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20 font-mono shrink-0 select-none">2023–2027</span>
                </div>
                <p className="text-xs font-semibold text-cyber-cyan mt-2">CGPA (5th Semester): 7.1</p>
              </div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
