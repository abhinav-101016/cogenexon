import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Step = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Discovery & Blueprinting',
    subtitle: 'Strategic foundation',
    description:
      'We begin with deep-dive product and technical discovery to define objectives, constraints, architecture direction, and delivery priorities.',
    outcomes: [
      'Technical requirements mapping',
      'Product roadmap alignment',
      'Architecture blueprint',
    ],
  },
  {
    number: '02',
    title: 'UI/UX Prototyping',
    subtitle: 'Experience design',
    description:
      'High-fidelity interfaces, interaction flows, and system-level design decisions are shaped early to reduce ambiguity and accelerate execution.',
    outcomes: [
      'Interactive user journeys',
      'Design systems and components',
      'Validation-ready prototypes',
    ],
  },
  {
    number: '03',
    title: 'Agile Development',
    subtitle: 'Rapid, iterative execution',
    description:
      'We ship in focused development cycles with production-oriented engineering, keeping momentum high while maintaining architectural discipline.',
    outcomes: [
      'Sprint-based delivery',
      'Scalable backend and frontend systems',
      'Production-ready feature releases',
    ],
  },
  {
    number: '04',
    title: 'AI Integration',
    subtitle: 'Applied intelligence',
    description:
      'From LLM workflows to intelligent automation and model-assisted systems, we embed AI where it creates measurable operational value.',
    outcomes: [
      'LLM and workflow integration',
      'Automation and decision support',
      'AI-ready system architecture',
    ],
  },
  {
    number: '05',
    title: 'Quality Assurance',
    subtitle: 'Reliability and performance',
    description:
      'Every layer is hardened through testing, security review, performance validation, and bug resolution before launch or scale-up.',
    outcomes: [
      'Testing and bug validation',
      'Security and performance checks',
      'Pre-launch confidence',
    ],
  },
  {
    number: '06',
    title: 'Launch & Growth',
    subtitle: 'Deployment and scale',
    description:
      'We deploy with precision, monitor post-launch performance, and support growth through iteration, scaling, and long-term product evolution.',
    outcomes: [
      'Deployment and rollout',
      'Observability and support',
      'Continuous improvement roadmap',
    ],
  },
];

function StepNode({
  step,
  index,
  progress,
}: {
  step: Step;
  index: number;
  progress: any;
}) {
  const start = index / steps.length;
  const end = (index + 1) / steps.length;

  const activeOpacity = useTransform(progress, [start, end], [0.45, 1]);
  const activeScale = useTransform(progress, [start, end], [0.96, 1]);
  const glowOpacity = useTransform(progress, [start, end], [0.1, 0.22]);

  return (
    <motion.div
      style={{ opacity: activeOpacity, scale: activeScale }}
      className="relative pl-12 md:pl-16"
    >
      <div className="absolute left-0 top-1">
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-[#0D121A] md:h-10 md:w-10">
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(109,94,248,0.55),transparent_60%)] blur-md"
          />
          <div className="relative h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.55)]" />
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 md:p-6 backdrop-blur-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
              {step.number} • {step.subtitle}
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.45rem]">
              {step.title}
            </h3>
          </div>

          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.12,
            }}
            className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan-200/62 md:block"
          >
            In Flow
          </motion.div>
        </div>

        <p className="max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
          {step.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {step.outcomes.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-white/68"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StickyRail({
  progress,
}: {
  progress: any;
}) {
  const fillHeight = useTransform(progress, [0, 1], ['0%', '100%']);

  return (
    <div className="sticky top-28 hidden h-[70vh] lg:flex lg:flex-col">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
          Execution Framework
        </div>

        <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-white">
          A delivery system built for
          <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
            {' '}clarity, speed, and scale
          </span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-white/62 md:text-[15px]">
          Cognexon’s pipeline combines strategy, experience design, engineering,
          AI integration, and operational rigor into one coherent execution model.
        </p>
      </div>

      <div className="relative mt-6 h-full max-h-[420px] w-20">
        <div className="absolute left-[19px] top-0 h-full w-px bg-white/8" />
        <motion.div
          style={{ height: fillHeight }}
          className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-cyan-300 via-indigo-400 to-transparent shadow-[0_0_24px_rgba(109,94,248,0.4)]"
        />

        <div className="absolute left-[8px] top-0 flex h-full flex-col justify-between">
          {steps.map((step, index) => {
            const start = index / steps.length;
            const end = (index + 1) / steps.length;

            const opacity = useTransform(progress, [start, end], [0.45, 1]);
            const scale = useTransform(progress, [start, end], [0.92, 1.08]);

            return (
              <div key={step.number} className="relative flex items-center gap-4">
                <motion.div
                  style={{ opacity, scale }}
                  className="relative flex h-6 w-6 items-center justify-center rounded-full border border-white/14 bg-[#0D121A]"
                >
                  <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(122,215,255,0.22),transparent_62%)] blur-sm"
                  />
                  <div className="relative h-2 w-2 rounded-full bg-white" />
                </motion.div>

                <motion.div
                  style={{ opacity }}
                  className="absolute left-10 whitespace-nowrap text-[11px] uppercase tracking-[0.18em] text-white/42"
                >
                  {step.number}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="mb-10 lg:hidden"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
        <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
        Execution Framework
      </div>

      <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
        A delivery system built for
        <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
          {' '}clarity, speed, and scale
        </span>
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
        Cognexon’s process aligns product thinking, interface design, engineering,
        AI capability, and performance validation into one seamless pipeline.
      </p>
    </motion.div>
  );
}

export default function ExecutionFramework() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 20%', 'end 85%'],
  });

  const memoizedSteps = useMemo(() => steps, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[16%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[6%] bottom-[12%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:gap-16">
        <StickyRail progress={scrollYProgress} />

        <div className="relative">
          <MobileIntro />

          <div className="relative space-y-5 md:space-y-6">
            <div className="absolute left-[15px] top-2 hidden h-[calc(100%-8px)] w-px bg-white/8 md:block lg:hidden" />
            <div className="absolute left-[15px] top-2 block h-[calc(100%-8px)] w-px bg-white/8 md:hidden" />

            {memoizedSteps.map((step, index) => (
              <StepNode
                key={step.number}
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}