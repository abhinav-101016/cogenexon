import React from 'react';
import { motion } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '2026', label: 'Year Founded' },
  { value: '5+', label: 'Service Domains' },
  { value: '3', label: 'Founders' },
  { value: '∞', label: 'Ambition' },
];

const team = [
  {
    name: 'Pranshu Pandey',
    role: 'Co-Founder',
    bio: 'Drives the technical vision and execution backbone of Cognexon — turning complex ideas into working systems.',
    initials: 'PP',
    accent: 'from-indigo-500/30 to-cyan-400/20',
  },
  {
    name: 'Sarthak Sachan',
    role: 'Co-Founder',
    bio: 'Brings strategic depth and product thinking to every solution — ensuring what we build creates real-world value.',
    initials: 'SS',
    accent: 'from-cyan-400/25 to-indigo-500/20',
  },
  {
    name: 'Sparsh Gupta',
    role: 'Co-Founder',
    bio: 'Leads with an innovation-first mindset — connecting business needs with modern technology for sustainable impact.',
    initials: 'SG',
    accent: 'from-violet-500/28 to-cyan-400/18',
  },
];

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
        <path d="M6 16h8" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M7 8l2 2 4-4" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Tailored solutions designed to meet specific business needs with scalability and performance in mind.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
        <rect x="12" y="7" width="6" height="10" rx="1.5" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
        <path d="M5 17h6" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Web & Mobile App Development',
    desc: 'Modern, responsive, and user-friendly applications built using current technologies.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
        <path d="M2 10h16M10 2c-2 2.5-3 5-3 8s1 5.5 3 8M10 2c2 2.5 3 5 3 8s-1 5.5-3 8" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
      </svg>
    ),
    title: 'SaaS Product Development',
    desc: 'Designing and developing scalable SaaS platforms with long-term usability and growth potential.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h12M4 6h12M4 14h8" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="15" cy="14" r="2.5" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Automation & Workflow Systems',
    desc: 'Reducing manual effort and increasing efficiency through intelligent, reliable automation.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3.5" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
        <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M14 4l1.5 1.5M16.5 7H18" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'AI-Powered Integrations',
    desc: 'Implementing AI-driven features and tools to enhance decision-making and user experience.',
  },
];

const approach = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Understand deeply',
    desc: 'We analyze problems before jumping into solutions — clarity first, code second.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10C3 10 5 5 10 5C15 5 17 10 17 10C17 10 15 15 10 15C5 15 3 10 3 10Z"
          stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2.5" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Build smart',
    desc: 'Scalability, performance, and usability are not afterthoughts — they are built in from the start.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
        <path d="M10 6V10L13 12" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Stay lean',
    desc: 'Efficient execution without unnecessary complexity — we keep things clean and purposeful.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3L17 7V13L10 17L3 13V7L10 3Z"
          stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 3V17M3 7L17 13M17 7L3 13" stroke="rgba(109,94,248,0.9)" strokeWidth="0.8" strokeOpacity="0.45" />
      </svg>
    ),
    title: 'Improve continuously',
    desc: 'Iterative development and constant optimization — because good software is never truly finished.',
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }) {
  return (
    <FadeUp>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
        <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
        {children}
      </div>
    </FadeUp>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[10%] h-[480px] w-[480px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-[-6%] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-400/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-4xl">
          <SectionLabel>About Cognexon Solutions</SectionLabel>

          <FadeUp delay={0.06}>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-7xl leading-[1.06]">
              We build systems that{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                create measurable impact.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
              Cognexon Solutions Private Limited is a technology-driven company focused on building
              scalable digital solutions that solve real-world problems. We simplify complexity through
              smart, efficient, and future-ready technology.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                href="mailto:admin@cognexon.in"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="group relative inline-flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/18 to-cyan-400/14 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,94,248,0.14)] backdrop-blur-xl"
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Get in Touch</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >→</motion.span>
              </motion.a>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/75 backdrop-blur-xl transition-colors hover:text-white"
              >
                ← Back to Home
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.07}>
              <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.055]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,94,248,0.10),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                  {s.value}
                </div>
                <div className="relative mt-2 text-[12px] uppercase tracking-[0.18em] text-white/45">
                  {s.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(109,94,248,0.12),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <FadeUp>
              <div className="relative">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58">
                  <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(122,215,255,0.7)]" />
                  Our Mission
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                  Intelligence meets{' '}
                  <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                    disciplined execution
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px]">
                  To design and deliver high-quality digital solutions that help businesses and individuals
                  operate more efficiently, scale faster, and adapt to an ever-changing technological landscape.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(122,215,255,0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <FadeUp delay={0.08}>
              <div className="relative">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
                  Our Vision
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
                  A trusted{' '}
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                    innovation partner
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58 md:text-[15px]">
                  To establish Cognexon Solutions Private Limited as a trusted and innovation-focused
                  technology partner known for building impactful, scalable, and reliable digital products.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Story */}
        <div className="mt-8 group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-2xl">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-500/6 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <FadeUp delay={0.06}>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                  Built with a{' '}
                  <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                    learning-first mindset
                  </span>
                </h2>
              </FadeUp>
            </div>
            <div>
              <FadeUp delay={0.1}>
                <p className="text-sm leading-7 text-white/58 md:text-[15px]">
                  Cognexon Solutions was founded by a team of young, driven individuals who recognized a gap
                  between traditional service-based development and modern, innovation-led product thinking.
                </p>
              </FadeUp>
              <FadeUp delay={0.16}>
                <p className="mt-4 text-sm leading-7 text-white/48 md:text-[15px]">
                  Instead of relying on rigid processes or outdated systems, we built Cognexon with a flexible
                  approach — where innovation is continuous and solutions are driven by real-world needs rather
                  than assumptions. From the start, we've operated lean: faster execution, adaptability, and a
                  strong focus on results.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-[8%] bottom-[15%] h-64 w-64 rounded-full bg-cyan-400/7 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <FadeUp delay={0.06}>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              End-to-end{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                technology solutions
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/52 md:text-[15px]">
              We work across multiple domains to deliver solutions that solve real problems and scale with your growth.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05] ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(122,215,255,0.07),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                  {s.icon}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-white">{s.title}</p>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/52">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <SectionLabel>Our Approach</SectionLabel>
            <FadeUp delay={0.06}>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl lg:text-5xl">
                Simple, effective,{' '}
                <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  results-driven
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-5 text-sm leading-7 text-white/60 md:text-[15px]">
                We prioritize clarity, speed, and real-world impact over unnecessary complexity.
                Our process is built on four pillars that guide every engagement — from the first
                conversation to the final deployment.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-4">
            {approach.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(122,215,255,0.07),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold text-white">{v.title}</p>
                    <p className="mt-1.5 text-[13px] leading-6 text-white/52">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-[8%] bottom-[15%] h-64 w-64 rounded-full bg-cyan-400/7 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <SectionLabel>Leadership</SectionLabel>
          <FadeUp delay={0.06}>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              The people who{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                drive it forward
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/52 md:text-[15px]">
              Technical expertise, execution capability, and a strong vision — the foundation behind
              everything Cognexon builds.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl transition-all duration-500 hover:bg-white/[0.05]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(109,94,248,0.11),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className={`relative mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${member.accent} border border-white/10`}>
                <span className="text-[15px] font-semibold tracking-wider text-white/90">
                  {member.initials}
                </span>
              </div>
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">{member.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cyan-300/65">{member.role}</p>
              <p className="mt-3 text-[13px] leading-6 text-white/50">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/9 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <SectionLabel>Contact Us</SectionLabel>
            <FadeUp delay={0.06}>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl">
                Let's build something{' '}
                <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  worth shipping
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-5 text-sm leading-7 text-white/55 md:text-[15px]">
                At Cognexon Solutions Private Limited, we are committed to delivering solutions that go
                beyond expectations. We focus on building long-term relationships through consistent value,
                transparency, and adaptability.
              </p>
            </FadeUp>

            <FadeUp delay={0.18}>
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:admin@cognexon.in"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="rgba(122,215,255,0.85)" strokeWidth="1.3" />
                      <path d="M1 5l7 5 7-5" stroke="rgba(122,215,255,0.85)" strokeWidth="1.3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Email</p>
                    <p className="text-[14px] text-white/80 group-hover:text-white transition-colors">admin@cognexon.in</p>
                  </div>
                </a>

                <a
                  href="tel:+916306347946"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 2h3l1.5 3.5-1.5 1C7 8 8 9 9.5 9.5l1-1.5L14 9.5v3C9 14 2 7 3 2z"
                        stroke="rgba(109,94,248,0.9)" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">Phone</p>
                    <p className="text-[14px] text-white/80 group-hover:text-white transition-colors">+91 6306347946</p>
                  </div>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Office */}
          <FadeUp delay={0.1}>
            <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(109,94,248,0.10),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/52">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_10px_rgba(109,94,248,0.6)]" />
                  Registered Office
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1.5C6.51 1.5 4.5 3.51 4.5 6c0 3.75 4.5 10.5 4.5 10.5S13.5 9.75 13.5 6c0-2.49-2.01-4.5-4.5-4.5z"
                        stroke="rgba(122,215,255,0.85)" strokeWidth="1.4" />
                      <circle cx="9" cy="6" r="1.5" stroke="rgba(122,215,255,0.85)" strokeWidth="1.4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-white">Cognexon Solutions Pvt. Ltd.</p>
                    <p className="mt-2 text-[13px] leading-7 text-white/52">
                      A-235, LIG-3, Barra-8,<br />
                      Near Ramgopal Chauraha Barra,<br />
                      Kanpur Nagar, Uttar Pradesh – 208027
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/52">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(122,215,255,0.7)]" />
                    Currently accepting new projects
                  </div>
                  <p className="mt-4 text-[13px] leading-6 text-white/45">
                    We believe the right use of technology can transform businesses — and we're here to make that transformation practical, efficient, and sustainable.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060A12] text-white">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <StatsSection />
        <MissionVisionSection />
        <ServicesSection />
        <ApproachSection />
        <TeamSection />
        <ContactSection />
      </div>
    </main>
  );
}