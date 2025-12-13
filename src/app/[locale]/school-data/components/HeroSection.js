"use client";

import { PageHero } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('schoolData.hero');

    return (
        <PageHero
            badge={t('badge')}
            title={
                <>
                    School <span className="text-volt-yellow">{t('titleHighlight')}</span>
                </>
            }
            description={t('description')}
        />
    );
}