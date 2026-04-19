import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'lunemart',
    eyebrow: 'E-commerce Marketplace',
    name: 'LuneMart',
    tagline: 'Full-scale multi-category marketplace connecting users with verified local and global suppliers.',
    tags: ['React', 'Node.js', 'Razorpay', 'GPS'],
    category: 'E-commerce',
    accent: 'cyan',
    duration: '5 months',
    year: '2024',
    url: 'https://www.lunemart.com/',
  },
  {
    id: 'mediqliq',
    eyebrow: 'Hospital ERP / HIMS',
    name: 'Mediqliq',
    tagline: 'Comprehensive hospital management system digitizing clinical, admin and financial workflows.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    category: 'Healthcare',
    accent: 'indigo',
    duration: '6 months',
    year: '2024',
    url: 'https://hospital-admin-eight.vercel.app/',
  },
  {
    id: 'proplink',
    eyebrow: 'Real Estate SaaS',
    name: 'PropLink',
    tagline: 'Cloud-based real estate platform centralizing listings, leads, and client relationship workflows.',
    tags: ['Next.js', 'CRM', 'Google Maps API'],
    category: 'PropTech',
    accent: 'cyan',
    duration: '4 months',
    year: '2024',
    url: null,
  },
  {
    id: 'aadyaplus',
    eyebrow: 'Healthcare Platform',
    name: 'AadyaPlus',
    tagline: 'Unified digital healthcare ecosystem connecting patients with doctors, labs and pharmacies.',
    tags: ['React', 'WebRTC', 'Node.js', 'SMS'],
    category: 'Healthcare',
    accent: 'indigo',
    duration: '5 months',
    year: '2024',
    url: 'https://aadya-frontend.vercel.app/',
  },
  {
    id: 'orivotech',
    eyebrow: 'Digital Marketing SaaS',
    name: 'Orivo Tech',
    tagline: 'Performance-driven platform helping small businesses build SEO presence and generate leads fast.',
    tags: ['React', 'Google Maps API', 'SEO', 'Analytics'],
    category: 'MarTech',
    accent: 'cyan',
    duration: '3 months',
    year: '2023',
    url: 'https://www.orivotech.in/',
  },
  {
    id: 'ietlaa',
    eyebrow: 'Alumni Network',
    name: 'IETLAA',
    tagline: 'Dedicated alumni platform for IET Lucknow — connecting graduates across batches and branches.',
    tags: ['React', 'Node.js', 'MongoDB', 'CSV Import'],
    category: 'Education',
    accent: 'indigo',
    duration: '2.5 months',
    year: '2023',
    url: 'https://alumni2-phi.vercel.app/',
  },
  {
    id: 'gptool',
    eyebrow: 'Industrial E-commerce',
    name: 'GPTool',
    tagline: 'B2B/B2C platform for hardware tools and industrial machinery with verified manufacturer partnerships.',
    tags: ['React', 'Node.js', 'Logistics API'],
    category: 'E-commerce',
    accent: 'cyan',
    duration: '3.5 months',
    year: '2023',
    url: 'http://www.dcatool.in/',
  },
  {
    id: 'newsforge',
    eyebrow: 'AI News Platform',
    name: 'News Forge',
    tagline: 'AI-powered news publishing platform combining automated content pipelines with editorial control.',
    tags: ['React', 'Gemini API', 'CMS', 'Scraper'],
    category: 'AI / Media',
    accent: 'indigo',
    duration: '3 months',
    year: '2023',
    url: 'https://news-forge-lemon.vercel.app/',
  },
  {
    id: 'cabit',
    eyebrow: 'Travel Tech',
    name: 'CABIT',
    tagline: 'Smart travel platform integrating trip planning, verified cab booking and women-safety features.',
    tags: ['React Native', 'Maps API', 'WebRTC', 'Node.js'],
    category: 'Travel Tech',
    accent: 'cyan',
    duration: '4 months',
    year: '2022',
    url: 'https://cabit.co.in',
  },
  {
    id: 'esct',
    eyebrow: 'Community Finance',
    name: 'ESCT',
    tagline: 'Structured financial support platform for government employees with multi-level claim verification.',
    tags: ['React', 'EHRMS', 'Payment Gateway', 'Admin'],
    category: 'FinTech',
    accent: 'indigo',
    duration: '3.5 months',
    year: '2022',
    url: 'https://esct.co.in',
  },
];

const categories = ['All', 'E-commerce', 'Healthcare', 'AI / Media', 'Travel Tech', 'FinTech', 'Education', 'PropTech', 'MarTech'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-[8%] h-72 w-72 rounded-full bg-indigo-500/6 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-64 w-64 rounded-full bg-cyan-400/6 blur-3xl" />
        <div className="absolute left-1/2 top-[40%] h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/4 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
            Work We've Shipped
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Projects built with
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent"> precision and intent</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 md:text-[15px]">
            Every engagement here represents a real problem solved — from hospital ERPs to AI newsrooms.
            These are the platforms we've designed, engineered, and launched end-to-end.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={[
                'rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.18em] font-medium transition-all duration-300 backdrop-blur-xl',
                activeCategory === cat
                  ? 'border-white/18 bg-white/[0.09] text-white shadow-[0_0_20px_rgba(122,215,255,0.10)]'
                  : 'border-white/8 bg-white/[0.03] text-white/50 hover:border-white/14 hover:text-white/80',
              ].join(' ')}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                hovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl md:grid-cols-4 md:p-8"
        >
          {[
            { value: '10+', label: 'Projects Shipped' },
            { value: '8', label: 'Industry Verticals' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '3.5mo', label: 'Avg. Delivery Time' },
          ].map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">{stat.value}</div>
              <div className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-white/42">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, hovered, onHover, onLeave }) {
  const isIndigo = project.accent === 'indigo';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <div className={[
          'relative h-full overflow-hidden rounded-[26px] border transition-all duration-500',
          hovered
            ? 'border-white/16 bg-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.3)]'
            : 'border-white/8 bg-white/[0.03]',
        ].join(' ')}>

          {/* Accent glow on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: isIndigo
                ? 'radial-gradient(circle at 15% 15%, rgba(109,94,248,0.18), transparent 40%)'
                : 'radial-gradient(circle at 15% 15%, rgba(122,215,255,0.16), transparent 40%)',
            }}
          />

          {/* Top shimmer line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />

          {/* Screenshot collage mockup */}
          <div className="relative h-[200px] overflow-hidden border-b border-white/8 bg-[#0C1118]">
            <ScreenshotCollage project={project} />

            {/* Category badge */}
            <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-[#0B0F16]/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60 backdrop-blur-xl">
              {project.category}
            </div>

            {/* Year */}
            <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#0B0F16]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/45 backdrop-blur-xl">
              {project.year}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-2">{project.eyebrow}</div>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">{project.name}</h3>
            <p className="mt-2.5 text-[13px] leading-6 text-white/58">{project.tagline}</p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/55"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] text-white/38">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                {project.duration}
              </div>
              <div className={[
                'flex items-center gap-1.5 text-[12px] font-medium transition-all duration-300',
                isIndigo
                  ? 'text-indigo-300/70 group-hover:text-indigo-200'
                  : 'text-cyan-300/70 group-hover:text-cyan-200',
              ].join(' ')}>
                View Project
                <motion.span
                  animate={hovered ? { x: 3 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Animated screenshot collage for each project card
function ScreenshotCollage({ project }) {
  const isIndigo = project.accent === 'indigo';
  const primary = isIndigo ? 'rgba(109,94,248,' : 'rgba(122,215,255,';

  // Each project gets a unique abstract UI mockup pattern
  const patterns = {
    lunemart: <EcommercePattern primary={primary} />,
    mediqliq: <DashboardPattern primary={primary} />,
    proplink: <ListingPattern primary={primary} />,
    aadyaplus: <HealthPattern primary={primary} />,
    orivotech: <MarketingPattern primary={primary} />,
    ietlaa: <DirectoryPattern primary={primary} />,
    gptool: <CatalogPattern primary={primary} />,
    newsforge: <NewsPattern primary={primary} />,
    cabit: <TravelPattern primary={primary} />,
    esct: <FinancePattern primary={primary} />,
  };

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 60% 40%, ${primary}0.12), transparent 55%)` }}
      />
      {patterns[project.id] || <DefaultPattern primary={primary} />}
    </div>
  );
}

// --- Collage UI Patterns ---

function EcommercePattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-4 w-[140px] rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="h-16 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.03] mb-2" />
        <div className="h-2 w-3/4 rounded bg-white/15 mb-1.5" />
        <div className="h-2 w-1/2 rounded bg-white/10 mb-2" />
        <div className={`h-6 rounded-lg text-center text-[9px] flex items-center justify-center font-medium`}
          style={{ background: `${primary}0.25)`, color: `${primary}0.9)` }}>
          Add to Cart
        </div>
      </motion.div>
      <motion.div className="absolute right-4 top-6 w-[110px] rounded-xl border border-white/10 bg-white/[0.05] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="text-[8px] uppercase tracking-widest text-white/40 mb-2">Flash Sale</div>
        <div className="h-2 w-full rounded bg-white/15 mb-1" />
        <div className="h-2 w-2/3 rounded bg-white/10 mb-2" />
        <div className="flex gap-1">
          {[1,2,3].map(i => <div key={i} className="h-8 flex-1 rounded-lg bg-white/[0.06] border border-white/8" />)}
        </div>
      </motion.div>
      <motion.div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[180px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 3, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="flex justify-between items-center mb-2">
          <div className="text-[9px] text-white/40">Order Tracking</div>
          <div className="text-[9px] rounded-full px-2 py-0.5" style={{ background: `${primary}0.2)`, color: `${primary}0.8)` }}>Live</div>
        </div>
        <div className="flex gap-1 items-center">
          {['•', '—', '•', '—', '•'].map((s, i) => (
            <span key={i} className="text-xs" style={{ color: i < 3 ? `${primary}0.7)` : 'rgba(255,255,255,0.2)' }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function DashboardPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[160px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="text-[8px] uppercase tracking-widest text-white/38 mb-2">Patient Records</div>
        {[85, 60, 75, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-2 mb-1.5">
            <div className="h-1.5 rounded-full flex-1 bg-white/8">
              <motion.div className="h-full rounded-full" style={{ background: `${primary}0.6)`, width: `${w}%` }}
                initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ duration: 1.2, delay: i * 0.15 }} />
            </div>
            <div className="text-[8px] text-white/30">{w}%</div>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute right-3 top-4 w-[100px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}>
        {[{ l: 'OPD', v: '124' }, { l: 'IPD', v: '38' }, { l: 'Lab', v: '67' }].map(s => (
          <div key={s.l} className="mb-2.5 last:mb-0">
            <div className="text-[8px] text-white/38">{s.l}</div>
            <div className="text-base font-semibold text-white">{s.v}</div>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
        <div className="flex gap-2">
          {[40, 65, 30, 75, 55, 80, 45].map((h, i) => (
            <div key={i} className="flex-1 flex items-end">
              <motion.div className="w-full rounded-t-sm" style={{ background: `${primary}0.5)` }}
                initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: i * 0.08 }} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ListingPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 right-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <div className="flex gap-3">
          <div className="h-16 w-16 flex-shrink-0 rounded-lg bg-white/8 border border-white/8" />
          <div className="flex-1">
            <div className="h-2 w-full rounded bg-white/15 mb-1.5" />
            <div className="h-2 w-3/4 rounded bg-white/10 mb-2" />
            <div className="flex gap-2">
              <span className="text-[9px] px-2 py-0.5 rounded-full" style={{ background: `${primary}0.18)`, color: `${primary}0.8)` }}>Available</span>
              <span className="text-[9px] px-2 py-0.5 rounded-full border border-white/10 text-white/40">3BHK</span>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div className="absolute bottom-4 left-4 w-[120px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">CRM Pipeline</div>
        {['New Lead', 'Contacted', 'Closed'].map((s, i) => (
          <div key={s} className="flex items-center gap-2 mb-1.5">
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: `${primary}${0.4 + i * 0.2})` }} />
            <div className="text-[9px] text-white/50">{s}</div>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute bottom-4 right-4 w-[100px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 3.6, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1">Market Trend</div>
        <div className="text-lg font-semibold text-white">↑ 12%</div>
        <div className="text-[8px] text-white/35">Price growth</div>
      </motion.div>
    </div>
  );
}

function HealthPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[130px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Book Appointment</div>
        <div className="grid grid-cols-3 gap-1 mb-2">
          {['Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
            <div key={d} className="rounded text-center py-1 text-[8px] text-white/40 border border-white/8">{d}</div>
          ))}
        </div>
        <div className="h-6 rounded-lg text-[9px] flex items-center justify-center" style={{ background: `${primary}0.2)`, color: `${primary}0.85)` }}>Confirm</div>
      </motion.div>
      <motion.div className="absolute right-3 top-3 w-[110px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 5, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="h-6 w-6 rounded-full bg-white/8" />
          <div>
            <div className="h-1.5 w-14 rounded bg-white/15" />
            <div className="h-1.5 w-10 rounded bg-white/8 mt-1" />
          </div>
        </div>
        <div className="text-[8px] text-white/38 mb-1">Prescription</div>
        {[1,2].map(i => <div key={i} className="h-1.5 w-full rounded bg-white/10 mb-1" />)}
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1.5">Video Consultation — Live</div>
        <div className="flex gap-2">
          <div className="flex-1 h-10 rounded-lg bg-white/[0.06] border border-white/8" />
          <div className="flex-1 h-10 rounded-lg bg-white/[0.04] border border-white/6" />
          <div className="flex flex-col gap-1 justify-center">
            {[1,2,3].map(i => <div key={i} className="h-2 w-2 rounded-full" style={{ background: `${primary}0.5)` }} />)}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MarketingPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[140px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">SEO Rankings</div>
        {[{ k: 'Local Search', v: '#1' }, { k: 'Maps', v: '#2' }, { k: 'Organic', v: '#4' }].map(r => (
          <div key={r.k} className="flex justify-between items-center mb-1.5">
            <span className="text-[9px] text-white/45">{r.k}</span>
            <span className="text-[9px] font-medium" style={{ color: `${primary}0.85)` }}>{r.v}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute right-3 top-4 w-[110px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1.5">Leads This Month</div>
        <div className="text-2xl font-semibold text-white">47</div>
        <div className="text-[9px]" style={{ color: `${primary}0.7)` }}>↑ 3 Free</div>
        <div className="mt-2 h-1.5 rounded-full bg-white/8">
          <motion.div className="h-full rounded-full" style={{ background: `${primary}0.6)` }}
            initial={{ width: 0 }} animate={{ width: '70%' }} transition={{ duration: 1.5 }} />
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 3.8, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Platform Presence</div>
        <div className="flex gap-2">
          {['Google Maps', 'Instagram', 'Facebook'].map(p => (
            <div key={p} className="flex-1 rounded-lg border border-white/8 bg-white/[0.04] py-1.5 text-center">
              <div className="h-2 w-2 rounded-full mx-auto mb-1" style={{ background: `${primary}0.6)` }} />
              <div className="text-[7px] text-white/35">{p}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function DirectoryPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 right-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Alumni Directory</div>
        {[{ name: 'Rahul S.', batch: '2018', co: 'Google' }, { name: 'Priya M.', batch: '2020', co: 'Microsoft' }].map(a => (
          <div key={a.name} className="flex items-center gap-2 mb-2">
            <div className="h-7 w-7 rounded-full bg-white/8 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-[9px] text-white/70 font-medium">{a.name}</div>
              <div className="text-[8px] text-white/35">{a.co} · Batch {a.batch}</div>
            </div>
            <div className="h-5 w-5 rounded-full border border-white/10 flex items-center justify-center text-[8px]" style={{ color: `${primary}0.6)` }}>→</div>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute bottom-4 left-4 w-[130px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">By Branch</div>
        {['CSE', 'ECE', 'ME', 'Civil'].map((b, i) => (
          <div key={b} className="flex items-center gap-2 mb-1.5">
            <div className="h-1.5 rounded-full flex-1 bg-white/8">
              <div className="h-full rounded-full" style={{ background: `${primary}0.5)`, width: `${70 - i * 15}%` }} />
            </div>
            <div className="text-[8px] text-white/35 w-6">{b}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function CatalogPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[160px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Product Catalog</div>
        <div className="grid grid-cols-2 gap-1.5">
          {[1,2,3,4].map(i => (
            <div key={i} className="rounded-lg border border-white/8 bg-white/[0.04] p-1.5">
              <div className="h-8 rounded-md bg-white/8 mb-1" />
              <div className="h-1.5 w-full rounded bg-white/12 mb-1" />
              <div className="h-1.5 w-2/3 rounded bg-white/8" />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="absolute right-3 top-4 w-[100px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1.5">Spec Sheet</div>
        {['Voltage', 'Weight', 'Brand', 'Warranty'].map(s => (
          <div key={s} className="flex justify-between mb-1">
            <span className="text-[8px] text-white/35">{s}</span>
            <div className="h-1.5 w-8 rounded bg-white/15" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function NewsPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 right-4 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <div className="flex items-center justify-between mb-2">
          <div className="text-[8px] text-white/38">AI News Pipeline</div>
          <div className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: `${primary}0.18)`, color: `${primary}0.8)` }}>Live</div>
        </div>
        <div className="flex gap-2 items-center text-[9px] text-white/40 mb-3">
          <span>Scrape</span><span style={{ color: `${primary}0.5)` }}>→</span>
          <span>Gemini</span><span style={{ color: `${primary}0.5)` }}>→</span>
          <span>Review</span><span style={{ color: `${primary}0.5)` }}>→</span>
          <span>Publish</span>
        </div>
        {[1,2].map(i => (
          <div key={i} className="mb-2 last:mb-0">
            <div className="h-2 w-full rounded bg-white/12 mb-1" />
            <div className="h-1.5 w-3/4 rounded bg-white/8" />
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="flex gap-2">
          {['Tech & AI', 'Finance', 'Global', 'Sports'].map(cat => (
            <div key={cat} className="flex-1 text-center text-[8px] py-1.5 rounded-lg border border-white/8 text-white/40">{cat}</div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function TravelPattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[130px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Trip Planner</div>
        {['Day 1', 'Day 2', 'Day 3'].map((d, i) => (
          <div key={d} className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 rounded-full" style={{ background: `${primary}0.6)` }} />
            <div className="flex-1">
              <div className="h-1.5 rounded bg-white/15 mb-0.5" />
              <div className="h-1.5 w-2/3 rounded bg-white/8" />
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute right-3 top-3 w-[110px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 5, 0] }} transition={{ duration: 4.6, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1.5">Cab Booking</div>
        <div className="h-12 rounded-lg bg-white/[0.06] mb-2 flex items-center justify-center">
          <div className="text-xs text-white/20">Map</div>
        </div>
        <div className="text-[8px] text-white/38 mb-1">Driver Verified ✓</div>
        <div className="h-5 rounded-lg text-[8px] flex items-center justify-center" style={{ background: `${primary}0.2)`, color: `${primary}0.8)` }}>Book Now</div>
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="flex items-center justify-between">
          <div className="text-[8px] text-white/38">Safety — Trip Share</div>
          <div className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: `${primary}0.18)`, color: `${primary}0.8)` }}>Active</div>
        </div>
      </motion.div>
    </div>
  );
}

function FinancePattern({ primary }) {
  return (
    <div className="absolute inset-0 p-4">
      <motion.div className="absolute left-4 top-3 w-[140px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, -3, 0] }} transition={{ duration: 4.2, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-2">Member Claims</div>
        {[{ t: 'Retirement', s: 'Approved' }, { t: 'Death Service', s: 'Pending' }, { t: 'After Service', s: 'Review' }].map(c => (
          <div key={c.t} className="flex justify-between items-center mb-1.5">
            <span className="text-[8px] text-white/45">{c.t}</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded" style={{ background: `${primary}0.15)`, color: `${primary}0.75)` }}>{c.s}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className="absolute right-3 top-4 w-[110px] rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm"
        animate={{ y: [0, 4, 0] }} transition={{ duration: 4.8, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1">Fund Pool</div>
        <div className="text-lg font-semibold text-white">₹4.2L</div>
        <div className="text-[8px] text-white/35 mb-2">Collected</div>
        <div className="h-1.5 rounded-full bg-white/8">
          <motion.div className="h-full rounded-full" style={{ background: `${primary}0.55)` }}
            initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.5 }} />
        </div>
      </motion.div>
      <motion.div className="absolute bottom-3 left-4 right-4 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 backdrop-blur-sm"
        animate={{ y: [0, 2, 0] }} transition={{ duration: 5, repeat: Infinity }}>
        <div className="text-[8px] text-white/38 mb-1.5">Verification Steps</div>
        <div className="flex gap-1 items-center">
          {['EHRMS', '→', 'Committee', '→', 'Admin', '→', 'Payout'].map((s, i) => (
            <span key={i} className="text-[8px]" style={{ color: i % 2 === 0 ? `${primary}0.75)` : 'rgba(255,255,255,0.25)' }}>{s}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function DefaultPattern({ primary }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.05]" />
    </div>
  );
}