"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function FeaturesOverview() {
    const t = useTranslations('docs.features');

    const features = [
        { key: 'restfulApi' },
        { key: 'realTimeUpdates' },
        { key: 'multiLanguage' },
        { key: 'sourceAttribution' },
        { key: 'rateLimiting' },
        { key: 'errorHandling' },
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.key}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="border-2 border-slate-200 bg-brand-surface p-4 hover:border-brand-accentPrimary/50 transition-all duration-300"
                        >
                            <h3 className="font-display font-bold text-sm md:text-base text-brand-primaryText mb-1">
                                {t(`items.${feature.key}.title`)}
                            </h3>
                            <p className="text-xs md:text-sm text-brand-primaryText/70">
                                {t(`items.${feature.key}.description`)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}