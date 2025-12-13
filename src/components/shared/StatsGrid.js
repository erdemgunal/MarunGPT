"use client";

import { motion } from "framer-motion";

export default function StatsGrid({ stats, title, description, columns = 4 }) {
    const gridCols = {
        2: "grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-2 md:grid-cols-4",
    };

    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {title && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="mb-16"
                    >
                        <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-primaryText mb-4">
                            {title}
                        </h2>
                        {description && (
                            <p className="text-brand-primaryText/70 text-base md:text-lg max-w-4xl leading-relaxed">
                                {description}
                            </p>
                        )}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className={`grid ${gridCols[columns] || gridCols[4]} gap-6 ${title ? '' : 'mb-16'}`}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label || index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="border-2 border-slate-200 bg-brand-surface p-6 rounded-lg text-center"
                        >
                            <div className="text-2xl md:text-4xl font-bold text-brand-accentPrimary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm font-semibold text-brand-primaryText mb-1">
                                {stat.label}
                            </div>
                            {stat.description && (
                                <div className="text-[10px] md:text-xs text-brand-primaryText/60">
                                    {stat.description}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}