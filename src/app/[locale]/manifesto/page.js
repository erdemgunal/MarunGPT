"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export default function ManifestoPage() {
    const t = useTranslations('manifesto');

    return (
        <main className="min-h-screen bg-void-black text-paper-white flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-2xl w-full text-center space-y-4 sm:space-y-6 py-8 sm:py-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-paper-white/10 text-xs font-mono uppercase tracking-wide text-aether-cyan">
                    {t('badge')}
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-grid-gray text-base sm:text-lg leading-relaxed">
                    {t('description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                        href="/coming-soon"
                        className="px-6 py-3 rounded-full font-body font-medium transition-colors bg-aether-cyan/15 text-paper-white border border-aether-cyan/40 hover:border-aether-cyan hover:bg-aether-cyan/25"
                    >
                        {t('buttons.roadmap')}
                    </Link>
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-full border border-grid-gray text-paper-white font-body font-medium transition-colors hover:text-aether-cyan hover:border-aether-cyan"
                    >
                        {t('buttons.backHome')}
                    </Link>
                </div>
            </div>
        </main>
    );
}