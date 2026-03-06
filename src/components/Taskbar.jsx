import React, { useState, useEffect } from 'react';
import styles from '../styles/retro.module.css';
import { Menu } from 'lucide-react';

export default function Taskbar({ windows, activeWindowId, onAppClick, openApp }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.taskbar}>
      <button 
        className={`${styles.startButton} ${menuOpen ? 'bg-white/20' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={18} /> Menu
      </button>

      {menuOpen && (
        <div className="absolute left-2 top-11 w-64 bg-slate-900/95 backdrop-blur-xl border border-teal-500/30 p-2 z-[10001] shadow-2xl rounded-xl text-slate-300">
           <div className="flex flex-col gap-1 text-sm font-medium">
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors" onClick={() => { openApp('profile'); setMenuOpen(false); }}>Profile</div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors" onClick={() => { openApp('resume'); setMenuOpen(false); }}>Resume</div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors" onClick={() => { openApp('education'); setMenuOpen(false); }}>Education</div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors" onClick={() => { openApp('contact'); setMenuOpen(false); }}>Contact</div>
             <div className="h-[1px] bg-white/10 my-1"></div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors flex items-center justify-between" onClick={() => { window.open('https://github.com/Shailendra1122/', '_blank'); setMenuOpen(false); }}>
               GitHub <span className="text-xs text-slate-400">↗</span>
             </div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors flex items-center justify-between" onClick={() => { window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank'); setMenuOpen(false); }}>
               LinkedIn <span className="text-xs text-slate-400">↗</span>
             </div>
             <div className="h-[1px] bg-white/10 my-1"></div>
             <div className="px-3 py-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors text-emerald-400" onClick={() => { openApp('terminal'); setMenuOpen(false); }}>Terminal Games</div>
           </div>
        </div>
      )}

      <div className="flex flex-1 gap-1 overflow-x-auto">
        {windows.map((w) => (
          <div
            key={w.id}
            className={
              activeWindowId === w.id && !w.isMinimized
                ? styles.taskbarButtonActive
                : styles.taskbarButton
            }
            onClick={() => onAppClick(w.id)}
          >
            <w.icon size={14} />
            {w.title}
          </div>
        ))}
      </div>

      <div className={styles.clock}>{time}</div>
    </div>
  );
}
