import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary indigo orb */}
      <motion.div
        className="orb absolute w-[700px] h-[700px] bg-indigo-600/10"
        style={{ top: '-20%', left: '20%' }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Cyan orb bottom right */}
      <motion.div
        className="orb orb-2 absolute w-[500px] h-[500px] bg-cyan-500/7"
        style={{ bottom: '-10%', right: '-5%' }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.92, 1.05, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Subtle violet orb center */}
      <motion.div
        className="orb orb-3 absolute w-[400px] h-[400px] bg-violet-700/8"
        style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />

      {/* Top center glow beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-64"
        style={{
          background: 'linear-gradient(180deg, rgba(99,102,241,0.5) 0%, transparent 100%)',
        }}
      />

      {/* Radial hero glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
