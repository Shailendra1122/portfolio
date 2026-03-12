import React from 'react';
import profilePic from '../assets/profile.jpg';
import { Github, Linkedin, MapPin, Briefcase, Code2, ExternalLink } from 'lucide-react';

export default function ProfileApp() {
  const skills = ['C', 'C++', 'Java', 'Python', 'HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Node.js', 'Express', 'Spring Boot', 'Tailwind CSS', 'Bootstrap', 'MongoDB', 'SQLite', 'TensorFlow', 'Flutter'];

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#0b0f19] to-[#111827] p-6 overflow-y-auto font-sans text-slate-200">

      {/* Header with profile */}
      <div className="flex items-center gap-5 mb-6">
        <div className="w-20 h-20 rounded-full border-2 border-[#00ffcc]/50 overflow-hidden shadow-[0_0_20px_rgba(0,255,204,0.15)] shrink-0">
          <img
            src={profilePic}
            alt="Shailendra Pratap Singh"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white tracking-wide">Shailendra Pratap Singh</h2>
          <p className="text-[#00ffcc] font-medium text-sm flex items-center gap-1.5 mt-0.5">
            <Briefcase size={14} /> B.Tech 3rd Year | Developer | Student
          </p>
          <p className="text-slate-400 text-xs flex items-center gap-1 mt-1">
            <MapPin size={12} /> KP1, KIIT, Bhubaneswar, Odisha
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-5 mb-5 backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-[#00ffcc] uppercase tracking-wider mb-3 flex items-center gap-2">
          <Code2 size={14} /> About
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          Backend-focused Computer Science student skilled in Java and Spring Boot, passionate about building scalable REST APIs and efficient software systems.
        </p>
        <p className="text-slate-300 text-sm leading-relaxed">
          I build backend applications using <span className="text-[#00ffcc]">Java</span> and <span className="text-[#00ffcc]">Spring Boot</span>, work with <span className="text-[#00ffcc]">MySQL</span> for databases, and develop responsive interfaces using <span className="text-[#00ffcc]">HTML</span>, <span className="text-[#00ffcc]">CSS</span>, and <span className="text-[#00ffcc]">Bootstrap</span>. I also use <span className="text-[#00ffcc]">Python</span> to implement algorithms, AI concepts, and machine learning projects.</p>
      </div>

      {/* Skills Badges */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-5 mb-5 backdrop-blur-sm">
        <h3 className="text-sm font-semibold text-[#00ffcc] uppercase tracking-wider mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full border border-[#00ffcc]/30 text-[#00ffcc] bg-[#00ffcc]/5 hover:bg-[#00ffcc]/15 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-3">
        <button
          className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all border border-white/10 hover:border-white/20"
          onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}
        >
          <Github size={16} /> GitHub <ExternalLink size={12} className="opacity-50" />
        </button>
        <button
          className="flex items-center gap-2 bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-[#5cb8e6] px-4 py-2.5 rounded-lg font-medium text-sm transition-all border border-[#0077b5]/30 hover:border-[#0077b5]/50"
          onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
        >
          <Linkedin size={16} /> LinkedIn <ExternalLink size={12} className="opacity-50" />
        </button>
      </div>
    </div>
  );
}
