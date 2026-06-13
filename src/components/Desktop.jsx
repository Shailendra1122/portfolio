import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from './Window';

// Import apps content
import ProfileApp from '../apps/ProfileApp';
import SkillsApp from '../apps/SkillsApp';
import ProjectsApp from '../apps/ProjectsApp';
import EducationApp from '../apps/EducationApp';
import ResumeApp from '../apps/ResumeApp';
import ContactApp from '../apps/ContactApp';
import GithubApp from '../apps/GithubApp';
import LinkedinApp from '../apps/LinkedinApp';
import TerminalGame from '../apps/TerminalGame';

// Lucide Icons
import { User, FileText, GraduationCap, Code2, Briefcase, Phone, Github, Linkedin, Terminal } from 'lucide-react';

const APPS_CONFIG = {
  profile: { id: 'profile', title: 'Profile', icon: User, Component: ProfileApp },
  skills: { id: 'skills', title: 'Skills', icon: Code2, Component: SkillsApp },
  projects: { id: 'projects', title: 'Projects', icon: Briefcase, Component: ProjectsApp },
  education: { id: 'education', title: 'Education', icon: GraduationCap, Component: EducationApp },
  resume: { id: 'resume', title: 'Resume', icon: FileText, Component: ResumeApp },
  contact: { id: 'contact', title: 'Contact', icon: Phone, Component: ContactApp },
  github: { id: 'github', title: 'GitHub Stats', icon: Github, Component: GithubApp },
  linkedin: { id: 'linkedin', title: 'LinkedIn Card', icon: Linkedin, Component: LinkedinApp },
  terminal: { id: 'terminal', title: 'Terminal CLI', icon: Terminal, Component: TerminalGame },
};

export default function Desktop({ initialApp, onBackToHero }) {
  const [windows, setWindows] = useState([]);
  const [activeWindowId, setActiveWindowId] = useState(null);
  const [zIndexCounter, setZIndexCounter] = useState(10);

  // Focus and open initial app if navigated with quick CTA from Hero
  useEffect(() => {
    if (initialApp && APPS_CONFIG[initialApp]) {
      openApp(initialApp);
    }
  }, [initialApp]);

  const openApp = (appId) => {
    setActiveWindowId(appId);
    setZIndexCounter((prev) => prev + 1);

    if (!windows.find((w) => w.id === appId)) {
      setWindows((prev) => [
        ...prev,
        { ...APPS_CONFIG[appId], isMinimized: false, zIndex: zIndexCounter + 1 }
      ]);
    } else {
      setWindows((prev) =>
        prev.map((w) => (w.id === appId ? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 } : w))
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
      prev.map((w) => (w.id === appId ? { ...w, isMinimized: false, zIndex: zIndexCounter + 1 } : w))
    );
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative select-none flex flex-col pt-[44px] bg-slate-950 bg-radial from-[#0e081c] via-[#04060c] to-[#010204]">
      {/* Desktop wallpaper grid overlays (highly futuristic) */}
      <div className="absolute inset-0 bg-transparent pointer-events-none z-0">
        {/* Neon accent orb backdrops */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyber-cyan/5 blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-cyber-pink/5 blur-[150px]" />
      </div>

      {/* Main Desktop workspace container */}
      <div 
        className="flex-1 w-full relative p-4 flex gap-4 z-10"
        onClick={() => setActiveWindowId(null)}
      >
        {/* Left Sidebar Panel (Glass dock containing desktop app launchers) */}
        <div 
          className="h-full w-[76px] rounded-2xl glass-panel border border-white/5 flex flex-col items-center py-4 gap-3 z-20 shadow-xl shadow-black/30 select-none"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top subtle tech indicator */}
          <div className="flex items-center gap-0.5 justify-center mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-ping" />
            <span className="w-1 h-1 rounded-full bg-cyber-cyan" />
          </div>

          <div className="flex-1 flex flex-col gap-2.5 items-center justify-start overflow-y-auto no-scrollbar w-full px-1">
            <DesktopIcon app={APPS_CONFIG.profile} onDoubleClick={() => openApp('profile')} />
            <DesktopIcon app={APPS_CONFIG.skills} onDoubleClick={() => openApp('skills')} />
            <DesktopIcon app={APPS_CONFIG.projects} onDoubleClick={() => openApp('projects')} />
            <DesktopIcon app={APPS_CONFIG.education} onDoubleClick={() => openApp('education')} />
            <DesktopIcon app={APPS_CONFIG.resume} onDoubleClick={() => openApp('resume')} />
            <DesktopIcon app={APPS_CONFIG.contact} onDoubleClick={() => openApp('contact')} />
            <DesktopIcon app={APPS_CONFIG.github} onDoubleClick={() => openApp('github')} />
            <DesktopIcon app={APPS_CONFIG.linkedin} onDoubleClick={() => openApp('linkedin')} />
            <DesktopIcon app={APPS_CONFIG.terminal} onDoubleClick={() => openApp('terminal')} />
          </div>

          {/* Bottom subtle brand logo */}
          <div className="text-[7px] font-mono font-bold text-slate-600 tracking-widest mt-1">
            SPS.OS
          </div>
        </div>

        {/* Windows Rendering Space */}
        <div className="flex-1 h-full relative" onClick={(e) => e.stopPropagation()}>
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
        </div>
      </div>

      {/* Taskbar Top position */}
      <Taskbar
        windows={windows}
        activeWindowId={activeWindowId}
        onAppClick={focusWindow}
        openApp={openApp}
        onBackToHero={onBackToHero}
      />
    </div>
  );
}
