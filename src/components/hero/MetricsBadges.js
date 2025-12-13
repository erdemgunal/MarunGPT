"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function MetricsBadges({ variants }) {
    const t = useTranslations('hero.metrics');
    
    const metricsBadges = [
        t('latency'),
        t('dataFreshness'),
        t('model'),
    ];
    
    return (
        <motion.div
            variants={variants}
            className="flex flex-wrap gap-3"
        >
            {metricsBadges.map((badge) => (
                <span
                    key={badge}
                    className="font-mono text-xs px-3 py-1.5 bg-brand-utility text-brand-primaryText border border-slate-200"
                >
                    {badge}
                </span>
            ))}
        </motion.div>
    );
}