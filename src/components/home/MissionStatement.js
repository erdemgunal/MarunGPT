"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function MissionStatement() {
    const t = useTranslations('mission');
    
    return (
        <section className="bg-void-black py-24 relative overflow-hidden border-t border-b border-grid-gray">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8">
                        <div className="font-mono text-aether-cyan text-sm mb-6 flex items-center uppercase whitespace-nowrap">
                            <span className="inline-block w-2 h-2 bg-volt-yellow mr-2 animate-pulse"></span>
                            {t('systemLabel')}
                        </div>

                        <h2 className="font-sans font-extrabold text-2xl md:text-5xl lg:text-6xl tracking-tighter text-paper-white uppercase leading-none">
                            {t('title')} <br />
                            {t('titleHighlight')}
                        </h2>

                        <p className="mt-8 text-grid-gray text-base md:text-lg max-w-3xl leading-relaxed font-medium">
                            {t('description')}
                        </p>
                    </div>

                    <div className="lg:col-span-4 mt-12 lg:mt-0 relative">
                        <div className="border border-grid-gray bg-void-black relative p-6">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-hyper-blue"></div>

                            <ul className="font-mono text-sm space-y-4 text-paper-white">
                                <li className="flex justify-between border-b border-[#262626] pb-2">
                                    <span className="text-grid-gray">{t('stats.status')}</span>
                                    <span className="text-aether-cyan">{t('stats.statusValue')}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#262626] pb-2">
                                    <span className="text-grid-gray">{t('stats.dataSource')}</span>
                                    <span className="text-volt-yellow">{t('stats.dataSourceValue')}</span>
                                </li>
                                <li className="flex justify-between border-b border-[#262626] pb-2">
                                    <span className="text-grid-gray">{t('stats.mode')}</span>
                                    <span>{t('stats.modeValue')}</span>
                                </li>
                                <li className="flex justify-between pb-2">
                                    <span className="text-grid-gray">{t('stats.protocol')}</span>
                                    <span className="text-hyper-blue">{t('stats.protocolValue')}</span>
                                </li>
                            </ul>

                            <div className="mt-6 h-16 w-full relative overflow-hidden border border-deep-indigo">
                                <div className="absolute inset-0 bg-deep-indigo opacity-50"></div>
                                <div className="absolute top-0 left-0 w-1/3 h-full bg-hyper-blue mix-blend-hard-light"></div>
                                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-aether-cyan mix-blend-hard-light"></div>
                                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-volt-yellow"></div>
                            </div>
                        </div>

                         <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-volt-yellow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};