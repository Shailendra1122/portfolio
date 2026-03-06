import React, { useState } from 'react';
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
  // zIndexCounter tracks the next highest zIndex
  const [zIndexCounter, setZIndexCounter] = useState(10);

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
    if (activeWindowId === appId) return; // already focused
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
        className="flex-1 relative p-4 pt-[60px] flex flex-col flex-wrap gap-2 items-start" 
        onClick={() => setActiveWindowId(null)}
      >
        <DesktopIcon app={APPS_CONFIG.profile} onDoubleClick={() => openApp('profile')} />
        <DesktopIcon app={APPS_CONFIG.resume} onDoubleClick={() => openApp('resume')} />
        <DesktopIcon app={APPS_CONFIG.education} onDoubleClick={() => openApp('education')} />
        <DesktopIcon app={APPS_CONFIG.contact} onDoubleClick={() => openApp('contact')} />
        <DesktopIcon app={{ title: 'GitHub', icon: Github }} onDoubleClick={() => window.open('https://github.com/Shailendra1122/', '_blank')} />
        <DesktopIcon app={{ title: 'LinkedIn', icon: Linkedin }} onDoubleClick={() => window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank')} />
        <DesktopIcon app={APPS_CONFIG.terminal} onDoubleClick={() => openApp('terminal')} />

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
