import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: '450ms',
    label: 'Latency Floor',
    description: 'Performance-driven architecture tuned for responsive product experiences.',
  },
  {
    value: '12+',
    label: 'Patented Layers',
    description: 'Structured intelligence systems designed for extensibility and depth.',
  },
  {
    value: '99.99%',
    label: 'Reliability',
    description: 'Production-grade delivery focused on uptime, resilience, and continuity.',
  },
  {
    value: '24/7',
    label: 'Kernel Support',
    description: 'Operational readiness with post-launch visibility and continuous response.',
  },
];

function SignalField() {
  const dots = [
    { left: '10%', top: '32%', delay: 0.1 },
    { left: '18%', top: '62%', delay: 0.6 },
    { left: '28%', top: '24%', delay: 0.3 },
    { left: '36%', top: '72%', delay: 0.8 },
    { left: '48%', top: '18%', delay: 0.2 },
    { left: '58%', top: '68%', delay: 0.5 },
    { left: '68%', top: '26%', delay: 0.7 },
    { left: '78%', top: '58%', delay: 0.4 },
    { left: '88%', top: '36%', delay: 0.9 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M80 260C220 180 340 180 470 240C590 296 720 300 860 246C980 198 1120 178 1360 246"
          stroke="rgba(122,215,255,0.12)"
          strokeWidth="1.2"
        />
        <path
          d="M90 330C220 286 340 286 486 320C630 354 760 356 900 320C1048 282 1182 276 1350 320"
          stroke="rgba(109,94,248,0.11)"
          strokeWidth="1.1"
        />
        <path
          d="M200 100C320 120 360 160 420 220C480 282 560 316 680 320C800 324 860 284 940 220C1020 156 1100 118 1260 108"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      </svg>

      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute h-2.5 w-2.5 rounded-full bg-white/85 shadow-[0_0_20px_rgba(255,255,255,0.35)]"
          style={{ left: dot.left, top: dot.top }}
          animate={{
            scale: [1, 1.45, 1],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

function AiCore() {
  return (
    <div className="relative mx-auto flex h-[200px] w-[200px] items-center justify-center md:h-[240px] md:w-[240px]">
      <motion.div
        className="absolute inset-0 rounded-full border border-indigo-300/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[12%] rounded-full border border-cyan-300/12"
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-[24%] rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-20 w-20 rounded-full border border-cyan-300/16 md:h-24 md:w-24"
          animate={{
            scale: [1, 2.2, 3],
            opacity: [0.4, 0.12, 0],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: 'easeOut',
            delay: i * 1.1,
          }}
        />
      ))}

      <motion.div
        className="absolute h-28 w-28 rounded-full border border-white/12 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.26),rgba(109,94,248,0.16)_35%,rgba(8,10,16,0.82)_82%)] shadow-[0_0_100px_rgba(109,94,248,0.26)] md:h-32 md:w-32"
        animate={{
          scale: [1, 1.04, 1],
          boxShadow: [
            '0 0 60px rgba(109,94,248,0.18)',
            '0 0 110px rgba(109,94,248,0.28)',
            '0 0 60px rgba(109,94,248,0.18)',
          ],
        }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-[28%] rounded-full bg-white/85 blur-[8px]" />
      </motion.div>

      <motion.div
        className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(122,215,255,0.8)]"
        style={{ top: '16%', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute h-3 w-3 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.7)]"
        style={{ bottom: '18%', left: '26%' }}
        animate={{ x: [0, -6, 0], y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute h-3 w-3 rounded-full bg-indigo-300 shadow-[0_0_24px_rgba(109,94,248,0.8)]"
        style={{ right: '18%', top: '54%' }}
        animate={{ x: [0, 6, 0], y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

function MetricCard({
  value,
  label,
  description,
  index,
}: {
  value: string;
  label: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative h-full"
    >
      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-5 md:p-6 backdrop-blur-2xl transition-colors duration-300 group-hover:border-white/16">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_20%,rgba(109,94,248,0.14),transparent_28%),radial-gradient(circle_at_82%_76%,rgba(122,215,255,0.10),transparent_28%)]" />

        <div className="relative z-10">
          <div className="text-[1.55rem] font-semibold tracking-[-0.04em] text-white md:text-[1.85rem]">
            {value}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/46">
            {label}
          </div>
          <p className="mt-4 text-sm leading-7 text-white/60">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AiAdvantageBand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[18%] h-64 w-64 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[8%] bottom-[14%] h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0A0F16]/85 px-5 py-10 backdrop-blur-2xl md:px-8 md:py-14">
          <SignalField />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
              AI Advantage
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              Move beyond experimentation.
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                {' '}Deploy intelligence with confidence
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
              Cognexon helps ambitious teams deploy AI-powered systems that are
              fast, reliable, scalable, and ready for real operational use—not
              just prototype demos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-10 flex justify-center md:mt-12"
          >
            <AiCore />
          </motion.div>

          <div className="relative z-10 mt-10 grid gap-4 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={metric.label}
                value={metric.value}
                label={metric.label}
                description={metric.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mt-8 flex justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group inline-flex items-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 py-3.5 text-sm font-semibold text-white"
            >
              <span>Initiate Strategy Session</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}