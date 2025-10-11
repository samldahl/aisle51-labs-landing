import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
  color: string;
}

export const StarfieldCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const numStars = 200;
    const speed = 0.5;
    
    const colors = [
      'rgba(255, 255, 255, 0.8)',
      'rgba(100, 150, 255, 0.6)',
      'rgba(255, 100, 150, 0.6)',
      'rgba(150, 255, 100, 0.6)',
      'rgba(255, 200, 100, 0.6)',
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width - canvas.width / 2,
          y: Math.random() * canvas.height - canvas.height / 2,
          z: Math.random() * canvas.width,
          px: 0,
          py: 0,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.z = canvas.width;
          star.px = star.x;
          star.py = star.y;
        }

        const k = 128 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (star.px !== 0 && star.py !== 0) {
          const size = (1 - star.z / canvas.width) * 3;
          
          // Draw glow
          const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * 2);
          gradient.addColorStop(0, star.color);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(px, py, size * 2, 0, Math.PI * 2);
          ctx.fill();

          // Draw star
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }

        star.px = px;
        star.py = py;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ background: '#000' }}
    />
  );
};
