import React from 'react';
import { motion } from 'framer-motion';

type CaseStudy = {
  title: string;
  category: string;
  type: string;
  icon: string;
  description: string;
  stack: string[];
  metrics: { value: string; label: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    title: 'Hospital Management System',
    category: 'Healthcare',
    type: 'Web Platform',
    icon: '🏥',
    description:
      'A comprehensive hospital information platform unifying EMR workflows, billing operations, and staff scheduling for a large multi-specialty healthcare environment.',
    stack: ['Django', 'Postgres', 'React'],
    metrics: [
      { value: '500k+', label: 'Patient Records' },
      { value: '30%', label: 'Efficiency Boost' },
    ],
  },
  {
    title: 'Real Estate Mobile App',
    category: 'Real Estate',
    type: 'Mobile Application',
    icon: '🏙️',
    description:
      'A premium property discovery experience with AR-assisted exploration, instant visit scheduling, and integrated real-time communication between buyers and agents.',
    stack: ['Flutter', 'Firebase', 'AR Kit'],
    metrics: [
      { value: '1M+', label: 'App Downloads' },
      { value: '4.8', label: 'App Store Rating' },
    ],
  },
  {
    title: 'Labour Employment App',
    category: 'Labour Market',
    type: 'Mobile Platform',
    icon: '🛠️',
    description:
      'A workforce platform connecting blue-collar professionals with jobs in real time through geo-matching, streamlined onboarding, and automated payroll workflows.',
    stack: ['Go', 'Kubernetes', 'Swift'],
    metrics: [
      { value: '50K+', label: 'Jobs Filled' },
      { value: '12hr', label: 'Avg. Placement Time' },
    ],
  },
];

function CaseStudyCard({
  item,
  index,
}: {
  item: CaseStudy;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 md:p-7 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.22)] transition-colors duration-300 group-hover:border-white/16">
        {/* top shimmer */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(109,94,248,0.14),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(122,215,255,0.10),transparent_28%)]" />

        {/* visual header */}
        <div className="relative mb-6 overflow-hidden rounded-[24px] border border-white/10 bg-[#0C1118]/95 p-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,94,248,0.18),transparent_26%),radial-gradient(circle_at_78%_72%,rgba(122,215,255,0.12),transparent_28%)]" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl">
              {item.icon}
            </div>

            <div className="flex gap-2">
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/52">
                {item.category}
              </div>
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cyan-100/75">
                {item.type}
              </div>
            </div>
          </div>

          {/* subtle architecture lines */}
          <div className="relative z-10 mt-6">
            <svg
              viewBox="0 0 320 100"
              className="h-20 w-full opacity-70"
              fill="none"
            >
              <path
                d="M20 72C58 44 82 38 120 48C154 58 182 60 220 42C250 28 278 32 300 18"
                stroke="rgba(122,215,255,0.20)"
                strokeWidth="1.2"
              />
              <path
                d="M20 86C54 74 92 76 128 66C166 56 202 70 238 64C266 58 286 48 300 42"
                stroke="rgba(109,94,248,0.18)"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-[1.8rem]">
            {item.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62 md:text-[15px]">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-white/68"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-7 grid grid-cols-2 gap-3">
          {item.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
            >
              <div className="text-[1.15rem] font-semibold tracking-[-0.03em] text-white md:text-[1.35rem]">
                {metric.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-7">
          <motion.a
            href="#contact"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/82 transition-colors duration-300 hover:text-white"
          >
            View Case Study
            <span className="text-cyan-200/70">→</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedCaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[6%] bottom-[10%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
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
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
            Featured Case Studies
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Real-world systems built for
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}complex industries
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            From healthcare infrastructure to mobile consumer experiences and
            workforce platforms, Cognexon builds scalable digital systems with
            measurable business impact.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-14 xl:grid-cols-3">
          {caseStudies.map((item, index) => (
            <CaseStudyCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            className="group relative inline-flex items-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 py-3.5 text-sm font-semibold text-white"
          >
            <span className="relative">View All Case Studies</span>
            <span className="relative transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}