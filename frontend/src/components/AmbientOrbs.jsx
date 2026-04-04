import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[720px] w-[720px] rounded-full bg-indigo-600/10 blur-3xl"
        style={{ top: '-18%', left: '14%' }}
        animate={{
          x: [0, 40, -18, 0],
          y: [0, -26, 16, 0],
          scale: [1, 1.05, 0.96, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-3xl"
        style={{ bottom: '-10%', right: '-4%' }}
        animate={{
          x: [0, -46, 18, 0],
          y: [0, 28, -18, 0],
          scale: [1, 0.94, 1.04, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2.4,
        }}
      />

      <motion.div
        className="absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-700/8 blur-3xl"
        animate={{
          scale: [1, 1.14, 0.92, 1],
          opacity: [0.28, 0.52, 0.28],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5.5,
        }}
      />

      <div
        className="absolute left-1/2 top-0 h-72 w-px -translate-x-1/2"
        style={{
          background:
            'linear-gradient(180deg, rgba(109,94,248,0.55) 0%, transparent 100%)',
        }}
      />

      <div
        className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(109,94,248,0.16) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
