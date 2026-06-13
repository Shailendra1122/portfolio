import React, { useState, useEffect } from 'react';
import { Menu, Terminal, LayoutDashboard, Battery, Wifi, Volume2, User, FileText, GraduationCap, Code2, Phone, Github, Linkedin, LogOut, Briefcase } from 'lucide-react';

export default function Taskbar({ windows, activeWindowId, onAppClick, openApp, onBackToHero }) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setDate(now.toLocaleDateString([], { month: 'short', day: 'numeric' }));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMenuClick = (appId) => {
    openApp(appId);
    setMenuOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-[44px] glass-panel border-b border-white/10 z-[10000] flex items-center px-4 justify-between font-sans">
      {/* Menu / Launcher Button */}
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
            menuOpen 
              ? 'bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/35 shadow-[0_0_12px_rgba(0,255,204,0.15)]' 
              : 'bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:border-white/10'
          }`}
        >
          <Menu size={14} className={menuOpen ? "animate-spin" : ""} style={{ animationDuration: '4s' }} />
          <span>LAUNCHER</span>
        </button>

        {/* Start Menu Dropdown */}
        {menuOpen && (
          <>
            {/* Backdrop click closer */}
            <div className="fixed inset-0 z-[-1]" onClick={() => setMenuOpen(false)} />
            
            <div className="absolute left-0 top-[38px] w-64 rounded-xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl p-3 shadow-2xl text-slate-300 animate-fade-slide-up">
              {/* Header profile info */}
              <div className="px-3 py-2.5 border-b border-white/5 mb-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-cyber-cyan/30 overflow-hidden bg-slate-800">
                  <div className="w-full h-full bg-gradient-to-tr from-cyber-cyan to-cyber-purple animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide leading-tight">Shailendra P. Singh</h4>
                  <p className="text-[9px] font-mono text-cyber-cyan">Java Dev // ONLINE</p>
                </div>
              </div>

              {/* Menu Options */}
              <div className="flex flex-col gap-0.5 text-xs font-medium">
                <button onClick={() => handleMenuClick('profile')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <User size={13} className="text-cyber-cyan" />
                  <span>Profile / About Me</span>
                </button>
                <button onClick={() => handleMenuClick('skills')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <Code2 size={13} className="text-cyber-purple" />
                  <span>Skills Inventory</span>
                </button>
                <button onClick={() => handleMenuClick('projects')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <Briefcase size={13} className="text-cyber-blue" />
                  <span>Projects / Demos</span>
                </button>
                <button onClick={() => handleMenuClick('education')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <GraduationCap size={13} className="text-cyber-pink" />
                  <span>Education Timeline</span>
                </button>
                <button onClick={() => handleMenuClick('resume')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <FileText size={13} className="text-slate-400" />
                  <span>Resume PDF</span>
                </button>
                <button onClick={() => handleMenuClick('contact')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-white/5 rounded-lg text-left transition-colors w-full cursor-pointer text-slate-200">
                  <Phone size={13} className="text-cyber-cyan" />
                  <span>Contact / Connect</span>
                </button>
                <button onClick={() => handleMenuClick('terminal')} className="flex items-center gap-2.5 px-3 py-2 hover:bg-cyber-cyan/5 rounded-lg text-left transition-colors w-full cursor-pointer text-cyber-cyan font-semibold">
                  <Terminal size={13} />
                  <span>Interactive Terminal</span>
                </button>

                <div className="h-px bg-white/5 my-1.5" />

                {/* External Social Links */}
                <a href="https://github.com/Shailendra1122/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-1.5 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white">
                  <span className="flex items-center gap-2.5"><Github size={13} /> GitHub Profile</span>
                  <span className="text-[9px] font-mono">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/shailendra-pratap-singh-067281362/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-3 py-1.5 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white">
                  <span className="flex items-center gap-2.5"><Linkedin size={13} className="text-cyber-blue" /> LinkedIn Connect</span>
                  <span className="text-[9px] font-mono">↗</span>
                </a>

                <div className="h-px bg-white/5 my-1.5" />

                {/* Exit Back to Hero */}
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onBackToHero();
                  }}
                  className="flex items-center gap-2.5 px-3 py-2 hover:bg-cyber-pink/10 hover:text-cyber-pink rounded-lg text-left transition-colors w-full text-slate-400 font-semibold cursor-pointer"
                >
                  <LogOut size={13} />
                  <span>Exit OS Workspace</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Tabs of Open Windows */}
      <div className="flex flex-1 mx-4 gap-1.5 overflow-x-auto justify-start max-w-2xl no-scrollbar">
        {windows.map((w) => {
          const isAct = activeWindowId === w.id && !w.isMinimized;
          return (
            <button
              key={w.id}
              onClick={() => onAppClick(w.id)}
              className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono transition-all duration-200 border cursor-pointer shrink-0 ${
                isAct
                  ? 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/30'
                  : 'bg-white/[0.02] text-slate-400 border-transparent hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              <w.icon size={11} className={isAct ? 'text-cyber-cyan' : 'text-slate-500'} />
              <span>{w.title}</span>
            </button>
          );
        })}
      </div>

      {/* System Tray (Clock, Simulators) */}
      <div className="flex items-center gap-4 text-slate-400 font-mono text-xs select-none">
        {/* Wifi signal */}
        <div className="flex items-center gap-0.5 cursor-help" title="Connection: Secure 5G">
          <Wifi size={13} className="text-cyber-cyan" />
        </div>

        {/* Battery status */}
        <div className="flex items-center gap-1 cursor-help" title="Battery status: 98% (Charging)">
          <Battery size={13} className="text-emerald-400" />
          <span className="text-[10px] hidden md:inline">98%</span>
        </div>

        {/* Volume status */}
        <div className="flex items-center gap-0.5 cursor-pointer hover:text-white" title="Audio Levels: 100%">
          <Volume2 size={13} />
        </div>

        <div className="h-4 w-[1px] bg-white/10" />

        {/* Clock & Date */}
        <div className="flex items-center gap-2 text-right">
          <span className="text-[10px] text-slate-500 hidden sm:inline">{date}</span>
          <span className="text-cyber-cyan font-bold drop-shadow-[0_0_8px_rgba(0,255,204,0.3)]">{time}</span>
        </div>
      </div>
    </div>
  );
}
