import React, { useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

export default function Window({
  title,
  children,
  isActive,
  onFocus,
  onClose,
  onMinimize,
  zIndex,
  appId
}) {
  const [isMaximized, setIsMaximized] = useState(false);
  const dragControls = useDragControls();

  // Better cascading default positions based on appId
  const positions = {
    profile: { top: 70, left: 180 },
    resume: { top: 90, left: 220 },
    education: { top: 110, left: 260 },
    skills: { top: 130, left: 300 },
    projects: { top: 80, left: 200 },
    contact: { top: 150, left: 340 },
    github: { top: 100, left: 240 },
    linkedin: { top: 120, left: 280 },
    terminal: { top: 60, left: 160 },
  };

  const defaultPos = positions[appId] || { top: 100, left: 200 };

  const handleHeaderDoubleClick = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <motion.div
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.05}
      dragConstraints={{ left: 0, right: window.innerWidth - 300, top: 44, bottom: window.innerHeight - 200 }}
      onPointerDown={onFocus}
      initial={{ scale: 0.95, opacity: 0, y: 15 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 15 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      className={`absolute flex flex-col font-sans overflow-hidden select-none select-text ${
        isMaximized
          ? 'w-full h-[calc(100vh-44px)] left-0 top-[44px] rounded-none'
          : 'w-[92%] sm:w-[620px] h-[480px] rounded-xl border'
      } ${
        isActive 
          ? 'border-cyber-cyan/35 shadow-[0_12px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(0,255,204,0.06)] bg-slate-950/80 backdrop-blur-2xl'
          : 'border-white/10 shadow-2xl bg-slate-950/70 backdrop-blur-xl'
      }`}
      style={{
        zIndex,
        top: isMaximized ? 44 : defaultPos.top,
        left: isMaximized ? 0 : defaultPos.left,
      }}
    >
      {/* Title bar / Drag Handle */}
      <div
        onPointerDown={(e) => {
          dragControls.start(e);
          onFocus();
        }}
        onDoubleClick={handleHeaderDoubleClick}
        className={`flex items-center justify-between px-4 py-3 cursor-grab active:cursor-grabbing border-b select-none ${
          isActive 
            ? 'bg-slate-950/90 text-cyber-cyan border-cyber-cyan/20' 
            : 'bg-slate-950/50 text-slate-400 border-white/5'
        }`}
        style={{ touchAction: 'none' }}
      >
        {/* Glowing node and title text */}
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-cyber-cyan glow-cyan' : 'bg-slate-500'}`} />
          <span className="font-mono text-xs font-semibold uppercase tracking-wider">{title}</span>
        </div>

        {/* Operating Window controls */}
        <div className="flex items-center gap-2 z-10">
          {/* Minimize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cyber-blue hover:text-white transition-all cursor-pointer"
            title="Minimize"
          >
            <Minus size={8} strokeWidth={3} />
          </button>

          {/* Maximize */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            className="w-3 h-3 rounded-full bg-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cyber-purple hover:text-white transition-all cursor-pointer"
            title={isMaximized ? "Restore Down" : "Maximize"}
          >
            {isMaximized ? (
              <Minimize2 size={8} strokeWidth={3} />
            ) : (
              <Maximize2 size={8} strokeWidth={3} />
            )}
          </button>

          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-slate-700/60 flex items-center justify-center text-slate-300 hover:bg-cyber-pink hover:text-white transition-all cursor-pointer"
            title="Close"
          >
            <X size={8} strokeWidth={3} />
          </button>
        </div>
      </div>

      {/* Main Body Content container */}
      <div className="flex-1 w-full overflow-hidden bg-slate-950/95 relative text-slate-200">
        {children}
      </div>
    </motion.div>
  );
}
