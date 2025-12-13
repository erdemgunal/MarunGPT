"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function JoinUsCard({ delay }) {
    const t = useTranslations('builders.joinUs');
    
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay }}
            className="bg-brand-surface border-2 border-slate-200 p-6 rounded-lg hover:border-slate-400 transition-colors"
        >
            <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full flex-shrink-0 border-2 border-slate-200 bg-brand-utility flex items-center justify-center">
                    <span className="text-2xl text-brand-primaryText">+</span>
                </div>
                <div className="flex-1 flex items-start justify-between">
                    <h3 className="font-display text-lg md:text-2xl font-bold text-brand-primaryText">
                        {t('title')}
                    </h3>
                    <span className="text-xs font-mono px-2 py-1 bg-brand-utility text-brand-primaryText rounded">
                        {t('badge')}
                    </span>
                </div>
            </div>
            <p className="font-body text-sm md:text-base text-brand-primaryText/70">
                {t('description')}
            </p>
        </motion.div>
    );
}