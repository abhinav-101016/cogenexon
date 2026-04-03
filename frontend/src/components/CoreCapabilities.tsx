"use client";

import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from 'framer-motion';
import { MotionValue } from 'framer-motion';

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

type AnimatedCardProps = {
  index: number;
  item: Capability;
  totalCards: number;
  cardsOverallProgress: MotionValue<number>;
  isActive: boolean;
};

const AnimatedCard = ({ index, item, totalCards, cardsOverallProgress, isActive }: AnimatedCardProps) => {
  const [viewportHeight, setViewportHeight] = useState(1000);
  
  useEffect(() => {
    setViewportHeight(window.innerHeight);
    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const Y_OFFSET_PER_CARD_IN_DECK = 8;
  const INITIAL_SCALE = 1;
  const EXIT_SCALE = 0.7;
  const PROGRESS_PER_CARD = 1 / totalCards;

  const cardSegmentStart = index * PROGRESS_PER_CARD; // Start a bit earlier for smoother entry
  const cardSegmentEnd = (index + 1) * PROGRESS_PER_CARD;

  const y = useTransform(
    cardsOverallProgress,
    [cardSegmentStart, cardSegmentEnd],
    [(index - 3) * Y_OFFSET_PER_CARD_IN_DECK, -viewportHeight * 0.85],
    { clamp: true }
  );

  const opacityStartFade = cardSegmentStart + PROGRESS_PER_CARD * 0.2;
  const opacityEndFade = cardSegmentEnd - PROGRESS_PER_CARD * 0.1;
    const opacityMidFade = cardSegmentStart + PROGRESS_PER_CARD * 0.5;
  const opacity = useTransform(
    cardsOverallProgress,
    [opacityStartFade, opacityMidFade, opacityEndFade],
    [1, 1, 0],
    { clamp: true }
  );

  const scale = useTransform(
    cardsOverallProgress,
    [cardSegmentStart, cardSegmentEnd],
    [INITIAL_SCALE, EXIT_SCALE],
    { clamp: true }
  );

  // Individual card 3D hover effect
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 160, damping: 18, mass: 0.4 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [6, -6]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springConfig
  );
  const glowX = useTransform(mouseX, [-0.5, 0.5], ['35%', '65%']);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ['35%', '65%']);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Don't render if not active
  if (!isActive) return null;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="absolute w-[320px] h-[420px] md:w-[360px] md:h-[440px] max-w-sm mx-auto cursor-pointer"
      style={{
        y,
        scale,
        zIndex: totalCards - index,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        opacity,
      }}
    >
      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-black/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/20">
        {/* Top edge shimmer */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/22 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Hover glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at center, rgba(109,94,248,0.15), transparent 40%), radial-gradient(circle at 70% 30%, rgba(122,215,255,0.12), transparent 35%)',
          }}
        />

        {/* Cursor-follow highlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.08), transparent 30%)`
            ),
          }}
        />

        {/* Background neural dot */}
        <motion.div
          animate={{
            scale: [1, 1.14, 1],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 3.6 + index * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"
        />

        {/* Tiny signal lines */}
        <div className="pointer-events-none absolute right-4 top-4 opacity-30">
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

        <div style={{ transform: 'translateZ(28px)' }} className="relative z-10 p-6 md:p-7 flex flex-col h-full">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
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

          <p className="mt-3 text-sm leading-7 text-white/70 md:text-[15px] flex-grow">
            {item.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {item.points.map((point) => (
              <div
                key={point}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function CoreCapabilities() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const numCards = capabilities.length;
  const [isMobile, setIsMobile] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);
  
  // Define scroll height allocations (in Viewport Height units)
  const VH_BEFORE_CARDS_START = 40;
  const VH_PER_CARD_ANIMATION = 100;
  const VH_FOR_ALL_CARDS_ANIMATION = numCards * VH_PER_CARD_ANIMATION;
  const VH_AFTER_CARDS_END = 50;

  const totalSectionHeightVh = VH_BEFORE_CARDS_START + VH_FOR_ALL_CARDS_ANIMATION + VH_AFTER_CARDS_END;
  const sectionHeightStyle = `${totalSectionHeightVh}vh`;

  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate progress points for different animation phases
  const cardAnimationStartPoint = VH_BEFORE_CARDS_START / totalSectionHeightVh;
  const cardAnimationEndPoint = (VH_BEFORE_CARDS_START + VH_FOR_ALL_CARDS_ANIMATION) / totalSectionHeightVh;
  
  const headingDisappearStartPoint = cardAnimationEndPoint;
  const headingDisappearEndPoint = (VH_BEFORE_CARDS_START + VH_FOR_ALL_CARDS_ANIMATION + (VH_AFTER_CARDS_END * 0.75)) / totalSectionHeightVh;

  // Heading Opacity: Fade in -> Stay Visible -> Fade out
  const headingOpacity = useTransform(
    containerScrollYProgress,
    [0, cardAnimationStartPoint * 0.1, headingDisappearStartPoint, headingDisappearEndPoint],
    [0, 1, 1, 0],
    { clamp: true }
  );

  const headingY = useTransform(
    containerScrollYProgress,
    [0, cardAnimationStartPoint],
    [100, -100],
    { clamp: true }
  );

  // cardsOverallProgress: A MotionValue from 0 to 1 representing progress through card animation
  const rawCardsProgress = useTransform(
    containerScrollYProgress,
    [cardAnimationStartPoint, cardAnimationEndPoint],
    [0, 1],
    { clamp: true }
  );

  // Add spring for smooth scrolling
  const cardsOverallProgress = useSpring(rawCardsProgress, {
    stiffness: 40,
    damping: 20,
    mass: 1
  });

  // Track when section is active (between 0.05 and 0.95 progress)
  useMotionValueEvent(containerScrollYProgress, "change", (latest) => {
    const isActive = latest > 0.05 && latest < 0.95;
    setIsSectionActive(isActive);
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Mobile fallback - grid layout
  if (isMobile) {
    return (
      <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
        {/* Ambient section glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute right-[8%] bottom-[12%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center mb-12"
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

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-blue-600/20 to-black/80 backdrop-blur-2xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-3xl">
                    <span className="relative">{item.icon}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[11px] uppercase tracking-[0.16em] text-white/70"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Scroll-Synced Stack Cards Animation
  return (
    <>
      {/* Spacer to ensure section has proper scroll height */}
      <section
        ref={containerRef}
        className="relative bg-transparent"
        style={{ height: sectionHeightStyle }}
      />

      {/* Fixed elements that only show when section is active */}
      {isSectionActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            pointerEvents: 'auto',
          }}
        >
          {/* Sticky Container for the Centered Heading */}
          <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none pt-40" style={{ zIndex: 10 }}>
            <motion.div
              ref={headingRef}
              className="container mx-auto w-full text-center px-4"
              style={{
                opacity: headingOpacity,
                y: headingY,
              }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
                Core Capabilities
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.045em] text-white">
                Engineering capability across
                <br />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
                  product, AI, and scale
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
                From AI-native applications to enterprise-grade software systems,
                Cognexon builds digital products with the precision, resilience, and
                design quality modern businesses demand.
              </p>
            </motion.div>
          </div>

          {/* Cards Animation Stage */}
          <div
            className="fixed w-full h-screen flex items-center justify-center pointer-events-none"
            style={{
              zIndex: 20,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {capabilities.map((item, index) => (
              <AnimatedCard
                key={item.title}
                index={index}
                item={item}
                totalCards={numCards}
                cardsOverallProgress={cardsOverallProgress}
                isActive={isSectionActive}
              />
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}