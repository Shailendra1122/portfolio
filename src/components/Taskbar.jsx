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
        className={styles.startButton} 
        style={menuOpen ? { background: '#dfdfdf', boxShadow: 'inset 1px 1px #808080' } : {}}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu size={16} /> Applications
      </button>

      {menuOpen && (
        <div className="absolute left-1 bottom-10 w-48 bg-[#c0c0c0] border-2 border-l-white border-t-white border-r-black border-b-black p-1 z-[10001] shadow-[inset_1px_1px_#dfdfdf,inset_-1px_-1px_#808080]">
           <div className="flex flex-col gap-1">
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { openApp('profile'); setMenuOpen(false); }}>Profile</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { openApp('resume'); setMenuOpen(false); }}>Resume</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { openApp('education'); setMenuOpen(false); }}>Education</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { openApp('contact'); setMenuOpen(false); }}>Contact</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { window.open('https://github.com/Shailendra1122/', '_blank'); setMenuOpen(false); }}>GitHub</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { window.open('https://www.linkedin.com/in/shailendra-pratap-singh-067281362/', '_blank'); setMenuOpen(false); }}>LinkedIn</div>
             <div className="px-2 py-1 hover:bg-[#000080] hover:text-white cursor-pointer" onClick={() => { openApp('terminal'); setMenuOpen(false); }}>Terminal Games</div>
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
