import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Linkedin, MapPin, Briefcase, ExternalLink, ThumbsUp, Send } from 'lucide-react';

export default function LinkedinApp() {
  return (
    <div className="h-full w-full bg-slate-950 p-5 overflow-y-auto font-sans text-slate-200">
      
      {/* LinkedIn Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5 shrink-0 select-none">
        <div className="flex items-center gap-2 font-mono text-xs font-bold text-white uppercase">
          <Linkedin size={16} className="text-cyber-blue" />
          <span>LinkedIn Interface</span>
        </div>
        <button
          onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-blue text-white text-[10px] font-mono font-bold hover:bg-sky-500 transition-colors cursor-pointer select-none"
        >
          <span>LIVE_PROFILE ↗</span>
        </button>
      </div>

      <div className="max-w-2xl mx-auto space-y-5 select-text">
        
        {/* Profile Glass Card */}
        <div className="bg-slate-900/10 rounded-xl border border-white/5 overflow-hidden relative shadow-lg">
          {/* Cyber banner backdrop */}
          <div className="h-24 bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 relative border-b border-white/5 select-none" />
          
          <div className="px-6 pb-6 relative">
            {/* Avatar circle */}
            <div className="w-24 h-24 rounded-full border-4 border-slate-950 overflow-hidden bg-slate-800 -mt-12 mb-3.5 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              <img src={profilePic} alt="Shailendra Pratap Singh" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-xl font-bold leading-tight text-white">Shailendra Pratap Singh</h1>
            <p className="text-slate-300 text-xs mt-1">Aspiring Software Engineer | IT Student @ KIIT DU</p>
            
            <p className="text-slate-500 text-[10px] font-mono mt-1.5 flex items-center gap-1 select-none">
              <MapPin size={11} className="text-cyber-pink" />
              <span>Bhubaneswar, Odisha, India</span>
            </p>

            {/* Quick Actions */}
            <div className="flex gap-2.5 mt-4 select-none">
              <button 
                className="bg-cyber-blue hover:bg-sky-500 text-white font-mono font-bold text-[10px] py-1.5 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
              >
                CONNECT
              </button>
              <button 
                className="border border-white/10 hover:border-cyber-blue/40 text-slate-300 hover:text-cyber-blue font-mono font-bold text-[10px] py-1.5 px-4 rounded-full transition-colors cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
              >
                MESSAGE
              </button>
            </div>
          </div>
        </div>

        {/* About summary panel */}
        <div className="bg-slate-900/10 rounded-xl border border-white/5 p-5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-cyber-blue mb-3 select-none">
            About / Summary
          </h2>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            I am a Computer Science student at KIIT University, passionate about software engineering and web development. 
            I enjoy building modern web applications with a focus on scalable architectures, clean code, and engaging user interfaces.
            As a Java Full Stack developer, I have experience working with React, Spring Boot, Node.js, and Tailwind CSS.
            Always eager to learn new technologies and collaborate on innovative projects.
          </p>
        </div>

        {/* Work Internships Panel */}
        <div className="bg-slate-900/10 rounded-xl border border-white/5 p-5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-cyber-purple mb-4 select-none">
            Professional Experience
          </h2>
          
          <div className="flex gap-4">
            {/* Tech Logo mockup placeholder */}
            <div className="w-12 h-12 rounded-lg bg-cyber-blue/15 flex items-center justify-center font-bold text-cyber-blue font-mono text-xs border border-cyber-blue/30 shrink-0 select-none">
              TSI
            </div>
            
            <div>
              <h3 className="font-bold text-white text-sm">Frontend Developer Intern</h3>
              <p className="text-slate-300 text-xs mt-0.5">Tech Solutions Inc. (TSI)</p>
              
              <div className="flex items-center gap-1 text-[9px] font-mono text-slate-500 mt-1 select-none">
                <Briefcase size={10} />
                <span>Summer Internship (2025)</span>
              </div>

              <ul className="text-xs text-slate-400 space-y-1.5 mt-3 list-none pl-1">
                <li className="flex gap-2"><span className="text-cyber-blue">▸</span>Developed responsive and modular UI components using React and Tailwind CSS.</li>
                <li className="flex gap-2"><span className="text-cyber-blue">▸</span>Optimized client load profiles, successfully reducing bundle sizes by 15%.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
