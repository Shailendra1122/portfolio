import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Square } from 'lucide-react';
import styles from '../styles/retro.module.css';

export default function Window({ title, children, isActive, onFocus, onClose, onMinimize, zIndex, appId }) {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      className={styles.window}
      style={{
        zIndex,
        // Start cascading position based on appId hash or simple random so they don't overlap perfectly
        // (Just a simple deterministic random)
        top: 20 + ((appId.length * 10) % 50),
        left: 20 + ((appId.length * 20) % 100),
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onPointerDown={(e) => onFocus()}
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
