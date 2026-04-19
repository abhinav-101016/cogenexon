import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StrategyCallModal from './StrategyCallModal';

function NeuralHalo() {
  const nodes = [
    { left: '50%', top: '14%', delay: 0.1 },
    { left: '72%', top: '26%', delay: 0.4 },
    { left: '82%', top: '50%', delay: 0.7 },
    { left: '70%', top: '74%', delay: 0.2 },
    { left: '50%', top: '86%', delay: 0.5 },
    { left: '28%', top: '74%', delay: 0.8 },
    { left: '18%', top: '50%', delay: 0.3 },
    { left: '30%', top: '26%', delay: 0.6 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full border border-indigo-300/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-[340px] w-[340px] rounded-full border border-cyan-300/12"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute h-[250px] w-[250px] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-24 w-24 rounded-full border border-cyan-300/14"
          animate={{
            scale: [1, 2.4, 3.1],
            opacity: [0.35, 0.12, 0],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.1,
          }}
        />
      ))}

      <motion.div
        className="absolute h-28 w-28 rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.24),rgba(109,94,248,0.16)_35%,rgba(8,10,16,0.82)_82%)] shadow-[0_0_100px_rgba(109,94,248,0.22)]"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 60px rgba(109,94,248,0.16)',
            '0 0 110px rgba(109,94,248,0.26)',
            '0 0 60px rgba(109,94,248,0.16)',
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-[28%] rounded-full bg-white/85 blur-[8px]" />
      </motion.div>

      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute h-3 w-3 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.45)]"
          style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: node.delay,
          }}
        />
      ))}

      <svg
        className="absolute h-[420px] w-[420px] opacity-50"
        viewBox="0 0 420 420"
        fill="none"
      >
        <path d="M210 58L300 110L336 210L300 308L210 360L120 308L84 210L120 110L210 58Z" stroke="rgba(122,215,255,0.16)" strokeWidth="1.2" />
        <path d="M210 210L300 110" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L336 210" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L300 308" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L210 360" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L120 308" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L84 210" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L120 110" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <path d="M210 210L210 58" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function FinalCtaSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[14%] h-64 w-64 rounded-full bg-indigo-500/8 blur-3xl" />
          <div className="absolute right-[8%] bottom-[12%] h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#0A0F16]/88 px-6 py-14 backdrop-blur-2xl md:px-10 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(109,94,248,0.16),transparent_26%),radial-gradient(circle_at_74%_64%,rgba(122,215,255,0.10),transparent_28%)]" />
            <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

            <NeuralHalo />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
                Ready to Build
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-6xl"
              >
                Build your next
                <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                  {' '}intelligent product
                </span>
                {' '}with confidence
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.78, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[16px] md:leading-8"
              >
                From AI-powered workflows to scalable SaaS and enterprise platforms,
                Cognexon helps ambitious teams turn complex ideas into elegant,
                production-ready systems designed for performance and growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                {/* Book Strategy Call — opens modal */}
                <motion.button
                  onClick={() => setModalOpen(true)}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.985 }}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/22 to-cyan-400/16 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_34px_rgba(109,94,248,0.18)]"
                >
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">Book Strategy Call</span>
                  <motion.span
                    className="relative"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                  >→</motion.span>
                </motion.button>

                {/* Tell Us — also opens modal */}
                <motion.button
                  onClick={() => setModalOpen(true)}
                  whileHover={{ y: -1, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white/84 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.07] hover:text-white"
                >
                  Tell Us About Your Project
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.72, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  'AI-Native Strategy',
                  'Scalable Engineering',
                  'Enterprise-Ready Delivery',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/66"
                  >
                    {item}
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.72, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-sm text-white/52"
              >
                Prefer email? Reach us directly at{' '}
                <a
                  href="mailto:admin@cognexon.in"
                  className="font-medium text-white/82 transition-colors duration-300 hover:text-white"
                >
                  admin@cognexon.in
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <StrategyCallModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}