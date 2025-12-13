"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function ArchitectureOverview() {
    const t = useTranslations('architecture.overview');

    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="mb-16"
                >
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-brand-primaryText mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-brand-primaryText/70 text-base md:text-lg max-w-4xl leading-relaxed">
                        {t('description')}
                    </p>
                </motion.div>

                {/* Architecture Diagram Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border-2 border-slate-200 bg-brand-surface relative p-8 md:p-12 mb-16"
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-accentPrimary"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="font-mono text-sm text-brand-accentPrimary mb-4">{t('layers.frontend')}</div>
                            <div className="border-2 border-slate-200 p-4 bg-brand-utility/50">
                                <div className="h-32 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(0, 229, 255, 0.1), transparent)' }}>
                                    <span className="text-brand-primaryText font-mono text-xs">UI_COMPONENTS</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="font-mono text-sm text-brand-accentSecondary mb-4">{t('layers.apiGateway')}</div>
                            <div className="border-2 border-slate-200 p-4 bg-brand-utility/50">
                                <div className="h-32 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), transparent)' }}>
                                    <span className="text-brand-primaryText font-mono text-xs">REST_API</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="font-mono text-sm text-brand-accentPrimary mb-4">{t('layers.processing')}</div>
                            <div className="border-2 border-slate-200 p-4 bg-brand-utility/50">
                                <div className="h-32 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(0, 229, 255, 0.1), transparent)' }}>
                                    <span className="text-brand-primaryText font-mono text-xs">RAG_ENGINE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <div className="font-mono text-sm text-brand-accentSecondary mb-4">{t('layers.dataLayer')}</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border-2 border-slate-200 p-4 bg-brand-utility/50">
                                <div className="h-24 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), transparent)' }}>
                                    <span className="text-brand-primaryText font-mono text-xs">VECTOR_DB</span>
                                </div>
                            </div>
                            <div className="border-2 border-slate-200 p-4 bg-brand-utility/50">
                                <div className="h-24 flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgba(124, 58, 237, 0.1), transparent)' }}>
                                    <span className="text-brand-primaryText font-mono text-xs">DOCUMENT_STORE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}