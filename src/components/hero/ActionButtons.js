"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function ActionButtons({ variants }) {
    const t = useTranslations('hero.actions');
    
    return (
        <motion.div
            variants={variants}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-center"
        >
            <Link
                href="/coming-soon"
                className="bg-brand-primaryText text-brand-surface px-8 py-4 rounded-full font-body font-medium hover:bg-brand-accentPrimary transition-all flex items-center justify-center gap-2 group"
            >
                {t('tryNow')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
                href="/manifesto"
                className="font-body text-brand-primaryText hover:text-brand-accentPrimary hover:underline transition-colors text-center"
            >
                {t('readManifesto')}
            </Link>
        </motion.div>
    );
}