import React from 'react';
import profilePic from '../assets/profile.jpg';

export default function ProfileApp() {
  return (
    <div className="h-full w-full bg-slate-50 p-6 overflow-y-auto font-sans text-slate-800 pb-10">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-white overflow-hidden flex items-center justify-center shrink-0">
          <img 
            src={profilePic} 
            alt="Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">Shailendra Pratap Singh</h2>
          <p className="text-gray-700">Aspiring Software Engineer</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 text-justify leading-relaxed">
        <p className="mb-3">
          Hi! I'm Shailendra. Welcome to my newly upgraded modern portfolio.
        </p>
        <p className="mb-3">
          I enjoy building modern web applications with a focus on fluid, eye-catching design. 
          I work with a Java Full Stack tech stack including Spring Boot, React, Tailwind CSS, and Node.js to build modern, scalable web applications.
        </p>
        <p>
          Feel free to explore the desktop. Check out my resume or play a terminal game!
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-slate-800 text-white hover:bg-slate-700 px-5 py-2 rounded-lg font-medium transition-colors shadow-sm" onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}>
          GitHub
        </button>
        <button className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2 rounded-lg font-medium transition-colors shadow-sm" onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
