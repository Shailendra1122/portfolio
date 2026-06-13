import React, { useEffect, useState } from 'react';

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Disable on touch screens or mobile
    const checkDevice = () => {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      setIsMobile(!finePointer || window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[99999] w-[300px] h-[300px] rounded-full mix-blend-screen opacity-30 transition-transform duration-300 ease-out"
      style={{
        left: `${position.x - 150}px`,
        top: `${position.y - 150}px`,
        background: 'radial-gradient(circle, rgba(0,255,204,0.15) 0%, rgba(168,85,247,0.05) 50%, rgba(0,0,0,0) 70%)',
        willChange: 'left, top',
      }}
    />
  );
}
