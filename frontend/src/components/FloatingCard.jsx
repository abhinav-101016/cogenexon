import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function FloatingCard({ icon, label, description, delay = 0 }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), cfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), cfg);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="relative glass rounded-2xl p-4 text-left cursor-default select-none group hover:border-accent/30 transition-colors duration-300"
    >
      {/* Inner glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(124,111,247,0.08), transparent 70%)' }}
      />
      {/* Top border shimmer */}
      <div
        className="absolute inset-x-4 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)' }}
      />
      <div style={{ transform: 'translateZ(20px)' }}>
        <span className="text-xl block mb-2">{icon}</span>
        <div className="text-[13px] font-semibold text-text1 font-display mb-1">{label}</div>
        {description && (
          <div className="text-[11.5px] text-text3 leading-relaxed font-body">{description}</div>
        )}
      </div>
    </motion.div>
  );
}
