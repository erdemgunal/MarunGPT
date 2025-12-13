"use client";

import { motion } from "framer-motion";

export default function SpecsSection({ title, description, specs }) {
    const getHighlightClass = (highlight) => {
        if (highlight === 'primary') return 'text-brand-accentPrimary';
        if (highlight === 'secondary') return 'text-brand-accentSecondary';
        return '';
    };

    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                    <div>
                        <h2 className="font-display text-2xl md:text-5xl font-bold text-brand-primaryText mb-4">
                            {title}
                        </h2>

                        {description && (
                            <p className="text-brand-primaryText/70 text-base md:text-lg leading-relaxed mb-8">
                                {description}
                            </p>
                        )}
                    </div>

                    <div className="border-2 border-slate-200 bg-brand-surface relative p-6 rounded-lg overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-accentPrimary rounded-t-lg"></div>

                        <ul className="font-mono text-sm space-y-4 text-brand-primaryText">
                            {specs.map((spec, index) => (
                                <li
                                    key={spec.label || index}
                                    className={`flex justify-between ${index < specs.length - 1 ? 'border-b border-slate-200 pb-2' : 'pb-2'}`}
                                >
                                    <span className="text-brand-primaryText/60">{spec.label}:</span>
                                    <span className={getHighlightClass(spec.highlight)}>
                                        {spec.value}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 h-16 w-full relative overflow-hidden border-2 border-brand-accentSecondary/30 rounded">
                            <div className="absolute inset-0 bg-brand-accentSecondary/10"></div>
                            <div className="absolute top-0 left-0 w-1/3 h-full bg-brand-accentPrimary/30 mix-blend-hard-light"></div>
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-accentPrimary/20 mix-blend-hard-light"></div>
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-accentSecondary"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}