import React from 'react';
import { motion } from 'framer-motion';

type Project = {
  title: string;
  subtitle: string;
  icon: string;
  industry: string;
  type: string;
  stack: string[];
  description: string;
  metrics: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    title: 'Hospital, Pharmacy Management System',
    subtitle: 'Hospital Management System',
    icon: '🏥',
    industry: 'Healthcare',
    type: 'Web Platform',
    stack: ['Django', 'Postgres', 'React'],
    description:
      'A comprehensive hospital information system unifying EMR, billing, pharmacy workflows, and staff scheduling. Streamlined operations for a 500-bed multi-specialty facility, reducing administrative overhead by 30%.',
    metrics: [
      { value: '500k+', label: 'Patient Records' },
      { value: '30%', label: 'Efficiency Boost' },
    ],
  },
  {
    title: 'Real Estate Mobile App',
    subtitle: 'Real Estate Mobile App',
    icon: '🏙️',
    industry: 'Real Estate',
    type: 'Mobile Application',
    stack: ['Flutter', 'Firebase', 'AR Kit'],
    description:
      'A premium property hunting experience with AR visualization. Users can virtually tour homes, schedule visits in real time, and connect with agents instantly via in-app messaging.',
    metrics: [
      { value: '1M+', label: 'App Downloads' },
      { value: '4.8', label: 'App Store Rating' },
    ],
  },
  {
    title: 'ERP for Sales Management',
    subtitle: 'Sales Operations ERP',
    icon: '📈',
    industry: 'Enterprise',
    type: 'Internal Platform',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    description:
      'A centralized ERP system for sales operations, lead workflows, reporting, order visibility, and team coordination—built to improve decision-making and revenue process clarity.',
    metrics: [
      { value: '360°', label: 'Sales Visibility' },
      { value: 'Unified', label: 'Ops Workflow' },
    ],
  },
  {
    title: 'ERP for Medicine Factory Management',
    subtitle: 'Manufacturing ERP',
    icon: '🏭',
    industry: 'Manufacturing',
    type: 'Enterprise System',
    stack: ['React', 'Node.js', 'MongoDB'],
    description:
      'An ERP tailored for medicine factory operations covering production tracking, inventory workflows, compliance-sensitive records, and operational coordination across departments.',
    metrics: [
      { value: 'End-to-End', label: 'Factory Workflow' },
      { value: 'Centralized', label: 'Operational Control' },
    ],
  },
  {
    title: 'Ecommerce Shopping App',
    subtitle: 'Commerce Platform',
    icon: '🛍️',
    industry: 'Ecommerce',
    type: 'Mobile & Web',
    stack: ['React', 'Flutter', 'Stripe'],
    description:
      'A modern shopping platform built for product discovery, cart flow, payments, and seamless customer experience across web and mobile touchpoints.',
    metrics: [
      { value: 'Fast', label: 'Checkout Flow' },
      { value: 'Omnichannel', label: 'Shopping Experience' },
    ],
  },
  {
    title: 'Automation APIs',
    subtitle: 'Integration & Automation Layer',
    icon: '⚙️',
    industry: 'Automation',
    type: 'API Infrastructure',
    stack: ['Node.js', 'GraphQL', 'Docker'],
    description:
      'Custom automation APIs and integration layers that connect systems, reduce repetitive work, and power intelligent workflow automation across products and internal operations.',
    metrics: [
      { value: 'API-First', label: 'Automation Layer' },
      { value: 'Scalable', label: 'Integration Ready' },
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.75,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative h-full"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.22)] transition-colors duration-300 group-hover:border-white/16">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(109,94,248,0.14),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(122,215,255,0.10),transparent_28%)]" />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl">
            {project.icon}
          </div>

          <div className="flex flex-wrap justify-end gap-2">
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/52">
              {project.industry}
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cyan-100/75">
              {project.type}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-5">
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
            {project.subtitle}
          </div>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-white/68"
              >
                {tech}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/62">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
            >
              <div className="text-[1.1rem] font-semibold tracking-[-0.03em] text-white">
                {metric.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-6">
          <motion.a
            href="#contact"
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/82 transition-colors duration-300 hover:text-white"
          >
            View Project
            <span className="text-cyan-200/70">→</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
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
            Featured Projects
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Delivering scalable solutions for
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}real-world complexity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            Real-world applications of Cognexon’s engineering capability across
            healthcare, commerce, enterprise systems, automation, and mobile platforms.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
            className="group inline-flex items-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 py-3.5 text-sm font-semibold text-white"
          >
            <span>View All Case Studies</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}