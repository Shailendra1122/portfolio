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
        width: 450,
        height: 350,
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
        <span className={styles.titleBarText}>{title}</span>
        <div className="flex">
          <button className={styles.button} onClick={(e) => { e.stopPropagation(); onMinimize(); }}>
            <Minus size={10} strokeWidth={3} />
          </button>
          <button className={styles.button} onClick={(e) => e.stopPropagation()}>
            <Square size={10} strokeWidth={3} />
          </button>
          <button className={styles.button} onClick={(e) => { e.stopPropagation(); onClose(); }}>
            <X size={10} strokeWidth={3} />
          </button>
        </div>
      </div>

      <div className={styles.inset} style={{ height: 'calc(100% - 24px)', padding: '4px', overflow: 'hidden' }}>
        {children}
      </div>
    </motion.div>
  );
}
