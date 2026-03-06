import React from 'react';
import profilePic from '../assets/profile.jpg';

export default function ProfileApp() {
  return (
    <div className="h-full w-full bg-[#c0c0c0] p-4 overflow-y-auto font-sans text-sm pb-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 bg-white border-2 border-l-gray-500 border-t-gray-500 border-r-white border-b-white border-solid shadow-[inset_2px_2px_gray] overflow-hidden flex items-center justify-center">
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
      
      <div className="bg-white border-2 border-l-gray-500 border-t-gray-500 border-r-white border-b-white p-2 text-justify">
        <p className="mb-2">
          Hi! I'm Shailendra. Welcome to my retro Linux-inspired portfolio.
        </p>
        <p className="mb-2">
          I enjoy building modern web applications with a sprinkle of nostalgia. 
          I work with a Java Full Stack tech stack including Spring Boot, React, Tailwind CSS, and Node.js to build modern, scalable web applications.
        </p>
        <p>
          Feel free to explore the desktop. Check out my resume or play a terminal game!
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        <button className="bg-[#c0c0c0] border-2 border-l-white border-t-white border-r-black border-b-black shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080] px-3 py-1 font-bold active:border-l-black active:border-t-black active:border-r-white active:border-b-white active:shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] active:pt-1 active:pl-1" onClick={() => window.open('https://github.com/Shailendra1122/', '_blank')}>
          GitHub
        </button>
        <button className="bg-[#c0c0c0] border-2 border-l-white border-t-white border-r-black border-b-black shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080] px-3 py-1 font-bold active:border-l-black active:border-t-black active:border-r-white active:border-b-white active:shadow-[inset_1px_1px_#808080,inset_-1px_-1px_#dfdfdf] active:pt-1 active:pl-1" onClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')}>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
