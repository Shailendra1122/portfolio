import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import styles from '../styles/retro.module.css';

export default function Window({ title, children, isActive, onFocus, onClose, onMinimize, zIndex, appId }) {
  const controls = useDragControls();

  // Better cascading positions
  const positions = {
    profile: { top: 30, left: 100 },
    resume: { top: 40, left: 140 },
    education: { top: 50, left: 180 },
    contact: { top: 60, left: 220 },
    terminal: { top: 35, left: 160 },
  };

  const pos = positions[appId] || { top: 40, left: 120 };

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      className={styles.window}
      style={{
        zIndex,
        top: pos.top,
        left: pos.left,
      }}
      initial={{ scale: 0.92, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0, y: 20 }}
      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
      onPointerDown={() => onFocus()}
    >
      <div 
        className={isActive ? styles.titleBar : styles.titleBarInactive} 
        onPointerDown={(e) => {
          controls.start(e);
          onFocus();
        }}
        style={{ touchAction: "none" }}
      >
        <span className={`${styles.titleBarText} flex-1 pl-2`}>{title}</span>
        <div className="flex z-10">
          <button className={`${styles.button} ${styles.btnMinimize}`} onClick={(e) => { e.stopPropagation(); onMinimize(); }} aria-label="Minimize">
            <Minus size={8} strokeWidth={4} />
          </button>
          <button className={`${styles.button} ${styles.btnMaximize}`} onClick={(e) => e.stopPropagation()} aria-label="Maximize">
            <Square size={6} strokeWidth={5} />
          </button>
          <button className={`${styles.button} ${styles.btnClose}`} onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close">
            <X size={8} strokeWidth={4} />
          </button>
        </div>
      </div>

      <div className={styles.inset} style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </motion.div>
  );
}
