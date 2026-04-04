import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let time = 0;
    let raf = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.006;

      const vx = width / 2;
      const vy = height * 0.4;
      const fov = height * 0.85;
      const cols = 24;
      const rows = 16;

      for (let r = 0; r <= rows; r++) {
        const z = (r / rows) * 10 - (time % 1) * 0.6;
        const scale = fov / (fov + z * 28);
        const depth = z / 10;
        const alpha = Math.max(0, (0.06 - depth * 0.05) * scale);
        if (alpha < 0.001) continue;

        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const x3 = (c / cols - 0.5) * 8;
          const y3 =
            Math.sin(x3 * 0.75 + time) * 0.05 +
            Math.sin(z * 0.45 + time * 0.8) * 0.05;

          const px = vx + x3 * scale * 118;
          const py = vy + y3 * scale * 118 + z * scale * 38;

          if (c === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.strokeStyle = `rgba(109,94,248,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      for (let c = 0; c <= cols; c += 2) {
        const x3 = (c / cols - 0.5) * 8;
        const alpha = Math.max(0, 0.05 - Math.abs(x3) * 0.005);
        if (alpha < 0.001) continue;

        ctx.beginPath();
        let first = true;

        for (let r = 0; r <= rows; r++) {
          const z = (r / rows) * 10 - (time % 1) * 0.6;
          const scale = fov / (fov + z * 28);
          const y3 =
            Math.sin(x3 * 0.75 + time) * 0.05 +
            Math.sin(z * 0.45 + time * 0.8) * 0.05;

          const px = vx + x3 * scale * 118;
          const py = vy + y3 * scale * 118 + z * scale * 38;

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.strokeStyle = `rgba(122,215,255,${alpha * 0.8})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x3 = (c / cols - 0.5) * 8;
          const z = (r / rows) * 10 - (time % 1) * 0.6;
          const scale = fov / (fov + z * 28);
          const y3 =
            Math.sin(x3 * 0.75 + time) * 0.05 +
            Math.sin(z * 0.45 + time * 0.8) * 0.05;

          const px = vx + x3 * scale * 118;
          const py = vy + y3 * scale * 118 + z * scale * 38;

          if (px < -5 || px > width + 5 || py < -5 || py > height + 5) continue;

          const depth = z / 10;
          const alpha = Math.max(0, (1 - depth) * 0.42 - 0.08) * scale;
          if (alpha < 0.005) continue;

          ctx.beginPath();
          ctx.arc(px, py, scale * 1.25, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${230 + x3 * 5}, 80%, 74%, ${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
}
