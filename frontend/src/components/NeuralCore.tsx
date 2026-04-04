import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { x: '50%', y: '18%', size: 10, delay: 0 },
  { x: '72%', y: '30%', size: 8, delay: 0.3 },
  { x: '78%', y: '54%', size: 9, delay: 0.5 },
  { x: '61%', y: '74%', size: 10, delay: 0.2 },
  { x: '38%', y: '78%', size: 8, delay: 0.7 },
  { x: '20%', y: '58%', size: 9, delay: 0.4 },
  { x: '26%', y: '34%', size: 8, delay: 0.6 },
  { x: '48%', y: '50%', size: 12, delay: 0.1 },
];

export default function NeuralCore() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0, -1.5, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      className="relative h-[440px] w-[440px] max-w-full"
    >
      {/* Base glows */}
      <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(109,94,248,0.18)_0%,rgba(109,94,248,0.08)_22%,transparent_72%)] blur-2xl" />
      <div className="absolute inset-[23%] rounded-full bg-[radial-gradient(circle,rgba(122,215,255,0.16)_0%,transparent_68%)] blur-2xl" />

      {/* Orbital rings */}
      <motion.div
        className="absolute inset-[9%] rounded-full border border-white/8"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[18%] rounded-full border border-cyan-300/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[28%] rounded-full border border-indigo-300/12"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.28),rgba(109,94,248,0.12)_35%,rgba(8,10,16,0.75)_80%)] shadow-[0_0_80px_rgba(109,94,248,0.22)] backdrop-blur-2xl"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 50px rgba(109,94,248,0.16)',
            '0 0 90px rgba(109,94,248,0.26)',
            '0 0 50px rgba(109,94,248,0.16)',
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-[28%] rounded-full bg-white/80 blur-[8px]" />
      </motion.div>

      {/* SVG lines */}
      <svg
        viewBox="0 0 440 440"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <g opacity="0.7">
          <path d="M220 79 L317 132 L343 238 L268 325 L167 343 L88 255 L114 149 Z" stroke="rgba(122,215,255,0.22)" strokeWidth="1.2" />
          <path d="M220 220 L317 132" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <path d="M220 220 L343 238" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <path d="M220 220 L268 325" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <path d="M220 220 L167 343" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <path d="M220 220 L88 255" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <path d="M220 220 L114 149" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          <path d="M220 220 L220 79" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
        </g>
      </svg>

      {/* Animated pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/16"
          animate={{
            scale: [1, 2.2, 2.9],
            opacity: [0.45, 0.12, 0],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.1,
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-white/18 bg-white/85 shadow-[0_0_18px_rgba(255,255,255,0.5)]"
          style={{
            left: node.x,
            top: node.y,
            width: node.size,
            height: node.size,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        />
      ))}

      {/* Floating mini signals */}
      <motion.div
        className="absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-cyan-300/80 blur-[1px]"
        animate={{ y: [0, -10, 0], x: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[16%] top-[24%] h-2 w-2 rounded-full bg-indigo-300/80 blur-[1px]"
        animate={{ y: [0, 8, 0], x: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[18%] left-[22%] h-2.5 w-2.5 rounded-full bg-violet-300/75 blur-[1px]"
        animate={{ y: [0, -6, 0], x: [0, 10, 0], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}