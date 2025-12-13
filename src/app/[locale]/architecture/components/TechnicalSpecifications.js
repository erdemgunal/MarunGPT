"use client";

import { SpecsSection } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function TechnicalSpecifications() {
    const t = useTranslations('architecture.specs');

    const specs = [
        { label: t('items.architecture'), value: t('items.architectureValue'), highlight: "primary" },
        { label: t('items.processing'), value: t('items.processingValue'), highlight: "secondary" },
        { label: t('items.storage'), value: t('items.storageValue'), highlight: null },
        { label: t('items.apiProtocol'), value: t('items.apiProtocolValue'), highlight: "primary" },
        { label: t('items.security'), value: t('items.securityValue'), highlight: "secondary" },
        { label: t('items.uptime'), value: t('items.uptimeValue'), highlight: "primary" },
    ];

    return (
        <SpecsSection
            title={t('title')}
            description={t('description')}
            specs={specs}
        />
    );
}