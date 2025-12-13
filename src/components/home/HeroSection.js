"use client";

import { motion } from "framer-motion";
import { LiveDemoTerminal } from "@/components/shared";
import MetricsBadges from "../hero/MetricsBadges";
import ActionButtons from "../hero/ActionButtons";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('hero');
    
    return (
        <section className="py-20 md:py-32 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl font-semibold md:text-6xl md:font-bold lg:text-7xl font-display leading-[1.1] tracking-tight text-slate-900"
                            style={{ whiteSpace: "pre-line" }}
                        >
                            {t('title')}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-base md:text-xl font-body text-brand-primaryText/70 leading-relaxed max-w-xl"
                            style={{ fontFamily: 'var(--font-inter)' }}
                        >
                            {t('description')}
                        </motion.p>

                        <MetricsBadges variants={itemVariants} />
                        <ActionButtons variants={itemVariants} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <LiveDemoTerminal />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}