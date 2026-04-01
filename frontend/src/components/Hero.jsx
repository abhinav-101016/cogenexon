import React from 'react';
import { motion } from 'framer-motion';
import GridBackground from './GridBackground';
import FloatingCard from './FloatingCard';
import AnimatedCounter from './AnimatedCounter';

const SERVICES = [
  { icon: '⬡', label: 'AI Agents', description: 'Autonomous systems that think and act' },
  { icon: '◈', label: 'ML Pipelines', description: 'End-to-end model lifecycle management' },
  { icon: '◎', label: 'LLM Integration', description: 'Language models scaled to production' },
  { icon: '⊕', label: 'Data Intelligence', description: 'Insights extracted from your data' },
];

const TECHS = [
  'OpenAI','Anthropic','LangChain','HuggingFace',
  'AWS Bedrock','Azure AI','Vertex AI','PyTorch','TensorFlow','Pinecone',
];

const STATS = [
  { value: '150', suffix: '+', label: 'Projects Delivered' },
  { value: '40', suffix: '+', label: 'Enterprise Clients' },
  { value: '98', suffix: '%', label: 'Client Retention' },
  { value: '12', suffix: 'x', label: 'Average ROI' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">

      {/* Light Background */}
      <div className="absolute inset-0 bg-white" />

      {/* Soft Gradient Orbs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'rgba(99,102,241,0.12)',
          filter: 'blur(100px)',
          top: '-15%',
          left: '10%',
        }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: 'rgba(56,189,248,0.10)',
          filter: 'blur(100px)',
          bottom: '-10%',
          right: '5%',
        }}
      />

      <GridBackground />

      {/* Content */}
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-[1200px] mx-auto w-full text-center"
      >

        {/* Badge */}
        <motion.div {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 border border-indigo-200 bg-indigo-50"
        >
          <span className="text-xs text-indigo-600 font-medium">
            GenAI Platform · Early Access
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.2)}
          className="font-extrabold mb-6 leading-tight text-gray-900"
          style={{ fontSize: 'clamp(52px,7vw,96px)' }}
        >
          <motion.span
            className="block"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg,#6366f1,#38bdf8,#a78bfa)',
              backgroundSize: '300%',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Intelligence
          </motion.span>

          <span className="block">That Transforms</span>

          <span className="block text-gray-500">
            Your <span className="text-indigo-600">Enterprise</span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p {...fadeUp(0.3)}
          className="max-w-[650px] mx-auto text-gray-600 mb-12 text-lg"
        >
          Cogenexon builds AI systems that don’t just automate —
          <span className="text-gray-900 font-semibold"> they think, adapt, and scale</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(0.4)} className="flex justify-center gap-4 mb-16 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 rounded-xl text-white font-semibold"
            style={{
              background: 'linear-gradient(135deg,#6366f1,#7c6ff7)',
              boxShadow: '0 10px 25px rgba(99,102,241,0.3)',
            }}
          >
            Start Building
          </motion.button>

          <button className="px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-100">
            View Case Studies
          </button>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {SERVICES.map((s) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <FloatingCard {...s} />
            </motion.div>
          ))}
        </div>

        {/* Tech Scroll */}
        <div className="overflow-hidden mb-16">
          <div className="flex gap-12 animate-scroll">
            {[...TECHS, ...TECHS].map((t, i) => (
              <span key={i} className="text-gray-500 text-sm uppercase tracking-widest">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="text-3xl font-bold text-indigo-600">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}