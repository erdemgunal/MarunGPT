"use client";

import { ChevronUp } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function BackToTopButton() {
    const t = useTranslations('footer');
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-paper-white/80 hover:text-aether-cyan transition-colors group w-full sm:w-auto justify-center sm:justify-start"
        >
            <span>{t('backToTop')}</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
    );
}