import React from 'react';
import { Phone, Mail, Linkedin, Github, Send, ExternalLink } from 'lucide-react';

export default function ContactApp() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-[#0b0f19] to-[#111827] p-5 font-sans text-slate-200 flex flex-col items-center overflow-y-auto">
      <div className="w-full max-w-[340px] my-auto shrink-0">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-[#00ffcc]/10 border border-[#00ffcc]/30 shadow-[0_0_20px_rgba(0,255,204,0.1)]">
            <Send className="text-[#00ffcc]" size={24} />
          </div>
          <h2 className="font-bold text-xl text-white">Get in Touch</h2>
          <p className="text-sm text-slate-400 mt-1">Let's build something amazing together.</p>
        </div>

        <div className="space-y-3">
          <a 
            href="tel:+917080692505" 
            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00ffcc]/30 transition-all group"
          >
            <div className="bg-[#00ffcc]/10 p-2.5 rounded-lg text-[#00ffcc] group-hover:bg-[#00ffcc]/20 transition-colors">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Phone</p>
              <p className="text-sm font-medium text-white">+91 7080692505</p>
            </div>
          </a>

          <a 
            href="mailto:shailendraprbns@gmail.com"
            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00ffcc]/30 transition-all group"
          >
            <div className="bg-[#00ffcc]/10 p-2.5 rounded-lg text-[#00ffcc] group-hover:bg-[#00ffcc]/20 transition-colors">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Email</p>
              <p className="text-sm font-medium text-white">shailendraprbns@gmail.com</p>
            </div>
          </a>
          
          <div className="h-px bg-white/10 my-2"></div>

          <a 
            href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all group"
          >
            <div className="bg-[#0077b5]/15 p-2.5 rounded-lg text-[#5cb8e6] group-hover:bg-[#0077b5]/25 transition-colors">
              <Linkedin size={18} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">LinkedIn</p>
              <p className="text-sm font-medium text-white">Shailendra Pratap Singh</p>
            </div>
            <ExternalLink size={14} className="text-slate-500" />
          </a>

          <a 
            href="https://github.com/Shailendra1122/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <div className="bg-white/10 p-2.5 rounded-lg text-white group-hover:bg-white/15 transition-colors">
              <Github size={18} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">GitHub</p>
              <p className="text-sm font-medium text-white">Shailendra1122</p>
            </div>
            <ExternalLink size={14} className="text-slate-500" />
          </a>
        </div>

      </div>
    </div>
  );
}
