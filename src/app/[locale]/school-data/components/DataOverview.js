"use client";

import { StatsGrid } from "@/components/shared";
import { useTranslations } from 'next-intl';

export default function DataOverview() {
    const t = useTranslations('schoolData.overview');

    const dataMetrics = [
        {
            label: t('metrics.totalDocuments.label'),
            value: t('metrics.totalDocuments.value'),
            description: t('metrics.totalDocuments.description'),
        },
        {
            label: t('metrics.dataSources.label'),
            value: t('metrics.dataSources.value'),
            description: t('metrics.dataSources.description'),
        },
        {
            label: t('metrics.updateFrequency.label'),
            value: t('metrics.updateFrequency.value'),
            description: t('metrics.updateFrequency.description'),
        },
        {
            label: t('metrics.coverage.label'),
            value: t('metrics.coverage.value'),
            description: t('metrics.coverage.description'),
        },
    ];

    return (
        <StatsGrid
            stats={dataMetrics}
            title={t('title')}
            description={t('description')}
            columns={4}
        />
    );
}