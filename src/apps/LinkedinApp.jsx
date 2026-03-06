import React from 'react';
import profilePic from '../assets/profile.jpg';

export default function LinkedinApp() {
  return (
    <div className="h-full w-full bg-[#f3f2ef] text-black overflow-y-auto font-sans text-sm relative">
      <div className="bg-[#0077b5] text-white p-2 flex items-center justify-between sticky top-0 z-10 shadow-md">
        <div className="font-bold flex items-center gap-2">
          <span className="bg-white text-[#0077b5] font-black rounded text-xs px-1">in</span>
          LinkedIn
        </div>
        <button 
          className="bg-white text-[#0077b5] font-bold px-3 py-1 text-xs rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
        >
          View Live Profile
        </button>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-4">
        
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="h-24 bg-gray-300 relative bg-gradient-to-r from-blue-200 to-indigo-300">
            {/* Cover photo placeholder */}
          </div>
          
          <div className="px-6 pb-6 relative">
            <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white -mt-12 mb-3 shadow-md">
              <img src={profilePic} alt="Shailendra Pratap Singh" className="w-full h-full object-cover" />
            </div>
            
            <h1 className="text-2xl font-bold leading-tight">Shailendra Pratap Singh</h1>
            <p className="text-gray-700 text-base mb-1">Aspiring Software Engineer | IT Student @ KIIT</p>
            <p className="text-gray-500 text-xs mb-3">Bhubaneswar, Odisha, India</p>

            <div className="flex gap-2">
              <button 
                className="bg-[#0a66c2] text-white font-bold py-1 px-4 rounded-full hover:bg-[#004182] transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
              >
                Connect
              </button>
              <button 
                className="border border-[#0a66c2] text-[#0a66c2] font-bold py-1 px-4 rounded-full hover:bg-blue-50 transition-colors"
                onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}
              >
                Message
              </button>
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            I am a Computer Science student at KIIT University, passionate about software engineering and web development. 
            I enjoy building modern web applications with a focus on scalable architectures, clean code, and engaging user interfaces.
            As a Java Full Stack developer, I have experience working with React, Spring Boot, Node.js, and Tailwind CSS.
            <br/><br/>
            Always eager to learn new technologies and collaborate on innovative projects.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-bold mb-4">Experience</h2>
          
          <div className="flex gap-4 mb-4">
            <div className="w-12 h-12 bg-gray-100 flex items-center justify-center font-bold text-gray-400">TSI</div>
            <div>
              <h3 className="font-bold text-base">Frontend Developer Intern</h3>
              <p className="text-gray-700">Tech Solutions Inc.</p>
              <p className="text-gray-500 text-xs">Summer 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                <li>Developed responsive UI components using React and Tailwind CSS.</li>
                <li>Optimized web application performance by reducing bundle size by 15%.</li>
              </ul>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}
