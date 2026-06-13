import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Github, Linkedin, MapPin, Briefcase, Code2, Globe, Cpu, CheckCircle } from 'lucide-react';

export default function ProfileApp() {
  return (
    <div className="h-full w-full bg-slate-950 p-6 overflow-y-auto font-sans text-slate-200">
      
      {/* Container Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Left Widget Panel - Profile Avatar & Quick Stats */}
        <div className="md:col-span-4 flex flex-col items-center text-center p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md">
          {/* Glowing Avatar Wrapper */}
          <div className="relative w-28 h-28 rounded-full p-1 border-2 border-cyber-cyan/40 bg-slate-950 shadow-[0_0_20px_rgba(0,255,204,0.15)] glow-cyan mb-4">
            <img
              src={profilePic}
              alt="Shailendra Pratap Singh"
              className="w-full h-full rounded-full object-cover"
            />
            {/* Online Status Beacon */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-950 glow-pulse" title="Systems Active" />
          </div>

          <h2 className="text-lg font-bold text-white tracking-wide">Shailendra P. Singh</h2>
          <p className="text-cyber-cyan font-mono text-[11px] font-medium tracking-wider uppercase mt-1">
            Java Full Stack Dev
          </p>

          <div className="w-full border-t border-white/5 my-4" />

          {/* Quick Stats Grid */}
          <div className="w-full space-y-2.5 text-left text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Briefcase size={12} className="text-cyber-purple shrink-0" />
              <span className="truncate">B.Tech CSE 3rd Year</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-cyber-pink shrink-0" />
              <span className="truncate">KIIT DU, Bhubaneswar</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={12} className="text-cyber-blue shrink-0" />
              <span>Varanasi, UP, India</span>
            </div>
          </div>

          <div className="w-full border-t border-white/5 my-4" />

          {/* Availability Status Card */}
          <div className="w-full bg-cyber-cyan/5 border border-cyber-cyan/20 rounded-lg p-2.5 text-center">
            <p className="text-[10px] font-bold text-cyber-cyan uppercase tracking-wider">Availability</p>
            <p className="text-[11px] text-slate-300 font-semibold mt-0.5">Open for Internships</p>
          </div>
        </div>

        {/* Right Widget Panel - Story & Bio */}
        <div className="md:col-span-8 space-y-5">
          {/* About Card */}
          <div className="p-5 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
            <h3 className="text-xs font-bold text-cyber-cyan uppercase tracking-[0.2em] mb-3 flex items-center gap-2 select-none">
              <Code2 size={13} className="text-cyber-cyan" />
              <span>Professional Biography</span>
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-3 select-text">
              Backend-focused Computer Science student skilled in <span className="text-cyber-cyan font-medium">Java</span> and <span className="text-cyber-cyan font-medium">Spring Boot</span>, passionate about building scalable REST APIs and efficient distributed software systems.
            </p>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed select-text">
              I build backend services with high concurrency and standard database structures using <span className="text-cyber-purple font-medium">MySQL</span> and <span className="text-cyber-purple font-medium">Spring Data JPA</span>. I also develop clean responsive user interfaces with <span className="text-cyber-pink font-medium">React</span> and <span className="text-cyber-pink font-medium">Tailwind CSS</span>, and leverage <span className="text-cyber-blue font-medium">Python</span> to write custom algorithms and implement artificial intelligence concepts.
            </p>
          </div>

          {/* Focus Area Details */}
          <div className="p-5 rounded-xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
            <h3 className="text-xs font-bold text-cyber-purple uppercase tracking-[0.2em] mb-4 flex items-center gap-2 select-none">
              <Cpu size={13} className="text-cyber-purple" />
              <span>Core Core Focuses</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={14} className="text-cyber-cyan mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">REST API Engineering</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Designing stable endpoints, MVC mapping, and robust JSON payloads.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={14} className="text-cyber-cyan mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Database Optimization</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Writing optimized structured SQL queries and managing MongoDB schemas.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={14} className="text-cyber-cyan mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Full-Stack Integration</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Bridging Java microservices with interactive modern React SPAs.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={14} className="text-cyber-cyan mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Algorithm Architecture</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Analyzing space-time complexities and writing performant solutions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social CTAs */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <Github size={14} />
              <span>Explore GitHub</span>
            </button>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-cyber-blue/15 hover:bg-cyber-blue/25 text-white border border-cyber-blue/30 hover:border-cyber-blue/50 transition-all cursor-pointer"
            >
              <Linkedin size={14} className="text-sky-400" />
              <span>LinkedIn Profile</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
