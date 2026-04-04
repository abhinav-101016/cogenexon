import React from 'react';
import { motion } from 'framer-motion';

const solutions = [
    'SaaS Development',
    'AI Solutions',
    'Enterprise Software',
    'Web Architecture',
    'Mobile Engineering',
    'UI/UX Design',
];

const products = [
    'Sprintern',
    'AavaranAI',
    'Daycare AI',
    'Research Lab',
    'Documentation',
];

const company = [
    'About Cognexon',
    'Case Studies',
    'Process',
    'Pricing',
    'Careers',
    'Privacy Policy',
];

const socials = ['LinkedIn', 'GitHub', 'Twitter / X'];

function FooterLinkGroup({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                {title}
            </div>

            <div className="mt-5 space-y-3">
                {items.map((item, index) => (
                    <motion.a
                        key={item}
                        href="#"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.55,
                            delay: index * 0.04,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="block text-sm text-white/62 transition-colors duration-300 hover:text-white"
                    >
                        {item}
                    </motion.a>
                ))}
            </div>
        </div>
    );
}

function NeuralFooterMark() {
    return (
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
                src="/logo2.png"
                alt="Cognexon logo"
                className="relative z-10 h-10 w-10 object-contain"
            />
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/8 pt-16 md:pt-20">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
                <div className="absolute right-[8%] top-[18%] h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr] lg:gap-10">
                    {/* Brand column */}
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-4">
                            <NeuralFooterMark />

                            <div>
                                <div className="text-[16px] font-semibold tracking-[0.08em] text-white">
                                    COGNEXON
                                </div>
                                <div className="text-[11px] uppercase tracking-[0.24em] text-white/42">
                                    Solutions
                                </div>
                            </div>
                        </div>

                        <p className="mt-6 max-w-md text-sm leading-7 text-white/62 md:text-[15px]">
                            Architecting high-fidelity digital products, AI-powered systems,
                            and scalable enterprise platforms for ambitious teams building the future.
                        </p>

                        <div className="mt-6 space-y-3 text-sm text-white/62">
                            <div>
                                Mail us:{' '}
                                <a
                                    href="mailto:admin@cognexon.in"
                                    className="text-white/82 transition-colors duration-300 hover:text-white"
                                >
                                    admin@cognexon.in
                                </a>
                            </div>
                            <div>
                                Contact us:{' '}
                                <a
                                    href="tel:+916306347946"
                                    className="text-white/82 transition-colors duration-300 hover:text-white"
                                >
                                    +91 6306347946
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="mt-8 max-w-md rounded-[26px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl">
                            <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                                Pulse Newsletter
                            </div>
                            <div className="mt-3 text-sm leading-7 text-white/62">
                                Stay updated on the latest in AI systems, product engineering, and launches.
                            </div>

                            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    placeholder="Enter work email"
                                    className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/34 outline-none transition-colors duration-300 focus:border-white/18"
                                />
                                <button
                                    type="button"
                                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-indigo-300/20 bg-gradient-to-r from-indigo-500/20 to-cyan-400/14 px-5 text-sm font-semibold text-white"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <FooterLinkGroup title="Solutions" items={solutions} />
                    <FooterLinkGroup title="Products" items={products} />
                    <FooterLinkGroup title="Company" items={company} />
                </div>

                {/* Bottom strip */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-14 border-t border-white/8 py-6"
                >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="text-sm text-white/42">
                            © 2026 Cognexon Solutions Private Limited. Re-imagining the future.
                        </div>

                        <div className="flex flex-wrap items-center gap-5">
                            {socials.map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-sm text-white/56 transition-colors duration-300 hover:text-white"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}