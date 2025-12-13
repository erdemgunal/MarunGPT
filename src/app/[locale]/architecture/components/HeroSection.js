"use client";

import { PageHero } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('architecture.hero');

    return (
        <PageHero
            badge={t('badge')}
            title={
                <>
                    System <span className="text-volt-yellow">{t('titleHighlight')}</span>
                </>
            }
            description={t('description')}
        />
    );
}