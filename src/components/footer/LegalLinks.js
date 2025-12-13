"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function LegalLinks() {
    const t = useTranslations('footer.legal');
    
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-4 text-xs sm:text-sm text-paper-white/80">
            <Link
                href="/legal/privacy"
                className="hover:text-aether-cyan transition-colors whitespace-nowrap"
            >
                {t('privacy')}
            </Link>
            <span className="text-paper-white/40 hidden sm:inline">|</span>
            <Link
                href="/legal/terms"
                className="hover:text-aether-cyan transition-colors whitespace-nowrap"
            >
                {t('terms')}
            </Link>
            <span className="text-paper-white/40 hidden sm:inline">|</span>
            <Link
                href="/legal/cookies"
                className="hover:text-aether-cyan transition-colors whitespace-nowrap"
            >
                {t('cookies')}
            </Link>
        </div>
    );
}