"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function DataSources() {
    const t = useTranslations('schoolData.sources');

    const dataSources = [
        'cms',
        'calendar',
        'faculty',
        'research',
        'regulations',
        'resources',
    ];

    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-primaryText mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-brand-primaryText/70 text-base md:text-lg max-w-4xl leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {dataSources.map((source, index) => (
                        <motion.div
                            key={source}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="border-2 border-slate-200 bg-brand-surface p-4 hover:border-brand-accentPrimary/50 transition-all duration-300"
                        >
                            <span className="text-xs md:text-sm font-medium text-brand-primaryText">
                                {t(`items.${source}`)}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}