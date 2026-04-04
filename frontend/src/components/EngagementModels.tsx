import React from 'react';
import { motion } from 'framer-motion';

type Model = {
  name: string;
  badge: string;
  headline: string;
  description: string;
  bestFor: string;
  deliverables: string[];
  emphasis?: boolean;
};

const models: Model[] = [
  {
    name: 'MVP Launch',
    badge: 'Fast Validation',
    headline: 'Built for startups and early-stage teams that need clarity, speed, and a strong first release.',
    description:
      'Ideal for founders and emerging businesses who need to move from concept to market-ready product with focused scope, intelligent prioritization, and rapid execution.',
    bestFor: 'Best for new SaaS ideas, pilot products, internal tools, and fast product validation.',
    deliverables: [
      'Product discovery and scope definition',
      'High-fidelity UI/UX foundation',
      'Core feature build for launch',
      'Production-ready deployment setup',
    ],
  },
  {
    name: 'Growth Build',
    badge: 'Recommended',
    headline: 'Designed for scaling products that need stronger architecture, richer workflows, and iterative expansion.',
    description:
      'A balanced engagement model for companies that already have traction or a working product and now need deeper engineering, improved product systems, and faster growth support.',
    bestFor: 'Best for scaling SaaS products, platform enhancement, AI integrations, and multi-sprint development.',
    deliverables: [
      'Roadmap-driven sprint execution',
      'Scalable frontend and backend systems',
      'AI workflows and advanced integrations',
      'Performance optimization and iteration support',
    ],
    emphasis: true,
  },
  {
    name: 'Enterprise Transformation',
    badge: 'Complex Systems',
    headline: 'Structured for organizations with operational complexity, modernization goals, or enterprise-scale software demands.',
    description:
      'For larger companies that require architecture modernization, workflow optimization, multi-system integration, or secure internal platforms designed for continuity and scale.',
    bestFor: 'Best for enterprise platforms, legacy modernization, AI-enabled operations, and large internal systems.',
    deliverables: [
      'Architecture and systems redesign',
      'Secure, scalable platform engineering',
      'Workflow automation and integration layers',
      'Long-term support and scale planning',
    ],
  },
];

function ModelCard({
  model,
  index,
}: {
  model: Model;
  index: number;
}) {
  const highlighted = !!model.emphasis;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.78,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div
        className={[
          'relative flex h-full flex-col overflow-hidden rounded-[30px] border p-6 md:p-7 backdrop-blur-2xl transition-all duration-300',
          highlighted
            ? 'border-indigo-300/18 bg-white/[0.06] shadow-[0_24px_90px_rgba(109,94,248,0.10)]'
            : 'border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.20)] group-hover:border-white/16',
        ].join(' ')}
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: highlighted
              ? 'radial-gradient(circle at 18% 22%, rgba(109,94,248,0.16), transparent 30%), radial-gradient(circle at 82% 72%, rgba(122,215,255,0.12), transparent 30%)'
              : 'radial-gradient(circle at 18% 22%, rgba(109,94,248,0.12), transparent 30%), radial-gradient(circle at 82% 72%, rgba(122,215,255,0.08), transparent 30%)',
          }}
        />

        {highlighted && (
          <div className="absolute right-4 top-4 rounded-full border border-indigo-200/16 bg-gradient-to-r from-indigo-500/18 to-cyan-400/14 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
            Most Chosen
          </div>
        )}

        <div className="relative z-10 flex-1">
          <div className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-white/55">
            {model.badge}
          </div>

          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white md:text-[1.9rem]">
            {model.name}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/68 md:text-[15px]">
            {model.headline}
          </p>

          <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px]">
            {model.description}
          </p>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
              Best For
            </div>
            <div className="mt-2 text-sm leading-7 text-white/76">
              {model.bestFor}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {model.deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
              >
                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400 shadow-[0_0_14px_rgba(122,215,255,0.45)]" />
                <div className="text-sm text-white/76">{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-7 flex flex-col gap-3">
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            className={[
              'group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition-all duration-300',
              highlighted
                ? 'border border-indigo-300/20 bg-gradient-to-r from-indigo-500/22 to-cyan-400/16 text-white'
                : 'border border-white/10 bg-white/[0.05] text-white/86 hover:bg-white/[0.07] hover:text-white',
            ].join(' ')}
          >
            <span>Discuss This Model</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function EngagementModels() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[6%] bottom-[12%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
            Engagement Models
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Flexible ways to engage
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}based on your stage and complexity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            Cognexon works across early validation, growth-stage scaling, and
            enterprise transformation. Our engagement structures are designed to
            align with your product maturity, technical scope, and business goals.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-14 xl:grid-cols-3">
          {models.map((model, index) => (
            <ModelCard key={model.name} model={model} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm text-white/62 backdrop-blur-xl md:px-6">
            Need a custom engagement structure for a unique project?{' '}
            <a
              href="#contact"
              className="font-medium text-white/86 transition-colors duration-300 hover:text-white"
            >
              Let’s scope it together.
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}