"use client";

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function APIExample() {
    const t = useTranslations('docs.apiExample');

    return (
        <section className="py-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                    <div>
                        <h2 className="font-display text-2xl md:text-5xl font-bold text-brand-primaryText mb-4">
                            {t('title')}
                        </h2>

                        <p className="text-brand-primaryText/70 text-base md:text-lg leading-relaxed mb-8">
                            {t('description')}
                        </p>
                    </div>

                    <div className="border-2 border-slate-200 bg-void-black relative p-6 rounded-lg overflow-hidden">
                        <div className="font-mono text-sm text-paper-white space-y-2">
                            <div className="text-aether-cyan">
                                <span className="text-grid-gray">$</span> curl -X POST https://api.marungpt.com/v1/query \
                            </div>
                            <div className="pl-4 text-volt-yellow">
                                -H <span className="text-paper-white">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span> \
                            </div>
                            <div className="pl-4 text-volt-yellow">
                                -H <span className="text-paper-white">&quot;Content-Type: application/json&quot;</span> \
                            </div>
                            <div className="pl-4 text-volt-yellow">
                                -d <span className="text-paper-white">&apos;{`{`}</span>
                            </div>
                            <div className="pl-8 text-hyper-blue">
                                <span className="text-paper-white">&quot;query&quot;</span>: <span className="text-volt-yellow">&quot;What are the prerequisites for EEE204?&quot;</span>
                            </div>
                            <div className="pl-4 text-volt-yellow">
                                <span className="text-paper-white">{`}`}</span>&apos;
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-grid-gray">
                            <div className="font-mono text-xs text-grid-gray mb-2">{t('response')}</div>
                            <div className="font-mono text-xs text-paper-white">
                                <div className="text-aether-cyan">{`{`}</div>
                                <div className="pl-4 text-hyper-blue">
                                    <span className="text-paper-white">&quot;answer&quot;</span>: <span className="text-volt-yellow">&quot;Prerequisites for EEE204...&quot;</span>
                                </div>
                                <div className="pl-4 text-hyper-blue">
                                    <span className="text-paper-white">&quot;sources&quot;</span>: <span className="text-volt-yellow">[&quot;Course_Catalog_2024&quot;]</span>
                                </div>
                                <div className="text-aether-cyan">{`}`}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}