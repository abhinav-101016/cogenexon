import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Product = {
  id: string;
  name: string;
  eyebrow: string;
  badge: string;
  headline: string;
  description: string;
  points: string[];
  metrics: { value: string; label: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
  accent: 'indigo' | 'cyan';
};

const products: Product[] = [
  {
    id: 'sprintern',
    name: 'Sprintern',
    eyebrow: 'Internship-Style Learning Platform',
    badge: 'Education Product',
    headline: 'A premium learning ecosystem designed to accelerate engineering careers in just 28 days.',
    description:
      'Sprintern blends structured engineering education, real startup-style project execution, and guided mentorship into a short-format experience built for outcomes. It is designed for students who need proof of skill, not just passive content.',
    points: [
      '28-day guided engineering tracks',
      'Real project-based internship-style workflow',
      'Global certification and mentorship-led learning',
      'Built for scale across multiple engineering domains',
    ],
    metrics: [
      { value: '5000+', label: 'Students Reached' },
      { value: '28 Days', label: 'Program Duration' },
      { value: '10+', label: 'Project Tracks' },
    ],
    ctaPrimary: 'Explore Sprintern',
    ctaSecondary: 'View Product Story',
    accent: 'indigo',
  },
  {
    id: 'aavaranai',
    name: 'AavaranAI',
    eyebrow: 'AI Imaging for Fashion Commerce',
    badge: 'AI Product',
    headline: 'Studio-quality catalogue and ad generation built for modern fashion brands at scale.',
    description:
      'AavaranAI helps fashion businesses generate catalogue imagery, virtual try-on results, and marketing creatives without traditional photoshoots, enabling faster launches, lower costs, and highly scalable visual operations.',
    points: [
      'Bulk catalogue generation workflows',
      'AI-powered virtual try-on',
      'Instant ad creative generation for social platforms',
      'Usage-based imaging system for fashion commerce',
    ],
    metrics: [
      { value: '90%', label: 'Cost Reduction Potential' },
      { value: 'Bulk', label: 'Generation Ready' },
      { value: '7 Days', label: 'Free Trial Flow' },
    ],
    ctaPrimary: 'Explore AavaranAI',
    ctaSecondary: 'See AI Workflow',
    accent: 'cyan',
  },
];

function ProductTabs({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      {products.map((product) => {
        const active = product.id === activeId;

        return (
          <button
            key={product.id}
            type="button"
            onClick={() => onChange(product.id)}
            className={[
              'group relative overflow-hidden rounded-2xl border px-4 py-3 text-left backdrop-blur-xl transition-all duration-300',
              active
                ? 'border-white/14 bg-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,0.18)]'
                : 'border-white/8 bg-white/[0.03] hover:border-white/12 hover:bg-white/[0.05]',
            ].join(' ')}
          >
            <div
              className={[
                'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300',
                active ? 'opacity-100' : 'group-hover:opacity-100',
              ].join(' ')}
              style={{
                background:
                  product.accent === 'indigo'
                    ? 'radial-gradient(circle at 20% 50%, rgba(109,94,248,0.18), transparent 38%)'
                    : 'radial-gradient(circle at 20% 50%, rgba(122,215,255,0.18), transparent 38%)',
              }}
            />

            <div className="relative flex items-center gap-3">
              <div
                className={[
                  'relative flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-semibold tracking-[0.14em]',
                  active
                    ? 'border-white/14 bg-white/[0.08] text-white'
                    : 'border-white/10 bg-white/[0.04] text-white/72',
                ].join(' ')}
              >
                {product.name.slice(0, 1)}
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  {product.badge}
                </div>
                <div className="mt-1 text-sm font-semibold text-white">
                  {product.name}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function ProductVisual({ product }: { product: Product }) {
  const isSprintern = product.id === 'sprintern';

  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#0C1118]/90 md:h-[420px]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: isSprintern
            ? 'radial-gradient(circle at 18% 22%, rgba(109,94,248,0.22), transparent 28%), radial-gradient(circle at 80% 70%, rgba(122,215,255,0.08), transparent 28%)'
            : 'radial-gradient(circle at 24% 24%, rgba(122,215,255,0.18), transparent 28%), radial-gradient(circle at 76% 68%, rgba(109,94,248,0.10), transparent 28%)',
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, scale: 0.985, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.985, y: -10 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {isSprintern ? <SprinternScene /> : <AavaranScene />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SprinternScene() {
  const steps = ['Enroll', 'Lectures', 'Project', 'Review', 'Certificate'];

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[8%] top-[14%] rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
          Student Flow
        </div>
        <div className="mt-2 text-sm font-semibold text-white">28-Day Career Sprint</div>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[16%] w-[180px] rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
          Mentorship
        </div>
        <div className="mt-2 text-sm leading-6 text-white/78">
          1-on-1 guidance with industry-focused execution support.
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-[55%] w-[86%] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
              Learning Architecture
            </div>
            <div className="mt-2 text-base font-semibold text-white md:text-lg">
              Guided internship-style progression
            </div>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-cyan-200/62">
            28 Days
          </div>
        </div>

        <div className="relative mt-6">
          <div className="absolute left-0 right-0 top-[14px] h-px bg-gradient-to-r from-indigo-400/30 via-cyan-300/24 to-indigo-300/20" />

          <div className="relative grid grid-cols-5 gap-2">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.08 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                <motion.div
                  className="mx-auto mb-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/12 bg-[#0D121A]"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(109,94,248,0)',
                      '0 0 18px rgba(109,94,248,0.28)',
                      '0 0 0 rgba(109,94,248,0)',
                    ],
                  }}
                  transition={{
                    duration: 2.8,
                    delay: index * 0.18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="h-2 w-2 rounded-full bg-white" />
                </motion.div>
                <div className="text-[10px] uppercase tracking-[0.14em] text-white/55 md:text-[11px]">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-[10%] left-[10%] rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl"
        animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/42">
          Outcomes
        </div>
        <div className="mt-2 text-sm font-semibold text-white">Skills → Project → Proof</div>
      </motion.div>
    </div>
  );
}

function AavaranScene() {
  const cards = ['AI Try-On', 'Catalogue', 'Ad Generator'];

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-[7%] top-[13%] h-[220px] w-[140px] rounded-[26px] border border-white/12 bg-gradient-to-b from-white/[0.10] to-white/[0.04] p-3 backdrop-blur-2xl md:h-[260px] md:w-[170px]"
        animate={{ y: [0, -6, 0], rotate: [0, -1.4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full rounded-[18px] bg-[linear-gradient(180deg,rgba(122,215,255,0.16),rgba(255,255,255,0.03))] p-3">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
            AI Model
          </div>
          <div className="mt-3 h-[70%] rounded-[16px] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.20),rgba(122,215,255,0.07),rgba(10,14,18,0.86))]" />
          <div className="mt-3 h-2 rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-[52%] z-10 h-[240px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-white/12 bg-gradient-to-b from-white/[0.10] to-white/[0.04] p-3 backdrop-blur-2xl md:h-[290px] md:w-[210px]"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,rgba(122,215,255,0.12),rgba(109,94,248,0.06),rgba(10,14,18,0.82))] p-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
            Generated Output
          </div>
          <div className="mt-4 h-[68%] rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_50%_24%,rgba(255,255,255,0.24),rgba(122,215,255,0.08),rgba(10,14,18,0.9))]" />
          <div className="mt-4 flex gap-2">
            <div className="h-2 flex-1 rounded-full bg-white/10" />
            <div className="h-2 w-14 rounded-full bg-cyan-200/20" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[7%] top-[19%] h-[220px] w-[140px] rounded-[26px] border border-white/12 bg-gradient-to-b from-white/[0.10] to-white/[0.04] p-3 backdrop-blur-2xl md:h-[260px] md:w-[170px]"
        animate={{ y: [0, 7, 0], rotate: [0, 1.4, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full rounded-[18px] bg-[linear-gradient(180deg,rgba(109,94,248,0.12),rgba(255,255,255,0.03))] p-3">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/42">
            Ad Creative
          </div>
          <div className="mt-3 h-[70%] rounded-[16px] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.20),rgba(109,94,248,0.08),rgba(10,14,18,0.86))]" />
          <div className="mt-3 h-2 rounded-full bg-white/10" />
          <div className="mt-2 h-2 w-2/3 rounded-full bg-white/10" />
        </div>
      </motion.div>

      <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 gap-2">
        {cards.map((card, index) => (
          <motion.div
            key={card}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1 + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-white/66 backdrop-blur-xl md:text-[11px]"
          >
            {card}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductDetails({ product }: { product: Product }) {
  const accentStyles = useMemo(() => {
    return product.accent === 'indigo'
      ? {
          glow: 'radial-gradient(circle at 20% 20%, rgba(109,94,248,0.16), transparent 30%)',
          badge: 'text-indigo-100',
          metricGlow: 'shadow-[0_0_28px_rgba(109,94,248,0.16)]',
        }
      : {
          glow: 'radial-gradient(circle at 20% 20%, rgba(122,215,255,0.16), transparent 30%)',
          badge: 'text-cyan-100',
          metricGlow: 'shadow-[0_0_28px_rgba(122,215,255,0.14)]',
        };
  }, [product.accent]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-6 md:p-8 backdrop-blur-2xl"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{ background: accentStyles.glow }}
        />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-white/52">
              {product.eyebrow}
            </div>
            <div
              className={`rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] ${accentStyles.badge}`}
            >
              {product.badge}
            </div>
          </div>

          <h3 className="mt-5 max-w-2xl text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">
            {product.headline}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            {product.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {product.points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/76"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {product.metrics.map((metric) => (
              <div
                key={metric.label}
                className={`rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl ${accentStyles.metricGlow}`}
              >
                <div className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {metric.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/45">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group relative inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 py-3.5 text-sm font-semibold text-white"
            >
              <span className="relative">{product.ctaPrimary}</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>

            <motion.a
              href="#case-studies"
              whileHover={{ y: -1, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-white/82 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              {product.ctaSecondary}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductsShowcase() {
  const [activeId, setActiveId] = useState(products[0].id);
  const activeProduct =
    products.find((product) => product.id === activeId) ?? products[0];

  return (
    <section
      id="products"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[16%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
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
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_14px_rgba(109,94,248,0.7)]" />
            Products Built by Cognexon
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Real products that reflect our
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}execution DNA
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            We do not only build for clients. Cognexon also conceives, designs,
            and launches its own digital products—giving us direct experience in
            product strategy, user growth, operations, and long-term iteration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <ProductTabs activeId={activeId} onChange={setActiveId} />
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductVisual product={activeProduct} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductDetails product={activeProduct} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}