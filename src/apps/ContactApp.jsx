import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

export default function ContactApp() {
  return (
    <div className="h-full w-full bg-[#c0c0c0] p-4 font-sans text-black relative flex flex-col items-center justify-center">
      <div className="w-full max-w-[300px] border-2 border-l-white border-t-white border-r-gray-500 border-b-gray-500 p-4 bg-white shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080]">
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-blue-900 rounded-full mx-auto mb-2 flex items-center justify-center border-2 border-white shadow-[0_0_0_1px_black]">
            <Phone className="text-white" size={24} />
          </div>
          <h2 className="font-bold text-lg">Contact Me</h2>
          <p className="text-xs text-gray-600">Let's build something together.</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-gray-700" />
            <a href="tel:+917080692505" className="text-blue-700 underline text-sm hover:text-blue-900 active:text-red-600">+91 7080692505</a>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={18} className="text-gray-700" />
            <a href="mailto:shailendraprbns@gmail.com" className="text-blue-700 underline text-sm hover:text-blue-900 active:text-red-600">shailendraprbns@gmail.com</a>
          </div>
          
          <div className="w-full h-[1px] bg-gray-400 my-2"></div>

          <div className="flex items-center gap-3">
            <Linkedin size={18} className="text-gray-700" />
            <a href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm hover:text-blue-900 active:text-red-600">LinkedIn Profile</a>
          </div>

          <div className="flex items-center gap-3">
            <Github size={18} className="text-gray-700" />
            <a href="https://github.com/Shailendra1122/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline text-sm hover:text-blue-900 active:text-red-600">GitHub Profile</a>
          </div>
        </div>

      </div>
    </div>
  );
}
