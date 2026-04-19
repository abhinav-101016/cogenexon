import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3×', label: 'Avg. Time-to-Market Gain' },
  { value: '12+', label: 'Industries Served' },
];

const team = [
  {
    name: 'Aryan Mehta',
    role: 'Founder & CEO',
    bio: 'Former SWE at Google. Obsessed with building software that actually ships.',
    initials: 'AM',
    accent: 'from-indigo-500/30 to-cyan-400/20',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of AI Engineering',
    bio: 'ML researcher turned builder. Specialises in LLM integrations and intelligent automation.',
    initials: 'PS',
    accent: 'from-cyan-400/25 to-indigo-500/20',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Lead Product Engineer',
    bio: 'Full-stack engineer with a designer\'s eye. Turns complex flows into elegant interfaces.',
    initials: 'LO',
    accent: 'from-violet-500/28 to-cyan-400/18',
  },
  {
    name: 'Mei Zhang',
    role: 'Systems Architect',
    bio: 'Distributed systems veteran. Ensures every product we build is resilient at scale.',
    initials: 'MZ',
    accent: 'from-indigo-400/28 to-violet-500/18',
  },
];

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Craft over speed',
    desc: 'We move fast, but never at the cost of quality. Every line of code, every screen, every decision is made with intention.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" />
        <path d="M10 6V10L13 12" stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Radical transparency',
    desc: 'No hidden timelines, no scope surprises. We communicate early, often, and honestly—even when it\'s uncomfortable.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10C3 10 5 5 10 5C15 5 17 10 17 10C17 10 15 15 10 15C5 15 3 10 3 10Z"
          stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="2.5" stroke="rgba(122,215,255,0.9)" strokeWidth="1.4" />
      </svg>
    ),
    title: 'Long-term perspective',
    desc: 'We think beyond the sprint. Architecture decisions, design systems, and team structures are built to outlast any single project.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3L17 7V13L10 17L3 13V7L10 3Z"
          stroke="rgba(109,94,248,0.9)" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 3V17M3 7L17 13M17 7L3 13" stroke="rgba(109,94,248,0.9)" strokeWidth="0.8" strokeOpacity="0.45" />
      </svg>
    ),
    title: 'Ownership culture',
    desc: 'Our engineers and designers treat every product as if it were their own. Because delivering half-heartedly is not in our vocabulary.',
  },
];

const timeline = [
  { year: '2020', event: 'Founded in Bangalore, building MVPs for early-stage startups.' },
  { year: '2021', event: 'First enterprise engagement — re-architecting a logistics platform serving 200k users.' },
  { year: '2022', event: 'Expanded AI practice. Shipped 8 production LLM integrations before it was mainstream.' },
  { year: '2023', event: 'Grew to a 20-person team. Opened a second delivery hub in Dubai.' },
  { year: '2024', event: 'Launched Cognexon Labs — our internal R&D division for AI-native tooling.' },
  { year: '2025', event: 'Serving clients across SaaS, fintech, healthcare, and climate tech globally.' },
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
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[10%] h-[480px] w-[480px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute right-[-6%] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-400/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Animated grid */}
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
          <SectionLabel>About Cognexon</SectionLabel>

          <FadeUp delay={0.06}>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl lg:text-7xl leading-[1.06]">
              We build the software{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                ambitious teams
              </span>{' '}
              are proud to ship.
            </h1>
          </FadeUp>

          <FadeUp delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58 md:text-lg">
              Cognexon is a product engineering studio specialising in AI-native software.
              We partner with founders, product leaders, and enterprises to turn complex
              visions into production-grade systems—fast, without compromise.
            </p>
          </FadeUp>

          <FadeUp delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a
                 onClick={() => setModalOpen(true)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="group relative inline-flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/18 to-cyan-400/14 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,94,248,0.14)] backdrop-blur-xl"
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Book a Strategy Call</span>
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

function MissionSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full bg-indigo-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <SectionLabel>Our Mission</SectionLabel>
            <FadeUp delay={0.06}>
              <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-4xl lg:text-5xl">
                Intelligence meets{' '}
                <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  disciplined execution
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p className="mt-5 text-sm leading-7 text-white/60 md:text-[15px]">
                Most software agencies optimise for either speed or quality. We refused that trade-off.
                Cognexon was built around a single conviction: the best products come from teams that
                think like product owners, architect like engineers, and move like startups.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <p className="mt-4 text-sm leading-7 text-white/50 md:text-[15px]">
                Since 2020 we've helped over 40 teams — from seed-stage founders to Series B companies —
                ship software that creates real business value. Not just MVPs that fall apart at scale,
                but resilient systems that grow with their users.
              </p>
            </FadeUp>
          </div>

          {/* Right: values grid */}
          <div className="grid gap-4">
            {values.map((v, i) => (
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
          <SectionLabel>The Team</SectionLabel>
          <FadeUp delay={0.06}>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              Built by people who{' '}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                ship
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/52 md:text-[15px]">
              No account managers in the loop. You work directly with the engineers and designers
              building your product.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

              {/* Avatar */}
              <div className={`relative mb-5 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${member.accent} border border-white/10`}>
                <span className="text-[15px] font-semibold tracking-wider text-white/90">
                  {member.initials}
                </span>
              </div>

              <p className="text-[15px] font-semibold tracking-[-0.02em] text-white">
                {member.name}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-cyan-300/65">
                {member.role}
              </p>
              <p className="mt-3 text-[13px] leading-6 text-white/50">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute right-[6%] top-[30%] h-64 w-64 rounded-full bg-indigo-500/7 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14">
          <SectionLabel>Our Story</SectionLabel>
          <FadeUp delay={0.06}>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
              Five years of{' '}
              <span className="bg-gradient-to-r from-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                building in the open
              </span>
            </h2>
          </FadeUp>
        </div>

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[90px] top-0 h-full w-px bg-gradient-to-b from-indigo-400/30 via-cyan-300/20 to-transparent md:left-[106px]" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8"
              >
                {/* Year */}
                <div className="relative z-10 w-[74px] shrink-0 text-right md:w-[90px]">
                  <span className="text-[13px] font-semibold tracking-[0.06em] text-indigo-300/85">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="relative z-10 mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full border border-cyan-300/50 bg-cyan-300/80 shadow-[0_0_12px_rgba(122,215,255,0.5)]" />
                </div>

                {/* Content */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] px-5 py-4 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.045]">
                  <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <p className="text-[14px] leading-7 text-white/65">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/9 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center md:px-6">
        <FadeUp>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/52 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(122,215,255,0.7)]" />
            Currently accepting new projects
          </div>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Ready to build something{' '}
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              worth shipping?
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.14}>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/52 md:text-[15px]">
            Tell us what you're building. We'll tell you how we'd approach it—honestly, with no fluff.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group relative inline-flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/16 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_rgba(109,94,248,0.15)] backdrop-blur-xl"
            >
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Book a Strategy Call</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >→</motion.span>
            </motion.a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/75 backdrop-blur-xl transition-colors hover:text-white"
            >
              Start a Project
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#060A12] text-white">
      {/* Subtle base noise texture */}
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
        <MissionSection />
        <TeamSection />
        <TimelineSection />
        <CtaSection />
      </div>
    </main>
  );
}