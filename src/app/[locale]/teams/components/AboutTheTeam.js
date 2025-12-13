"use client";

import { SpecsSection } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function AboutTheTeam() {
    const t = useTranslations('teams.about');

    const specs = [
        { label: t('specs.projectType'), value: t('specs.projectTypeValue'), highlight: "primary" },
        { label: t('specs.organization'), value: t('specs.organizationValue'), highlight: "secondary" },
        { label: t('specs.contributors'), value: t('specs.contributorsValue'), highlight: null },
        { label: t('specs.license'), value: t('specs.licenseValue'), highlight: "primary" },
        { label: t('specs.status'), value: t('specs.statusValue'), highlight: "secondary" },
        { label: t('specs.contributions'), value: t('specs.contributionsValue'), highlight: "primary" },
    ];

    return (
        <SpecsSection
            title={t('title')}
            description={t('description')}
            specs={specs}
        />
    );
}