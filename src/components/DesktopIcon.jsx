import React, { useState } from 'react';
import styles from '../styles/retro.module.css';

export default function DesktopIcon({ app, onDoubleClick }) {
  const [selected, setSelected] = useState(false);
  const IconComponent = app.icon;

  const handleClick = (e) => {
    e.stopPropagation();
    setSelected(true);
  };

  // Re-clicking desktop container deselects (handled in Desktop via activeWindowId)
  // For true desktop icon behavior, we could register global click listeners to reset `selected`,
  // but let's keep it simple: any click outside standardly caught by Desktop might not reach here,
  // so we'll just let them stay "selected" until double-clicked or blurred.
  
  return (
    <div 
      className={styles.desktopIcon} 
      onClick={handleClick}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
        setSelected(false);
      }}
    >
      <IconComponent size={32} color="white" />
      <span className={selected ? styles.iconTextSelected : styles.iconText}>
        {app.title}
      </span>
    </div>
  );
}
