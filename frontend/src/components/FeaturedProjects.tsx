import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Project = {
  title: string;
  subtitle: string;
  icon: string;
  industry: string;
  type: string;
  stack: string[];
  description: string;
  metrics: { value: string; label: string }[];
  slug: string;
  thumbnail?: string | null;
  accent?: 'cyan' | 'indigo';
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
    slug: 'mediqliq',
    thumbnail: '/CentralizedERPOperations.png',
    accent: 'indigo',
  },
  {
    title: 'Real Estate Mobile App',
    subtitle: 'Real Estate SaaS',
    icon: '🏙️',
    industry: 'PropTech',
    type: 'Mobile Application',
    stack: ['Next.js', 'CRM', 'Google Maps API'],
    description:
      'Cloud-based real estate platform centralizing listings, leads, and client relationship workflows with AR visualization for virtual property tours and real-time agent connect.',
    metrics: [
      { value: '1M+', label: 'App Downloads' },
      { value: '4.8', label: 'App Store Rating' },
    ],
    slug: 'proplink',
    thumbnail: '/AadyaBuildersHome.png',
    accent: 'cyan',
  },
  {
    title: 'Ecommerce Shopping App',
    subtitle: 'Commerce Platform',
    icon: '🛍️',
    industry: 'Ecommerce',
    type: 'Mobile & Web',
    stack: ['React', 'Node.js', 'Razorpay'],
    description:
      'Full-scale multi-category marketplace connecting users with verified local and global suppliers. Built for fast checkout, product discovery, and seamless omnichannel experience.',
    metrics: [
      { value: 'Fast', label: 'Checkout Flow' },
      { value: 'Omnichannel', label: 'Shopping Experience' },
    ],
    slug: 'lunemart',
    thumbnail: '/LuneMartHero.png',
    accent: 'cyan',
  },
  {
    title: 'Unified Digital Healthcare Ecosystem',
    subtitle: 'Healthcare Platform',
    icon: '🩺',
    industry: 'Healthcare',
    type: 'Web & Mobile',
    stack: ['React', 'WebRTC', 'Node.js'],
    description:
      'Connecting patients with doctors, labs, and pharmacies in one platform. Features video consultations, digital prescriptions, appointment booking, and real-time health record management.',
    metrics: [
      { value: 'Unified', label: 'Care Platform' },
      { value: 'Live', label: 'Video Consults' },
    ],
    slug: 'aadyaplus',
    thumbnail: '/AadyaDoctors.png',
    accent: 'indigo',
  },
  {
    title: 'AI-Powered News Publishing Platform',
    subtitle: 'AI News Platform',
    icon: '📰',
    industry: 'AI / Media',
    type: 'Web Platform',
    stack: ['React', 'Gemini API', 'CMS'],
    description:
      'AI-powered news publishing combining automated content pipelines with editorial control. Scrapes, summarizes, and publishes stories across categories with full CMS and admin workflows.',
    metrics: [
      { value: 'AI-First', label: 'Content Pipeline' },
      { value: 'Auto', label: 'Publishing Flow' },
    ],
    slug: 'newsforge',
    thumbnail: '/NewsForgeNews.png',
    accent: 'indigo',
  },
  {
    title: 'Smart Travel & Cab Booking Platform',
    subtitle: 'Travel Tech',
    icon: '🚕',
    industry: 'Travel Tech',
    type: 'Mobile Application',
    stack: ['React Native', 'Maps API', 'Node.js'],
    description:
      'Smart travel platform integrating trip planning, verified cab booking, and women-safety features. Real-time tracking, WebRTC-based SOS, and a seamless multi-modal booking experience.',
    metrics: [
      { value: 'Real-Time', label: 'Cab Tracking' },
      { value: 'Built-In', label: 'Safety Features' },
    ],
    slug: 'cabit',
    thumbnail: '/CabitHero.png',
    accent: 'cyan',
  },
];

// ── Animated fallback mockups ──────────────────────────────────────────────────

function AnimatedMockup({ project }: { project: Project }) {
  const isIndigo = project.accent === 'indigo';
  const primary = isIndigo ? 'rgba(109,94,248,' : 'rgba(122,215,255,';

  const patterns: Record<string, React.ReactNode> = {
    proplink: <ListingPattern primary={primary} />,
  };

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 60% 40%, ${primary}0.12), transparent 55%)` }}
      />
      {patterns[project.slug] ?? <GenericPattern primary={primary} />}
    </div>
  );
}

function ListingPattern({ primary }: { primary: string }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div
        className="absolute left-4 top-3 right-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity }}
      >
        <div className="flex gap-3">
          <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-white/8 border border-white/8" />
          <div className="flex-1">
            <div className="h-2 w-full rounded bg-white/15 mb-1.5" />
            <div className="h-2 w-3/4 rounded bg-white/10 mb-2" />
            <div className="flex gap-2">
              <span
                className="text-[9px] px-2 py-0.5 rounded-full"
                style={{ background: `${primary}0.18)`, color: `${primary}0.8)` }}
              >
                Available
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">3BHK</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 w-[120px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4.8, repeat: Infinity }}
      >
        <div className="text-[8px] text-white/38 mb-2">CRM Pipeline</div>
        {['New Lead', 'Contacted', 'Closed'].map((s, i) => (
          <div key={s} className="flex items-center gap-2 mb-1.5">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: `${primary}${0.4 + i * 0.2})` }} />
            <div className="text-[9px] text-white/50">{s}</div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 w-[90px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity }}
      >
        <div className="text-[8px] text-white/38 mb-1">Market Trend</div>
        <div className="text-lg font-semibold text-white">↑ 12%</div>
        <div className="text-[8px] text-white/35">Price growth</div>
      </motion.div>
    </div>
  );
}

function GenericPattern({ primary }: { primary: string }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div
        className="absolute left-4 top-3 right-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity }}
      >
        {[80, 55, 70].map((w, i) => (
          <div key={i} className="flex items-center gap-2 mb-2">
            <div className="h-2 rounded-full flex-1 bg-white/8">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `${primary}0.55)`, width: `${w}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${w}%` }}
                transition={{ duration: 1.2, delay: i * 0.15 }}
              />
            </div>
            <div className="text-[8px] text-white/30">{w}%</div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="flex gap-2 h-10">
          {[40, 65, 30, 75, 55, 80, 45].map((h, i) => (
            <div key={i} className="flex-1 flex items-end">
              <motion.div
                className="w-full rounded-t-sm"
                style={{ background: `${primary}0.5)` }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ── ProjectCard ────────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isIndigo = project.accent === 'indigo';

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
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.22)] transition-colors duration-300 group-hover:border-white/16">
          {/* hover glow */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(109,94,248,0.14),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(122,215,255,0.10),transparent_28%)]" />

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden border-b border-white/8 bg-[#0C1118] rounded-t-[30px]">
            {project.thumbnail ? (
              <>
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1118]/55 via-[#0C1118]/10 to-transparent" />
              </>
            ) : (
              <AnimatedMockup project={project} />
            )}
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <div className="rounded-full border border-white/12 bg-[#0B0F16]/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/60 backdrop-blur-xl">
                {project.industry}
              </div>
              <div className="rounded-full border border-white/10 bg-[#0B0F16]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cyan-100/65 backdrop-blur-xl">
                {project.type}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="relative z-10 flex flex-1 flex-col p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl">
                {project.icon}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/42">
                {project.subtitle}
              </div>
              <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.04em] text-white">
                {project.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] uppercase tracking-[0.14em] text-white/68"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-white/62">{project.description}</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
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

            <div className="mt-6">
              <div
                className={[
                  'inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300',
                  isIndigo
                    ? 'text-indigo-300/70 group-hover:text-indigo-200'
                    : 'text-cyan-200/70 group-hover:text-white',
                ].join(' ')}
              >
                View Project
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
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
            Real-world applications of Cognexon's engineering capability across
            healthcare, commerce, enterprise systems, automation, and mobile platforms.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link to="/projects">
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group inline-flex items-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 py-3.5 text-sm font-semibold text-white cursor-pointer"
            >
              <span>View All Projects</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.div>
          </Link>
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