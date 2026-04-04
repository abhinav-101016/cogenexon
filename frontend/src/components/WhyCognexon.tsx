import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Product-First Thinking',
    description:
      'We approach every build as a product system, not just a list of features. That means sharper prioritization, cleaner UX, and stronger long-term outcomes.',
  },
  {
    number: '02',
    title: 'AI-Native Execution',
    description:
      'From LLM integrations to intelligent automation and data-driven workflows, we build with modern AI architecture at the core—not as an afterthought.',
  },
  {
    number: '03',
    title: 'Engineering Depth with Speed',
    description:
      'Cognexon combines rapid delivery with production discipline, helping ambitious teams move from concept to launch without sacrificing quality.',
  },
  {
    number: '04',
    title: 'Built for Scale and Continuity',
    description:
      'We design systems that remain resilient as usage grows—supporting new features, higher load, more integrations, and long-term business evolution.',
  },
];

function PillarCard({
  item,
  index,
}: {
  item: (typeof pillars)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24, y: 18 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] p-5 md:p-6 backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(122,215,255,0.10),transparent_26%),radial-gradient(circle_at_20%_80%,rgba(109,94,248,0.10),transparent_28%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[12px] font-semibold tracking-[0.18em] text-white/72">
          {item.number}
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/62">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function NeuralTransformationVisual() {
  const brainNodes = [
    { x: 78, y: 120 },
    { x: 122, y: 76 },
    { x: 170, y: 56 },
    { x: 220, y: 74 },
    { x: 258, y: 118 },
    { x: 238, y: 176 },
    { x: 188, y: 210 },
    { x: 126, y: 196 },
    { x: 86, y: 158 },
  ];

  const systemNodes = [
    { x: 360, y: 82 },
    { x: 450, y: 82 },
    { x: 540, y: 82 },
    { x: 360, y: 156 },
    { x: 450, y: 156 },
    { x: 540, y: 156 },
    { x: 360, y: 230 },
    { x: 450, y: 230 },
    { x: 540, y: 230 },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[720px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-4 md:p-6 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_40%,rgba(109,94,248,0.12),transparent_22%),radial-gradient(circle_at_80%_50%,rgba(122,215,255,0.10),transparent_24%)]" />

      <div className="relative h-[320px] w-full md:h-[360px]">
        {/* soft background glows */}
        <div className="absolute left-[8%] top-[22%] h-28 w-28 rounded-full bg-indigo-500/14 blur-3xl" />
        <div className="absolute right-[10%] top-[28%] h-28 w-28 rounded-full bg-cyan-400/12 blur-3xl" />

        <svg
          viewBox="0 0 640 320"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {/* left organic brain cluster */}
          <motion.path
            d="M122 80C145 55 196 42 230 66C257 84 276 110 274 142C272 182 244 210 203 220C159 231 114 212 90 178C66 144 75 105 122 80Z"
            stroke="rgba(109,94,248,0.28)"
            strokeWidth="1.3"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />

          {brainNodes.map((node, i) => (
            <g key={`brain-${i}`}>
              {i < brainNodes.length - 1 && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={brainNodes[i + 1].x}
                  y2={brainNodes[i + 1].y}
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.05 }}
                />
              )}
            </g>
          ))}

          {/* center transformation beams */}
          <motion.path
            d="M280 120C320 120 334 100 360 82"
            stroke="rgba(122,215,255,0.30)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          />
          <motion.path
            d="M285 160C318 160 334 160 360 156"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.64 }}
          />
          <motion.path
            d="M276 196C318 196 334 214 360 230"
            stroke="rgba(109,94,248,0.26)"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.78 }}
          />

          {/* right structured system grid */}
          {systemNodes.map((node, i) => (
            <g key={`system-${i}`}>
              {i % 3 !== 2 && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={systemNodes[i + 1].x}
                  y2={systemNodes[i + 1].y}
                  stroke="rgba(122,215,255,0.18)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.95 + i * 0.03 }}
                />
              )}
              {i < 6 && (
                <motion.line
                  x1={node.x}
                  y1={node.y}
                  x2={systemNodes[i + 3].x}
                  y2={systemNodes[i + 3].y}
                  stroke="rgba(255,255,255,0.14)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.08 + i * 0.03 }}
                />
              )}
            </g>
          ))}
        </svg>

        {/* Animated nodes: left organic */}
        {brainNodes.map((node, i) => (
          <motion.div
            key={`brain-node-${i}`}
            className="absolute h-3 w-3 rounded-full border border-white/20 bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.45)]"
            style={{
              left: `${(node.x / 640) * 100}%`,
              top: `${(node.y / 320) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2.8,
              delay: i * 0.12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated nodes: right structured */}
        {systemNodes.map((node, i) => (
          <motion.div
            key={`system-node-${i}`}
            className="absolute h-3.5 w-3.5 rounded-[6px] border border-cyan-200/18 bg-cyan-200/85 shadow-[0_0_16px_rgba(122,215,255,0.35)]"
            style={{
              left: `${(node.x / 640) * 100}%`,
              top: `${(node.y / 320) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.72, 1, 0.72] }}
            transition={{
              duration: 2.4,
              delay: 0.8 + i * 0.08,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* transformation pulse */}
        <motion.div
          className="absolute left-[47%] top-[50%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/16"
          animate={{
            scale: [1, 1.8, 2.4],
            opacity: [0.35, 0.12, 0],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
        />

        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/52">
          Cognition
        </div>
        <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/52">
          Structured Execution
        </div>
      </div>
    </div>
  );
}

export default function WhyCognexon() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[15%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[4%] bottom-[10%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
            Why Cognexon
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl"
          >
            From
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}ideas and intelligence
            </span>
            {' '}to production-ready systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-xl text-sm leading-7 text-white/64 md:text-[15px]"
          >
            Cognexon is built around a simple principle: ambitious products need
            both intelligent thinking and disciplined execution. We bridge product
            strategy, modern engineering, and applied AI to turn complex visions
            into elegant, scalable software systems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-xl text-sm leading-7 text-white/56 md:text-[15px]"
          >
            That means sharper roadmap decisions, stronger technical architecture,
            more thoughtful design systems, and AI capabilities that create real
            operational impact—not just surface-level experimentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              'AI-Native Delivery',
              'Product-Led Engineering',
              'Enterprise-Ready Systems',
            ].map((badge) => (
              <div
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/68"
              >
                {badge}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <NeuralTransformationVisual />
          </motion.div>
        </div>

        {/* Right pillars */}
        <div className="grid gap-4">
          {pillars.map((item, index) => (
            <PillarCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}