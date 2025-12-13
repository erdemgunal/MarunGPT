"use client";

import { PageHero } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('docs.hero');

    return (
        <PageHero
            badge={t('badge')}
            title={t('title')}
            description={t('description')}
        />
    );
}