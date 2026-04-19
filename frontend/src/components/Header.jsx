import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import StrategyCallModal from './StrategyCallModal';

const navItems = [
  { label: 'Solutions', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '/about', isPage: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleHashLink = (href) => {
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <div
          className={[
            'mx-auto max-w-7xl rounded-2xl border transition-all duration-500',
            scrolled
              ? 'border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.28)]'
              : 'border-white/6 bg-white/[0.03] backdrop-blur-xl',
          ].join(' ')}
        >
          <div className="relative flex items-center justify-between px-5 md:px-7 py-4">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
            <div className="pointer-events-none absolute inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent" />

            {/* Brand */}
            <Link
              to="/"
              className="group relative flex items-center gap-3 shrink-0"
              aria-label="Cognexon Solutions"
            >
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden">
                <img src="/logo2.png" alt="Cognexon logo" className="relative z-10 h-10 w-10 object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-[15px] md:text-[16px] font-semibold tracking-[0.08em] text-white">COGNEXON</div>
                <div className="text-[11px] md:text-[12px] uppercase tracking-[0.24em] text-white/45">Solutions</div>
              </div>
              <motion.div
                className="pointer-events-none absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 20% 50%, rgba(109,94,248,0.12), transparent 45%), radial-gradient(circle at 80% 50%, rgba(122,215,255,0.10), transparent 45%)' }}
                transition={{ duration: 0.35 }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) =>
                item.isPage ? (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={item.href}
                      className="group relative px-4 py-2 text-[14px] font-medium text-white/68 transition-colors duration-300 hover:text-white block"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="pointer-events-none absolute inset-x-3 bottom-[7px] h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                      <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.04]" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleHashLink(item.href)}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative px-4 py-2 text-[14px] font-medium text-white/68 transition-colors duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="pointer-events-none absolute inset-x-3 bottom-[7px] h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/0 transition-colors duration-300 group-hover:bg-white/[0.04]" />
                  </motion.a>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/82 backdrop-blur-xl transition-colors duration-300 hover:text-white"
              >
                <span className="relative">Start a Project</span>
              </motion.a>

              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
                className="group relative inline-flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/18 to-cyan-400/14 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(109,94,248,0.12)] backdrop-blur-xl"
              >
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.18),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Book Strategy Call</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >→</motion.span>
              </motion.button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/90 backdrop-blur-xl"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <div className="relative h-4 w-5">
                <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-white" />
                <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="absolute left-0 top-[6px] h-[1.5px] w-5 rounded-full bg-white/85" />
                <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} className="absolute left-0 top-[12px] h-[1.5px] w-5 rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[88px] left-4 right-4 z-50 lg:hidden"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F16]/90 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
                <div className="p-4">
                  <div className="space-y-1">
                    {navItems.map((item, index) =>
                      item.isPage ? (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-white/78 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
                        >
                          <span>{item.label}</span>
                          <span className="text-cyan-300/55 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                      ) : (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -12 }}
                          transition={{ duration: 0.25, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
                          onClick={() => setMobileOpen(false)}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium text-white/78 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
                        >
                          <span>{item.label}</span>
                          <span className="text-cyan-300/55 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </motion.a>
                      )
                    )}
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    <a href="#contact" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/88">
                      Start a Project
                    </a>
                    <button
                      onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                      className="inline-flex items-center justify-center rounded-xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/16 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(109,94,248,0.16)]"
                    >
                      Book Strategy Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Strategy Call Modal */}
      <StrategyCallModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}