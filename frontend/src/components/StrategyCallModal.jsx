import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// ─── Replace these with your real EmailJS credentials ────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─────────────────────────────────────────────────────────────────────────────

const PROJECT_TYPES = [
  'Web Application',
  'Mobile App',
  'AI / ML Integration',
  'SaaS Platform',
  'API & Backend Systems',
  'Design System / UI',
  'Other',
];

const BUDGETS = [
  'Under Rs:10k',
  'Rs:10k – Rs:25k',
  'Rs:25k – Rs:75k',
  'Rs:75k – Rs:150k',
  'Rs:150k+',
  'Not sure yet',
];

const TIMELINES = [
  'ASAP (< 1 month)',
  '1 – 3 months',
  '3 – 6 months',
  '6+ months',
  'Flexible',
];

const HEAR_ABOUT = ['Google Search', 'LinkedIn', 'Referral', 'Twitter / X', 'Other'];

// ─── Reusable field styles ────────────────────────────────────────────────────
const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-[14px] text-white placeholder:text-white/28 outline-none transition-all duration-200 focus:border-indigo-400/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-indigo-400/20';

const labelCls = 'block mb-2 text-[11px] uppercase tracking-[0.18em] text-white/45';

function ChipSelect({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={[
            'rounded-xl border px-4 py-2 text-[13px] font-medium transition-all duration-200',
            value === opt
              ? 'border-indigo-400/50 bg-indigo-500/20 text-white shadow-[0_0_16px_rgba(109,94,248,0.18)]'
              : 'border-white/10 bg-white/[0.04] text-white/55 hover:border-white/20 hover:text-white/80',
          ].join(' ')}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={[
            'h-1 rounded-full transition-all duration-500',
            i < current
              ? 'bg-cyan-300/80 w-6'
              : i === current
              ? 'bg-indigo-400/90 w-8'
              : 'bg-white/15 w-4',
          ].join(' ')}
        />
      ))}
    </div>
  );
}

// ─── Steps ────────────────────────────────────────────────────────────────────

function Step0({ data, set }) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelCls}>Full Name *</label>
        <input
          className={inputCls}
          placeholder="Jane Smith"
          value={data.name}
          onChange={(e) => set('name', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>Email Address *</label>
        <input
          type="email"
          className={inputCls}
          placeholder="jane@company.com"
          value={data.email}
          onChange={(e) => set('email', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>Company / Organisation</label>
        <input
          className={inputCls}
          placeholder="Acme Inc. (optional)"
          value={data.company}
          onChange={(e) => set('company', e.target.value)}
        />
      </div>
    </div>
  );
}

function Step1({ data, set }) {
  return (
    <div className="space-y-5">
      <div>
        <label className={labelCls}>What type of project is this? *</label>
        <ChipSelect
          options={PROJECT_TYPES}
          value={data.projectType}
          onChange={(v) => set('projectType', v)}
        />
      </div>
      <div>
        <label className={labelCls}>Estimated Budget</label>
        <ChipSelect
          options={BUDGETS}
          value={data.budget}
          onChange={(v) => set('budget', v)}
        />
      </div>
      <div>
        <label className={labelCls}>Desired Timeline</label>
        <ChipSelect
          options={TIMELINES}
          value={data.timeline}
          onChange={(v) => set('timeline', v)}
        />
      </div>
    </div>
  );
}

function Step2({ data, set }) {
  return (
    <div className="space-y-4">
      <div>
        <label className={labelCls}>Tell us about your project *</label>
        <textarea
          rows={5}
          className={inputCls + ' resize-none leading-7'}
          placeholder="What are you building? What problem does it solve? Any existing tech stack or constraints?"
          value={data.description}
          onChange={(e) => set('description', e.target.value)}
        />
      </div>
      <div>
        <label className={labelCls}>How did you hear about us?</label>
        <ChipSelect
          options={HEAR_ABOUT}
          value={data.hearAboutUs}
          onChange={(v) => set('hearAboutUs', v)}
        />
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/25 bg-gradient-to-br from-indigo-500/20 to-cyan-400/15 shadow-[0_0_40px_rgba(109,94,248,0.2)]"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <motion.path
            d="M7 16.5L13 22.5L25 10"
            stroke="rgba(122,215,255,0.95)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </svg>
      </motion.div>
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
        Request sent!
      </h3>
      <p className="mt-3 max-w-xs text-[14px] leading-7 text-white/52">
        Thanks for reaching out. We'll review your brief and get back to you
        within <span className="text-white/80">1 business day</span>.
      </p>
    </div>
  );
}

// ─── Main Modal ───────────────────────────────────────────────────────────────

const STEP_TITLES = [
  'Book a Strategy Call',
  'About Your Project',
  'Project Details',
  'All Done',
];

const STEP_SUBTITLES = [
  'Tell us who you are.',
  'Help us understand the scope.',
  'The more detail, the better.',
  '',
];

export default function StrategyCallModal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [data, setData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    hearAboutUs: '',
  });

  const set = (key, val) => setData((prev) => ({ ...prev, [key]: val }));

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep(0);
        setError('');
        setData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', description: '', hearAboutUs: '' });
      }, 350);
    }
  }, [open]);

  const canNext = () => {
    if (step === 0) return data.name.trim() && data.email.trim();
    if (step === 1) return !!data.projectType;
    if (step === 2) return data.description.trim().length > 10;
    return true;
  };

  const handleNext = async () => {
    if (step < 2) { setStep((s) => s + 1); return; }

    // Step 2 → submit
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    data.name,
          from_email:   data.email,
          company:      data.company     || 'N/A',
          project_type: data.projectType || 'N/A',
          budget:       data.budget      || 'N/A',
          timeline:     data.timeline    || 'N/A',
          description:  data.description,
          hear_about:   data.hearAboutUs || 'N/A',
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStep(3);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-[#0B0F18] shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top glow line */}
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />

              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(109,94,248,0.10),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(122,215,255,0.07),transparent_40%)]" />

              {/* Header */}
              <div className="relative flex items-start justify-between px-7 pt-7 pb-5">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={step}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.22 }}
                      className="text-[18px] font-semibold tracking-[-0.03em] text-white"
                    >
                      {STEP_TITLES[step]}
                    </motion.h2>
                  </AnimatePresence>
                  {STEP_SUBTITLES[step] && (
                    <p className="mt-1 text-[13px] text-white/40">
                      {STEP_SUBTITLES[step]}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-colors hover:text-white"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Step indicator */}
              {step < 3 && (
                <div className="px-7 pb-5">
                  <StepIndicator current={step} total={3} />
                </div>
              )}

              {/* Divider */}
              <div className="mx-7 h-px bg-white/[0.06]" />

              {/* Body */}
              <div className="relative px-7 py-6 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -18 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {step === 0 && <Step0 data={data} set={set} />}
                    {step === 1 && <Step1 data={data} set={set} />}
                    {step === 2 && <Step2 data={data} set={set} />}
                    {step === 3 && <Step3 />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Error */}
              {error && (
                <div className="mx-7 mb-2 rounded-xl border border-red-400/20 bg-red-400/8 px-4 py-3 text-[13px] text-red-300/90">
                  {error}
                </div>
              )}

              {/* Footer */}
              {step < 3 && (
                <div className="relative flex items-center justify-between px-7 py-5 border-t border-white/[0.06]">
                  <button
                    onClick={() => step === 0 ? onClose() : setStep((s) => s - 1)}
                    className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/70"
                  >
                    {step === 0 ? 'Cancel' : '← Back'}
                  </button>

                  <motion.button
                    onClick={handleNext}
                    disabled={!canNext() || loading}
                    whileHover={canNext() && !loading ? { y: -1, scale: 1.02 } : {}}
                    whileTap={canNext() && !loading ? { scale: 0.97 } : {}}
                    className={[
                      'relative inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-[13px] font-semibold transition-all duration-300',
                      canNext() && !loading
                        ? 'border border-indigo-300/20 bg-gradient-to-r from-indigo-500/22 to-cyan-400/16 text-white shadow-[0_0_24px_rgba(109,94,248,0.16)]'
                        : 'border border-white/8 bg-white/[0.04] text-white/30 cursor-not-allowed',
                    ].join(' ')}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : step === 2 ? (
                      <>Send Request →</>
                    ) : (
                      <>Next →</>
                    )}
                  </motion.button>
                </div>
              )}

              {step === 3 && (
                <div className="px-7 pb-7 flex justify-center">
                  <button
                    onClick={onClose}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-2.5 text-[13px] font-medium text-white/70 transition-colors hover:text-white"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}