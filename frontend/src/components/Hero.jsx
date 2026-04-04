import React from 'react';
import { motion } from 'framer-motion';
import AmbientOrbs from './AmbientOrbs';
import GridBackground from './GridBackground';
import NeuralCore from './NeuralCore';

const floatingTags = [
  { label: 'AI Agents', x: '8%', y: '18%' },
  { label: 'SaaS Platforms', x: '68%', y: '14%' },
  { label: 'Enterprise Systems', x: '74%', y: '66%' },
  { label: 'Mobile Engineering', x: '10%', y: '72%' },
  { label: 'Product Strategy', x: '52%', y: '82%' },
];

const stats = [
  { value: '99.99%', label: 'Reliability' },
  { value: '450ms', label: 'Latency Floor' },
  { value: 'AI-Native', label: 'Architecture' },
  { value: '24/7', label: 'Delivery Support' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 md:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0">
        <GridBackground />
        <AmbientOrbs />
      </div>

      {/* Soft neural glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(109,94,248,0.16),transparent_30%),radial-gradient(circle_at_78%_24%,rgba(122,215,255,0.10),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left content */}
          <div className="max-w-3xl">

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-[2.7rem] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.5rem] md:text-[4.6rem] lg:text-[5.4rem]"
            >
              Architecting{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                Intelligent Products
              </span>{' '}
              for the Next Decade
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl text-[15px] leading-7 text-white/66 md:text-[17px] md:leading-8"
            >
              Cognexon transforms complex business challenges into scalable SaaS,
              AI-powered workflows, and enterprise platforms designed for
              performance, autonomy, and long-term growth.
            </motion.p>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-[680px] items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[620px]">
              {/* Floating tags */}
              {floatingTags.map((tag, index) => (
                <motion.div
                  key={tag.label}
                  className="absolute z-20 hidden md:block"
                  style={{ left: tag.x, top: tag.y }}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.45,
                      delay: 0.45 + index * 0.08,
                    },
                    scale: {
                      duration: 0.45,
                      delay: 0.45 + index * 0.08,
                    },
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                >
                  <div className="rounded-full border border-white/10 bg-[#0D121A]/75 px-4 py-2 text-[11px] font-medium tracking-[0.14em] text-white/72 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                    {tag.label}
                  </div>
                </motion.div>
              ))}

              {/* Outer halo */}
              <motion.div
                className="absolute inset-[10%] rounded-full border border-indigo-300/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-[18%] rounded-full border border-cyan-300/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              />

              {/* Main neural visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <NeuralCore />
              </div>

              {/* Side glows */}
              <div className="pointer-events-none absolute left-[10%] top-[24%] h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute right-[14%] top-[38%] h-28 w-28 rounded-full bg-cyan-400/16 blur-3xl" />
              <div className="pointer-events-none absolute bottom-[18%] left-[30%] h-24 w-24 rounded-full bg-violet-500/16 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-14 flex justify-center pb-10 md:pb-14"
        >
          <a
            href="#solutions"
            className="group inline-flex flex-col items-center gap-2 text-white/42 transition-colors duration-300 hover:text-white/70"
          >
            <span className="text-[10px] uppercase tracking-[0.28em]">
              Scroll to explore
            </span>
            <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-white/12">
              <motion.span
                className="mt-1.5 h-2 w-2 rounded-full bg-white/70"
                animate={{ y: [0, 12, 0], opacity: [1, 0.35, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}