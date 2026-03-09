import React, { useState } from 'react';
import { Download, Mail, Github, Linkedin, FileText, Eye, MapPin } from 'lucide-react';
import resumePdf from '../assets/RESUME.pdf';

export default function ResumeApp() {
  const [view, setView] = useState('styled'); // 'styled' or 'pdf'

  const skills = {
    'Languages': ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS'],
    'Web Dev': ['Next.js (React)', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express'],
    'Databases': ['Firestore', 'MongoDB', 'Hygraph CMS', 'SQLite'],
    'Data Science': ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib'],
    'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Netlify', 'DigitalOcean', 'Vercel'],
    'Other Skills': ['Flutter', 'Cryptography', 'GCP', 'Linux', 'Ethical Hacking']
  };

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#0b0f19] to-[#111827] text-slate-200 flex flex-col font-sans">
      
      {/* Top toolbar with view toggle and download */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03] shrink-0">
        <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
          <button
            onClick={() => setView('styled')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === 'styled'
                ? 'bg-[#00ffcc]/15 text-[#00ffcc] border border-[#00ffcc]/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <FileText size={12} /> Overview
          </button>
          <button
            onClick={() => setView('pdf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              view === 'pdf'
                ? 'bg-[#00ffcc]/15 text-[#00ffcc] border border-[#00ffcc]/30'
                : 'text-slate-400 hover:text-slate-200 border border-transparent'
            }`}
          >
            <Eye size={12} /> View PDF
          </button>
        </div>

        <a
          href={resumePdf}
          download="Shailendra_Pratap_Singh_Resume.pdf"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] text-xs font-medium hover:bg-[#00ffcc]/20 transition-all hover:shadow-[0_0_12px_rgba(0,255,204,0.15)]"
        >
          <Download size={12} /> Download
        </a>
      </div>

      {/* Content area */}
      {view === 'pdf' ? (
        <div className="flex-1 w-full bg-[#1e1e2e] relative">
          <iframe
            src={resumePdf}
            title="Resume PDF"
            className="w-full h-full border-none"
            style={{ minHeight: '100%' }}
          />
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-5">
          
          {/* Header */}
          <div className="text-center mb-5 pb-4 border-b border-[#00ffcc]/20">
            <h1 className="text-2xl font-bold text-white tracking-wide">Shailendra Pratap Singh</h1>
            <p className="text-[#00ffcc] text-sm font-medium mt-1">B.Tech 3rd Year | Developer | Student</p>
            <div className="flex items-center justify-center gap-3 mt-2 text-xs text-slate-400 flex-wrap">
              <span className="flex items-center gap-1"><Mail size={11} /> shailendraprbns@gmail.com</span>
              <span>•</span>
              <a href="https://github.com/Shailendra1122/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#00ffcc] transition-colors">
                <Github size={11} /> GitHub
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#00ffcc] transition-colors">
                <Linkedin size={11} /> LinkedIn
              </a>
              <span>•</span>
              <span className="flex items-center gap-1"><MapPin size={11} /> KP1, KIIT, Bhubaneswar, Odisha</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 max-w-lg mx-auto leading-relaxed">
              Results-driven Computer Science and Engineering student seeking opportunities to leverage self-taught full-stack development skills and a passion for creating things that live on the internet.
            </p>
          </div>

          {/* Skills */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00ffcc] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] glow-pulse"></span>
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white/5 rounded-lg border border-white/10 p-3">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">{category}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map(item => (
                      <span key={item} className="px-2 py-0.5 text-[10px] font-medium rounded bg-[#00ffcc]/8 text-[#00ffcc]/90 border border-[#00ffcc]/15">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internships & Projects */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00ffcc] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] glow-pulse"></span>
              Internships & Projects
            </h2>

            <div className="space-y-3">
              
              {/* JPMorgan */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">JPMorganChase Software Engineering Job Simulation</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Forage</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 font-mono shrink-0">2025</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Integrated Kafka into a Spring Boot microservice to consume high-volume transaction messages</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Implemented transaction validation and persistence using Spring Data JPA with H2 SQL database</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Connected the service to an external REST Incentive API using RestTemplate</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Developed REST endpoints for querying user balances via Spring controllers</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Verified system behaviour using Maven test suites and debugging tools</li>
                </ul>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">Java</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Spring Boot</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Kafka</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">H2 SQL</span>
                </div>
              </div>

              {/* KrishiSeva */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">KrishiSeva — AI-Driven Agri-Tech Platform</h3>
                    <a href="https://krishiseva-blush.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                      Live ↗
                    </a>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 font-mono shrink-0">2025</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Built a smart agriculture platform using FastAPI and React for crop disease detection and soil intelligence</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Integrated machine learning models for crop recommendation and yield prediction</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Developed a responsive web interface for real-time farmer interaction and advisory services</li>
                </ul>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">FastAPI</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">React</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">ML</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Python</span>
                </div>
              </div>

              {/* CoLab Connect */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">CoLab Connect — Open Innovation & Collaboration Platform</h3>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 font-mono shrink-0">2024</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Built a collaboration platform allowing users to publish projects and recruit team members</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Developed REST APIs using Node.js and Express for authentication and project management</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Designed scalable MongoDB schema for user relationships and project tracking</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Created a clean UI using Tailwind CSS for simplified idea sharing</li>
                </ul>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">JavaScript</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Node.js</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">MongoDB</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">Tailwind CSS</span>
                </div>
              </div>

              {/* 1Stop */}
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">Back-End Web Development — Booking Management System (1Stop)</h3>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Built ticket booking and blogging system using Laravel and PHP</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Developed user and admin dashboards for booking and event management</li>
                  <li className="flex gap-2"><span className="text-[#00ffcc] shrink-0">▸</span>Implemented responsive UI using Bootstrap and optimized database queries</li>
                </ul>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">PHP</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">Laravel</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Bootstrap</span>
                </div>
              </div>

            </div>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#00ffcc] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00ffcc] glow-pulse"></span>
              Education
            </h2>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-white text-sm">B.Tech in Computer Science & Engineering</p>
                    <p className="text-slate-400 text-xs mt-0.5">KIIT DU, Bhubaneswar</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/20 font-mono shrink-0">2023–2027</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">CGPA (5th Semester): 7.1</p>
              </div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-white text-sm">Class XII (CBSE)</p>
                    <p className="text-slate-400 text-xs mt-0.5">B.N.S English School, Varanasi</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#818cf8]/10 text-[#818cf8] border border-[#818cf8]/20 font-mono shrink-0">2022</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Percentage: 76%</p>
              </div>
              <div className="bg-white/5 rounded-lg border border-white/10 p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-white text-sm">Class X (CBSE)</p>
                    <p className="text-slate-400 text-xs mt-0.5">B.N.S English School, Varanasi</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#f472b6]/10 text-[#f472b6] border border-[#f472b6]/20 font-mono shrink-0">2020</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">Percentage: 74%</p>
              </div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
