import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import ProfileApp from '../apps/ProfileApp';
import ResumeApp from '../apps/ResumeApp';
import EducationApp from '../apps/EducationApp';
import ContactApp from '../apps/ContactApp';
import TerminalGame from '../apps/TerminalGame';

import { User, FileText, Terminal, GraduationCap, PhoneOutgoing, Github, Linkedin } from 'lucide-react';

const APPS_CONFIG = {
  profile: { id: 'profile', title: 'Profile', icon: User, Component: ProfileApp },
  resume: { id: 'resume', title: 'Resume', icon: FileText, Component: ResumeApp },
  education: { id: 'education', title: 'Education', icon: GraduationCap, Component: EducationApp },
  contact: { id: 'contact', title: 'Contact', icon: PhoneOutgoing, Component: ContactApp },
  terminal: { id: 'terminal', title: 'Terminal Games', icon: Terminal, Component: TerminalGame },
};

export default function Desktop() {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);
  const [showWelcome, setShowWelcome] = useState(true);

  // Typing animation for role text
  const [typedText, setTypedText] = useState('');
  const fullText = 'Java Full Stack Developer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  const openApp = (appId) => {
    setActiveWindowId(appId);
    setZIndexCounter((prev) => prev + 1);

    if (!windows.find((w) => w.id === appId)) {
      setWindows((prev) => [
        ...prev, 
        { ...APPS_CONFIG[appId], isMinimized: false, zIndex: zIndexCounter }
      ]);
    } else {
      setWindows((prev) =>
        prev.map((w) => (w.id === appId ? { ...w, isMinimized: false, zIndex: zIndexCounter } : w))
      );
    }
  };

  const closeWindow = (appId) => {
    setWindows((prev) => prev.filter((w) => w.id !== appId));
    if (activeWindowId === appId) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (appId) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === appId ? { ...w, isMinimized: true } : w))
    );
    if (activeWindowId === appId) {
      setActiveWindowId(null);
    }
  };

  const focusWindow = (appId) => {
    if (activeWindowId === appId) return;
    setActiveWindowId(appId);
    setZIndexCounter((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((w) => (w.id === appId ? { ...w, isMinimized: false, zIndex: zIndexCounter } : w))
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-950 relative select-none flex flex-col bg-[url('https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2560&auto=format&fit=crop')] bg-cover bg-center">
      {/* Desktop Area */}
      <div 
        className="flex-1 relative p-4 pt-[60px] flex" 
        onClick={() => setActiveWindowId(null)}
      >
        {/* Icon grid - left side */}
        <div className="flex flex-col flex-wrap gap-1 items-start content-start shrink-0">
          <DesktopIcon app={APPS_CONFIG.profile} onDoubleClick={() => openApp('profile')} />
          <DesktopIcon app={APPS_CONFIG.resume} onDoubleClick={() => openApp('resume')} />
          <DesktopIcon app={APPS_CONFIG.education} onDoubleClick={() => openApp('education')} />
          <DesktopIcon app={APPS_CONFIG.contact} onDoubleClick={() => openApp('contact')} />
          <DesktopIcon app={{ title: 'GitHub', icon: Github }} onDoubleClick={() => window.open('https://github.com/Shailendra1122/', '_blank')} />
          <DesktopIcon app={{ title: 'LinkedIn', icon: Linkedin }} onDoubleClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')} />
          <DesktopIcon app={APPS_CONFIG.terminal} onDoubleClick={() => openApp('terminal')} />
        </div>

        {/* Render Windows */}
        {windows.map((win) => {
          if (win.isMinimized) return null;
          const AppRenderer = win.Component;
          return (
            <Window
              key={win.id}
              title={win.title}
              isActive={activeWindowId === win.id}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              appId={win.id}
              zIndex={win.zIndex}
            >
              <AppRenderer />
            </Window>
          );
        })}

        {/* Welcome Hero Widget — center of desktop */}
        {showWelcome && windows.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-[40px]">
            <div className="pointer-events-auto max-w-lg text-center animate-fade-slide-up">
              <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl border border-[#00ffcc]/15 p-8 shadow-2xl shadow-black/50">
                {/* Name */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  Shailendra Pratap Singh
                </h1>
                
                {/* Typing role */}
                <p className="text-[#00ffcc] font-mono text-lg md:text-xl font-medium mb-4">
                  <span className="text-slate-500">{'> '}</span>
                  {typedText}
                  <span className="inline-block w-[2px] h-5 bg-[#00ffcc] ml-0.5 animate-pulse align-middle"></span>
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                  Welcome to my interactive desktop portfolio. Double-click on any icon to explore my projects, skills, and experience.
                </p>

                {/* Quick Actions */}
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <button 
                    className="px-5 py-2.5 rounded-lg bg-[#00ffcc]/10 border border-[#00ffcc]/30 text-[#00ffcc] font-medium text-sm hover:bg-[#00ffcc]/20 transition-all hover:shadow-[0_0_20px_rgba(0,255,204,0.15)]"
                    onClick={(e) => { e.stopPropagation(); openApp('profile'); }}
                  >
                    View Profile
                  </button>
                  <button 
                    className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-medium text-sm hover:bg-white/10 transition-all"
                    onClick={(e) => { e.stopPropagation(); openApp('resume'); }}
                  >
                    View Resume
                  </button>
                  <button 
                    className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/15 text-white font-medium text-sm hover:bg-white/10 transition-all"
                    onClick={(e) => { e.stopPropagation(); openApp('contact'); }}
                  >
                    Contact Me
                  </button>
                </div>

                {/* Status */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 glow-pulse"></span>
                    Available for work
                  </span>
                  <span>B.Tech CSE · KIIT University</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <Taskbar 
        windows={windows} 
        activeWindowId={activeWindowId} 
        onAppClick={focusWindow} 
        openApp={openApp}
      />
    </div>
  );
}
