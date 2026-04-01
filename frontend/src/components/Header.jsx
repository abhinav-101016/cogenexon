import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../hooks/useScrolled';

const NAV_LINKS = ['Services', 'Solutions', 'Case Studies', 'About'];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 no-underline group">
      <div className="relative w-[38px] h-[38px] flex-shrink-0">
        <svg viewBox="0 0 34 34" fill="none">
          <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="34" y2="34">
              <stop stopColor="#6366f1" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          <path
            d="M17 2L30 9.5V24.5L17 32L4 24.5V9.5L17 2Z"
            stroke="url(#lg1)"
            strokeWidth="1.5"
            fill="rgba(99,102,241,0.08)"
          />
          <path
            d="M17 9L23 12.5V19.5L17 23L11 19.5V12.5L17 9Z"
            fill="url(#lg1)"
          />
          <circle cx="17" cy="16" r="2.5" fill="#fff" />
        </svg>

        <motion.span
          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-indigo-500"
          animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-bold text-[18px] text-gray-800 group-hover:text-indigo-600 transition">
          Cogenexon
        </span>
        <span className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">
          AI Solutions
        </span>
      </div>
    </a>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 mt-3 rounded-2xl bg-white shadow-xl p-5 border border-gray-100"
        >
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((label, i) => (
              <motion.a
                key={label}
                href={`#${label.toLowerCase().replace(' ', '-')}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={onClose}
                className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-medium transition"
              >
                {label}
              </motion.a>
            ))}

            <a
              href="#contact"
              onClick={onClose}
              className="mt-3 text-center py-3 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="max-w-[1150px] mx-auto rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(255,255,255,0.95)'
            : 'rgba(255,255,255,0.75)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled
            ? '0 10px 40px rgba(0,0,0,0.08)'
            : 'none',
          border: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase().replace(' ', '-')}`}
              className="text-[16px] font-medium text-gray-600 hover:text-indigo-600 transition relative"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition">
            Sign in
          </button>

          <motion.button
            className="px-5 py-2.5 rounded-xl text-[15px] font-semibold text-white bg-indigo-600 hover:bg-indigo-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <motion.span
            className="w-6 h-[2px] bg-gray-700"
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
          />
          <motion.span
            className="w-6 h-[2px] bg-gray-700"
            animate={{ opacity: menuOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-[2px] bg-gray-700"
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
          />
        </button>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </motion.header>
  );
}