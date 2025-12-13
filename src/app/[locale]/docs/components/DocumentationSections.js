"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useTranslations } from 'next-intl';

export default function DocumentationSections() {
    const t = useTranslations('docs.sections');

    const docSections = [
        { key: 'gettingStarted', color: "aether-cyan" },
        { key: 'apiReference', color: "volt-yellow" },
        { key: 'usageExamples', color: "hyper-blue" },
        { key: 'configuration', color: "aether-cyan" },
        { key: 'authentication', color: "volt-yellow" },
        { key: 'faq', color: "hyper-blue" },
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
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {docSections.map((section) => {
                        return (
                            <motion.div
                                key={section.key}
                                variants={itemVariants}
                                className="border-2 border-slate-200 bg-brand-surface p-6 relative group hover:border-brand-accentPrimary/50 transition-all duration-300 rounded-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.5),0_0_30px_rgba(0,229,255,0.3),0_0_45px_rgba(124,58,237,0.2)] hover:bg-gradient-to-br hover:from-white hover:to-cyan-50/50 cursor-pointer"
                            >
                                <div className="mb-4">
                                    <h3 className="font-display text-base md:text-xl font-bold text-brand-primaryText mb-2">
                                        {t(`items.${section.key}.title`)}
                                    </h3>
                                </div>

                                <p className="text-brand-primaryText/70 text-xs md:text-sm leading-relaxed font-body mb-4">
                                    {t(`items.${section.key}.description`)}
                                </p>

                                <a
                                    href={t(`items.${section.key}.link`)}
                                    className="text-sm font-mono text-brand-accentPrimary hover:text-brand-accentSecondary transition-colors inline-flex items-center gap-2"
                                >
                                    {t('readMore')}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="inline-block"
                                    >
                                        <path d="M18 8L22 12L18 16" />
                                        <path d="M2 12H22" />
                                    </svg>
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}