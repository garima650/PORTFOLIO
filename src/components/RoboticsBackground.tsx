import { useEffect, useRef } from 'react';

export const RoboticsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles for neural network effect
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    // Floating circuit elements
    const circuits: { x: number; y: number; angle: number; speed: number; type: 'chip' | 'gear' | 'node' }[] = [];
    for (let i = 0; i < 12; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
        type: ['chip', 'gear', 'node'][Math.floor(Math.random() * 3)] as 'chip' | 'gear' | 'node',
      });
    }

    const drawChip = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = 'hsl(185, 100%, 50%)';
      ctx.lineWidth = 1;
      
      // Main chip body
      ctx.strokeRect(x - size / 2, y - size / 2, size, size);
      
      // Pins
      const pinCount = 4;
      const pinLength = size * 0.3;
      for (let i = 0; i < pinCount; i++) {
        const offset = (i - (pinCount - 1) / 2) * (size / (pinCount + 1));
        // Top pins
        ctx.beginPath();
        ctx.moveTo(x + offset, y - size / 2);
        ctx.lineTo(x + offset, y - size / 2 - pinLength);
        ctx.stroke();
        // Bottom pins
        ctx.beginPath();
        ctx.moveTo(x + offset, y + size / 2);
        ctx.lineTo(x + offset, y + size / 2 + pinLength);
        ctx.stroke();
        // Left pins
        ctx.beginPath();
        ctx.moveTo(x - size / 2, y + offset);
        ctx.lineTo(x - size / 2 - pinLength, y + offset);
        ctx.stroke();
        // Right pins
        ctx.beginPath();
        ctx.moveTo(x + size / 2, y + offset);
        ctx.lineTo(x + size / 2 + pinLength, y + offset);
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawGear = (x: number, y: number, size: number, angle: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = 'hsl(270, 100%, 65%)';
      ctx.lineWidth = 1.5;
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      const teeth = 8;
      const innerRadius = size * 0.4;
      const outerRadius = size * 0.6;
      
      ctx.beginPath();
      for (let i = 0; i < teeth * 2; i++) {
        const angle = (i * Math.PI) / teeth;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const px = Math.cos(angle) * radius;
        const py = Math.sin(angle) * radius;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Center circle
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.15, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.restore();
    };

    const drawNode = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      
      // Outer glow
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, 'hsla(185, 100%, 50%, 0.3)');
      gradient.addColorStop(1, 'hsla(185, 100%, 50%, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // Core
      ctx.fillStyle = 'hsl(185, 100%, 50%)';
      ctx.beginPath();
      ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsla(185, 100%, 50%, 0.5)';
        ctx.fill();

        // Draw connections
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(185, 100%, 50%, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Update and draw circuits
      circuits.forEach((c) => {
        c.angle += c.speed;
        c.y += Math.sin(time + c.x * 0.01) * 0.3;
        
        const alpha = 0.3 + Math.sin(time * 2 + c.x) * 0.1;
        const size = 30 + Math.sin(time + c.y * 0.01) * 5;
        
        if (c.type === 'chip') {
          drawChip(c.x, c.y, size, alpha);
        } else if (c.type === 'gear') {
          drawGear(c.x, c.y, size, c.angle * 10, alpha);
        } else {
          drawNode(c.x, c.y, size * 0.8, alpha);
        }
      });

      // Draw scanning lines
      const scanY = (time * 100) % (canvas.height + 200) - 100;
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50);
      gradient.addColorStop(0, 'hsla(185, 100%, 50%, 0)');
      gradient.addColorStop(0.5, 'hsla(185, 100%, 50%, 0.05)');
      gradient.addColorStop(1, 'hsla(185, 100%, 50%, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 50, canvas.width, 100);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-5 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
