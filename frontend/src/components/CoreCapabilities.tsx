import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

type Capability = {
  icon: string;
  title: string;
  description: string;
  points: string[];
};

const capabilities: Capability[] = [
  {
    icon: '🚀',
    title: 'SaaS Product Development',
    description:
      'End-to-end product engineering from concept to scalable SaaS platforms built for long-term growth.',
    points: ['Rapid MVP Delivery', 'Scalable Microservices'],
  },
  {
    icon: '🧠',
    title: 'AI-Powered Solutions',
    description:
      'Intelligent systems, automation workflows, and LLM integrations designed to unlock measurable business value.',
    points: ['LLM Integration', 'Intelligent Automation'],
  },
  {
    icon: '🏢',
    title: 'Custom Enterprise Software',
    description:
      'Tailored digital platforms that modernize operations, streamline workflows, and support complex business logic.',
    points: ['Workflow Optimization', 'Legacy Modernization'],
  },
  {
    icon: '🌐',
    title: 'Web Architecture',
    description:
      'Scalable, high-performance web ecosystems engineered for reliability, speed, and millions of users.',
    points: ['SaaS Platforms', 'Cloud Portals'],
  },
  {
    icon: '📱',
    title: 'Mobile Engineering',
    description:
      'Native and cross-platform mobile experiences that feel fluid, polished, and production-ready from day one.',
    points: ['iOS & Android', 'Flutter / React Native'],
  },
  {
    icon: '✨',
    title: 'UI/UX Design',
    description:
      'Premium interface systems with immersive motion, clean usability, and product-first design thinking.',
    points: ['Design Systems', 'Interactive Prototypes'],
  },
];

function CapabilityCard({
  item,
  index,
}: {
  item: Capability;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 160, damping: 18, mass: 0.4 };

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    springConfig
  );

  const glowX = useTransform(mouseX, [-0.5, 0.5], ['35%', '65%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['35%', '65%']);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = (ref.current as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative h-full will-change-transform"
    >
      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-6 md:p-7 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-white/16">
        {/* Top edge shimmer */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Hover glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at center, rgba(109,94,248,0.12), transparent 38%), radial-gradient(circle at 70% 30%, rgba(122,215,255,0.10), transparent 32%)',
          }}
        />

        {/* Cursor-follow highlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.10), transparent 28%)`
            ),
          }}
        />

        {/* Background neural dot */}
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 3.6 + index * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"
        />

        {/* Tiny signal lines */}
        <div className="pointer-events-none absolute right-4 top-4 opacity-40">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
            <path
              d="M10 48C25 30 40 24 48 24C62 24 72 34 86 18"
              stroke="rgba(122,215,255,0.18)"
              strokeWidth="1"
            />
            <path
              d="M14 70C26 62 34 56 46 56C62 56 72 62 86 48"
              stroke="rgba(109,94,248,0.16)"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div style={{ transform: 'translateZ(28px)' }} className="relative z-10">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_42%)]" />
              <span className="relative">{item.icon}</span>
            </div>

            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.12,
              }}
              className="mt-2 text-sm text-cyan-200/55"
            >
              →
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold tracking-[-0.03em] text-white md:text-[1.35rem]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-white/62 md:text-[15px]">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.points.map((point) => (
              <div
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoreCapabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Ambient section glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
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
            Core Capabilities
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Engineering capability across
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}product, AI, and scale
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            From AI-native applications to enterprise-grade software systems,
            Cognexon builds digital products with the precision, resilience, and
            design quality modern businesses demand.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}