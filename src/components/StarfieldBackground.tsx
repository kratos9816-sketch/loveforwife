import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  color: string;
  isHeart?: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  dx: number;
  dy: number;
}

export const StarfieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const shootingStars: ShootingStar[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 4500), 160);

    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(255, 230, 240, ',
      'rgba(255, 180, 200, ',
      'rgba(223, 177, 91, ',
    ];

    // Mouse parallax target
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const baseSize = Math.random() * 2 + 0.5;
      const isHeart = Math.random() < 0.08; // 8% chance of floating heart particle
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: baseSize,
        baseSize,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.3 - 0.1, // Float gently upwards
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
        isHeart,
      });
    }

    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.beginPath();
      ctx.translate(x, y);
      ctx.scale(size / 6, size / 6);
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-3, -3, -6, 1, 0, 6);
      ctx.bezierCurveTo(6, 1, 3, -3, 0, 0);
      ctx.fillStyle = `rgba(255, 117, 151, ${opacity})`;
      ctx.shadowColor = 'rgba(255, 117, 151, 0.8)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    };

    // Spawn shooting star periodically
    const spawnShootingStar = () => {
      if (shootingStars.length < 2 && Math.random() < 0.03) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * (height / 2),
          length: Math.random() * 80 + 40,
          speed: Math.random() * 8 + 6,
          opacity: 1,
          dx: Math.random() * 4 + 4,
          dy: Math.random() * 3 + 2,
        });
      }
    };

    const render = () => {
      // Mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Radial background aura glow centered on screen
      const gradient = ctx.createRadialGradient(
        width / 2 + (mouseX - width / 2) * 0.03,
        height / 2 + (mouseY - height / 2) * 0.03,
        100,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(43, 9, 22, 0.45)');
      gradient.addColorStop(0.5, 'rgba(20, 4, 9, 0.85)');
      gradient.addColorStop(1, '#080205');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render Particles
      particles.forEach((p) => {
        p.opacity += Math.sin(Date.now() * p.twinkleSpeed) * 0.005;
        p.opacity = Math.max(0.15, Math.min(0.95, p.opacity));

        // Parallax offset
        const offsetX = (mouseX - width / 2) * (p.size * 0.008);
        const offsetY = (mouseY - height / 2) * (p.size * 0.008);

        const renderX = p.x + offsetX;
        const renderY = p.y + offsetY;

        if (p.isHeart) {
          drawHeart(ctx, renderX, renderY, p.size * 2, p.opacity);
        } else {
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowColor = p.color === colors[3] ? 'rgba(223, 177, 91, 0.8)' : 'rgba(255, 255, 255, 0.8)';
          ctx.shadowBlur = p.size > 1.5 ? 6 : 2;
          ctx.fill();
        }

        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap boundaries
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
      });

      // Render Shooting Stars
      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        const tailX = star.x - star.dx * (star.length / 10);
        const tailY = star.y - star.dy * (star.length / 10);

        const starGrad = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
        starGrad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        starGrad.addColorStop(0.5, `rgba(255, 117, 151, ${star.opacity * 0.6})`);
        starGrad.addColorStop(1, 'rgba(255, 117, 151, 0)');

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = starGrad;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        star.x += star.dx;
        star.y += star.dy;
        star.opacity -= 0.015;

        if (star.opacity <= 0 || star.x > width + 100 || star.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};
