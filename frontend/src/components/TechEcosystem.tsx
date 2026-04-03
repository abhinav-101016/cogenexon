import React from 'react';
import { motion } from 'framer-motion';

const stackRowA = [
  'AWS',
  'Stripe',
  'Vercel',
  'MongoDB',
  'React',
  'Docker',
  'GraphQL',
  'Node.js',
  'Kubernetes',
  'PostgreSQL',
];

const stackRowB = [
  'TypeScript',
  'Next.js',
  'OpenAI',
  'Python',
  'Redis',
  'Firebase',
  'Go',
  'Tailwind',
  'Swift',
  'Flutter',
];

function TechPill({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(109,94,248,0.16),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(122,215,255,0.12),transparent_35%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-center gap-3">
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400 shadow-[0_0_16px_rgba(122,215,255,0.5)]" />
        <span className="text-[13px] font-medium tracking-[0.12em] text-white/78 uppercase group-hover:text-white transition-colors duration-300">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 30,
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#07090D] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#07090D] to-transparent" />

      <motion.div
        className="flex w-max gap-4"
        animate={{
          x: reverse ? ['-50%', '0%'] : ['0%', '-50%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeated.map((item, index) => (
          <TechPill key={`${item}-${index}`} label={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechEcosystem() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-y border-white/6 bg-[#07090D]/80 py-16 md:py-20"
    >
      {/* Ambient structure */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/18 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300/16 to-transparent" />

        <div className="absolute left-[12%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[10%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-cyan-400/8 blur-3xl" />

        {/* subtle network lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 182 C180 120, 320 210, 520 170 S900 110, 1120 170 S1320 220, 1440 160"
            stroke="rgba(109,94,248,0.18)"
            strokeWidth="1.2"
          />
          <path
            d="M0 215 C190 165, 360 250, 560 210 S930 145, 1160 210 S1330 245, 1440 190"
            stroke="rgba(122,215,255,0.16)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.6)]" />
            Trusted Technology Ecosystem
          </div>

          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            Built on modern infrastructure,
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}engineered for scale
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            Cognexon combines battle-tested frameworks, cloud-native platforms,
            AI tooling, and performance-first architecture to deliver products
            that are resilient, extensible, and ready for real-world growth.
          </p>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-white/8 bg-white/[0.025] p-4 md:p-5 backdrop-blur-xl"
          >
            <MarqueeRow items={stackRowA} duration={28} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-white/8 bg-white/[0.025] p-4 md:p-5 backdrop-blur-xl"
          >
            <MarqueeRow items={stackRowB} reverse duration={32} />
          </motion.div>
        </div>

        {/* Bottom trust notes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 grid gap-3 md:grid-cols-3"
        >
          {[
            'Cloud-native delivery pipelines',
            'AI-ready product architecture',
            'Scalable systems for enterprise growth',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-center text-[12px] uppercase tracking-[0.18em] text-white/56 backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}