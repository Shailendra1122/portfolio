import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

export default function ContactApp() {
  return (
    <div className="h-full w-full bg-slate-50 p-4 font-sans text-slate-800 relative flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-[320px] rounded-2xl p-8 bg-white shadow-xl shadow-slate-200/50 border border-slate-100 my-auto shrink-0">
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Phone className="text-white" size={24} />
          </div>
          <h2 className="font-bold text-2xl mb-1 text-slate-900">Contact Me</h2>
          <p className="text-sm text-slate-500">Let's build something beautiful together.</p>
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
              <Phone size={20} />
            </div>
            <a href="tel:+917080692505" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">+91 7080692505</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
              <Mail size={20} />
            </div>
            <a href="mailto:shailendraprbns@gmail.com" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">shailendraprbns@gmail.com</a>
          </div>
          
          <div className="w-full h-[1px] bg-slate-100 my-4"></div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
              <Linkedin size={20} />
            </div>
            <a href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">LinkedIn Profile</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
              <Github size={20} />
            </div>
            <a href="https://github.com/Shailendra1122/" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">GitHub Profile</a>
          </div>
        </div>

      </div>
    </div>
  );
}
