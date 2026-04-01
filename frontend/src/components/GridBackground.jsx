import React, { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, t = 0, raf;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.006;

      const vx = W / 2, vy = H * 0.36, fov = H * 0.85;
      const cols = 22, rows = 16;

      // Horizontal lines
      for (let r = 0; r <= rows; r++) {
        const z = (r / rows) * 10 - (t % 1) * 0.6;
        const sc = fov / (fov + z * 28);
        const depth = z / 10;
        const alpha = Math.max(0, (0.055 - depth * 0.05) * sc);
        if (alpha < 0.001) continue;
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const x3 = (c / cols - 0.5) * 8;
          const y3 = Math.sin(x3 * 0.7 + t) * 0.05 + Math.sin(z * 0.4 + t * 0.8) * 0.05;
          const px = vx + x3 * sc * 115;
          const py = vy + y3 * sc * 115 + z * sc * 38;
          c === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Vertical lines
      for (let c = 0; c <= cols; c += 2) {
        const x3 = (c / cols - 0.5) * 8;
        const alpha = Math.max(0, 0.05 - Math.abs(x3) * 0.005);
        if (alpha < 0.001) continue;
        ctx.beginPath();
        let first = true;
        for (let r = 0; r <= rows; r++) {
          const z = (r / rows) * 10 - (t % 1) * 0.6;
          const sc = fov / (fov + z * 28);
          const y3 = Math.sin(x3 * 0.7 + t) * 0.05 + Math.sin(z * 0.4 + t * 0.8) * 0.05;
          const px = vx + x3 * sc * 115;
          const py = vy + y3 * sc * 115 + z * sc * 38;
          if (first) { ctx.moveTo(px, py); first = false; } else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }

      // Dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x3 = (c / cols - 0.5) * 8;
          const z = (r / rows) * 10 - (t % 1) * 0.6;
          const sc = fov / (fov + z * 28);
          const y3 = Math.sin(x3 * 0.7 + t) * 0.05 + Math.sin(z * 0.4 + t * 0.8) * 0.05;
          const px = vx + x3 * sc * 115;
          const py = vy + y3 * sc * 115 + z * sc * 38;
          if (px < -5 || px > W + 5 || py < -5 || py > H + 5) continue;
          const depth = z / 10;
          const alpha = Math.max(0, (1 - depth) * 0.4 - 0.08) * sc;
          if (alpha < 0.005) continue;
          ctx.beginPath();
          ctx.arc(px, py, sc * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${235 + x3 * 6},70%,72%,${alpha})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
