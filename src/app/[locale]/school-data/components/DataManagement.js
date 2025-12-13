"use client";

import { SpecsSection } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function DataManagement() {
    const t = useTranslations('schoolData.management');

    const specs = [
        { label: t('specs.syncFrequency'), value: t('specs.syncFrequencyValue'), highlight: "primary" },
        { label: t('specs.indexing'), value: t('specs.indexingValue'), highlight: "secondary" },
        { label: t('specs.storage'), value: t('specs.storageValue'), highlight: null },
        { label: t('specs.backup'), value: t('specs.backupValue'), highlight: "primary" },
        { label: t('specs.validation'), value: t('specs.validationValue'), highlight: "secondary" },
        { label: t('specs.accuracy'), value: t('specs.accuracyValue'), highlight: "primary" },
    ];

    return (
        <SpecsSection
            title={t('title')}
            description={t('description')}
            specs={specs}
        />
    );
}