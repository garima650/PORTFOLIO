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

    // Fewer particles on smaller screens
    const particleCount = window.innerWidth < 768 ? 45 : 80;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

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
    const circuits: {
      x: number;
      y: number;
      angle: number;
      speed: number;
      type: 'chip' | 'gear' | 'node';
    }[] = [];

    for (let i = 0; i < 12; i++) {
      circuits.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
        type: ['chip', 'gear', 'node'][
          Math.floor(Math.random() * 3)
        ] as 'chip' | 'gear' | 'node',
      });
    }

    const drawChip = (
      x: number,
      y: number,
      size: number,
      alpha: number
    ) => {
      ctx.save();

      ctx.globalAlpha = alpha;
      ctx.strokeStyle = 'hsl(185, 100%, 50%)';
      ctx.lineWidth = 1;

      ctx.strokeRect(
        x - size / 2,
        y - size / 2,
        size,
        size
      );

      const pinCount = 4;
      const pinLength = size * 0.3;

      for (let i = 0; i < pinCount; i++) {
        const offset =
          (i - (pinCount - 1) / 2) *
          (size / (pinCount + 1));

        // Top
        ctx.beginPath();
        ctx.moveTo(x + offset, y - size / 2);
        ctx.lineTo(
          x + offset,
          y - size / 2 - pinLength
        );
        ctx.stroke();

        // Bottom
        ctx.beginPath();
        ctx.moveTo(x + offset, y + size / 2);
        ctx.lineTo(
          x + offset,
          y + size / 2 + pinLength
        );
        ctx.stroke();

        // Left
        ctx.beginPath();
        ctx.moveTo(x - size / 2, y + offset);
        ctx.lineTo(
          x - size / 2 - pinLength,
          y + offset
        );
        ctx.stroke();

        // Right
        ctx.beginPath();
        ctx.moveTo(x + size / 2, y + offset);
        ctx.lineTo(
          x + size / 2 + pinLength,
          y + offset
        );
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawGear = (
      x: number,
      y: number,
      size: number,
      angle: number,
      alpha: number
    ) => {
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
        const toothAngle = (i * Math.PI) / teeth;
        const radius =
          i % 2 === 0 ? outerRadius : innerRadius;

        const px = Math.cos(toothAngle) * radius;
        const py = Math.sin(toothAngle) * radius;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.stroke();

      // Center circle
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        size * 0.15,
        0,
        Math.PI * 2
      );
      ctx.stroke();

      ctx.restore();
    };

    const drawNode = (
      x: number,
      y: number,
      size: number,
      alpha: number
    ) => {
      ctx.save();

      ctx.globalAlpha = alpha;

      // Outer glow
      const gradient = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        size
      );

      gradient.addColorStop(
        0,
        'hsla(185, 100%, 50%, 0.3)'
      );

      gradient.addColorStop(
        1,
        'hsla(185, 100%, 50%, 0)'
      );

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = 'hsl(185, 100%, 50%)';

      ctx.beginPath();
      ctx.arc(
        x,
        y,
        size * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();
    };

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      time += 0.01;

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (
          particle.x < 0 ||
          particle.x > canvas.width
        ) {
          particle.vx *= -1;
        }

        if (
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particle.vy *= -1;
        }

        // Particle
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          'hsla(185, 100%, 50%, 0.5)';

        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 120) {
            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `hsla(
              185,
              100%,
              50%,
              ${0.15 * (1 - distance / 120)}
            )`;

            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Circuit elements
      circuits.forEach((circuit) => {
        circuit.angle += circuit.speed;

        circuit.y +=
          Math.sin(
            time + circuit.x * 0.01
          ) * 0.3;

        const alpha =
          0.3 +
          Math.sin(
            time * 2 + circuit.x
          ) * 0.1;

        const size =
          30 +
          Math.sin(
            time + circuit.y * 0.01
          ) * 5;

        if (circuit.type === 'chip') {
          drawChip(
            circuit.x,
            circuit.y,
            size,
            alpha
          );
        } else if (circuit.type === 'gear') {
          drawGear(
            circuit.x,
            circuit.y,
            size,
            circuit.angle * 10,
            alpha
          );
        } else {
          drawNode(
            circuit.x,
            circuit.y,
            size * 0.8,
            alpha
          );
        }
      });

      // Scanning line
      const scanY =
        (time * 100) %
          (canvas.height + 200) -
        100;

      const gradient =
        ctx.createLinearGradient(
          0,
          scanY - 50,
          0,
          scanY + 50
        );

      gradient.addColorStop(
        0,
        'hsla(185, 100%, 50%, 0)'
      );

      gradient.addColorStop(
        0.5,
        'hsla(185, 100%, 50%, 0.05)'
      );

      gradient.addColorStop(
        1,
        'hsla(185, 100%, 50%, 0)'
      );

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        scanY - 50,
        canvas.width,
        100
      );

      animationId =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        'resize',
        resizeCanvas
      );

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