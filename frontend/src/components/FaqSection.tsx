import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'What types of products does Cognexon build?',
    answer:
      'Cognexon builds SaaS platforms, AI-powered applications, enterprise systems, custom internal tools, web platforms, and mobile products. Our work typically focuses on scalable software systems that require strong product thinking, modern engineering, and clean user experience.',
  },
  {
    question: 'Do you build AI products from scratch or only integrate AI into existing systems?',
    answer:
      'We do both. Cognexon can design and build AI-native products from the ground up, and we also integrate intelligent workflows, LLM features, automation systems, and decision-support capabilities into existing products and operational platforms.',
  },
  {
    question: 'Can you modernize an existing product or legacy system?',
    answer:
      'Yes. We work on modernization initiatives that involve redesigning outdated workflows, improving architecture, replacing fragile systems, optimizing performance, and preparing products for long-term scale and maintainability.',
  },
  {
    question: 'How do you scope a project?',
    answer:
      'Most engagements begin with discovery and blueprinting. We define goals, business context, technical requirements, feature priorities, architecture direction, and delivery structure before moving into design and engineering. This keeps execution faster and more predictable.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Yes. Cognexon supports clients after launch through monitoring, iteration, feature enhancement, optimization, bug resolution, infrastructure guidance, and long-term scaling support depending on the engagement model.',
  },
  {
    question: 'Can Cognexon build both customer-facing and internal enterprise systems?',
    answer:
      'Yes. We work across public-facing digital products, operational platforms, dashboards, AI-enabled workflows, and internal enterprise systems where reliability, security, and process efficiency matter.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      'That depends on project complexity, but early-stage projects and discovery engagements can usually begin faster than large enterprise transformations. The best way to start is with a strategy conversation so we can recommend the right engagement path.',
  },
];

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQ;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.72,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.035] backdrop-blur-2xl"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_22%,rgba(109,94,248,0.12),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(122,215,255,0.10),transparent_30%)]" />

      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6 md:py-6"
        aria-expanded={isOpen}
      >
        <span className="max-w-[90%] text-[15px] font-medium leading-7 text-white md:text-[16px]">
          {item.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-lg text-white/80"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="relative z-10 px-5 pb-5 md:px-6 md:pb-6">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
              <p className="max-w-3xl text-sm leading-7 text-white/62 md:text-[15px]">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute right-[6%] bottom-[10%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white/58 backdrop-blur-xl">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(122,215,255,0.7)]" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl">
            Practical answers before
            <span className="bg-gradient-to-r from-white via-cyan-100 to-indigo-200 bg-clip-text text-transparent">
              {' '}we start building
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-[15px]">
            Everything you need to know about how Cognexon works, what we build,
            and how we help teams move from idea to intelligent execution.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4 md:mt-14">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center text-sm text-white/62 backdrop-blur-xl md:px-6">
            Still have a specific question about your product, AI roadmap, or platform scope?{' '}
            <a
              href="#contact"
              className="font-medium text-white/86 transition-colors duration-300 hover:text-white"
            >
              Let’s talk.
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}