"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useTranslations } from 'next-intl';

export default function DataCategories() {
    const t = useTranslations('schoolData.categories');

    const dataCategories = [
        { key: 'courseCatalogs', color: "aether-cyan" },
        { key: 'academicRegulations', color: "volt-yellow" },
        { key: 'academicCalendar', color: "hyper-blue" },
        { key: 'facultyInfo', color: "aether-cyan" },
        { key: 'studentResources', color: "volt-yellow" },
        { key: 'researchData', color: "hyper-blue" },
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
                    {dataCategories.map((category) => {
                        return (
                            <motion.div
                                key={category.key}
                                variants={itemVariants}
                                className="border-2 border-slate-200 bg-brand-surface p-6 relative group hover:border-brand-accentPrimary/50 transition-all duration-300 rounded-lg hover:shadow-[0_0_15px_rgba(0,229,255,0.5),0_0_30px_rgba(0,229,255,0.3),0_0_45px_rgba(124,58,237,0.2)] hover:bg-gradient-to-br hover:from-white hover:to-cyan-50/50"
                            >
                                <div className="mb-4">
                                    <h3 className="font-display text-base md:text-xl font-bold text-brand-primaryText mb-2">
                                        {t(`items.${category.key}.title`)}
                                    </h3>
                                    <span className="inline-block text-xs font-mono px-2 py-1 bg-brand-utility text-brand-primaryText rounded">
                                        {t(`items.${category.key}.count`)}
                                    </span>
                                </div>

                                <p className="text-brand-primaryText/70 text-xs md:text-sm leading-relaxed font-body">
                                    {t(`items.${category.key}.description`)}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}