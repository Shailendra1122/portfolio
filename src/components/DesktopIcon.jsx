import React, { useState } from 'react';

export default function DesktopIcon({ app, onDoubleClick }) {
  const [selected, setSelected] = useState(false);
  const IconComponent = app.icon;

  const handleClick = (e) => {
    e.stopPropagation();
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  return (
    <div
      onClick={handleClick}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
        setSelected(false);
      }}
      tabIndex={0}
      onBlur={handleBlur}
      className={`group flex flex-col items-center justify-center w-16 h-16 rounded-xl transition-all duration-300 outline-none cursor-pointer relative ${
        selected
          ? 'bg-cyber-cyan/15 border border-cyber-cyan/35 shadow-[0_0_15px_rgba(0,255,204,0.15)] scale-[1.03]'
          : 'border border-transparent hover:bg-white/[0.04] hover:scale-[1.03]'
      }`}
    >
      {/* Glow Backdrop under Icon */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Cyber icon box wrapper */}
      <div className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 ${
        selected 
          ? 'text-cyber-cyan' 
          : 'text-slate-300 group-hover:text-cyber-cyan'
      }`}>
        <IconComponent size={20} className={selected ? 'drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]' : ''} />
      </div>

      {/* Title Label */}
      <span className={`text-[10px] font-mono font-medium tracking-wide mt-1 select-none text-center px-1 truncate w-full ${
        selected 
          ? 'text-cyber-cyan' 
          : 'text-slate-400 group-hover:text-slate-200'
      }`}>
        {app.title}
      </span>

      {/* Sidebar Tooltip */}
      <div className="absolute left-[70px] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md border border-white/10 bg-slate-950/90 text-slate-200 text-[10px] tracking-wider uppercase font-mono pointer-events-none opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-350 z-50 whitespace-nowrap shadow-lg">
        Launch {app.title}
      </div>
    </div>
  );
}
