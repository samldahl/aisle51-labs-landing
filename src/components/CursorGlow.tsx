import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    let lastUpdate = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdate < throttleMs) return;
      
      lastUpdate = now;
      
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
          glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div 
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px',
        background: 'radial-gradient(circle 200px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.08), transparent 70%)',
      } as React.CSSProperties}
    />
  );
};
