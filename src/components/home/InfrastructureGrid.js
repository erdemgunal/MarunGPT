"use client";

import { motion } from "framer-motion";
import { Cpu, UserCircle, Clock } from "lucide-react";
import CapabilityCard from "../infrastructure/CapabilityCard";
import { useTranslations } from 'next-intl';

export default function InfrastructureGrid() {
    const t = useTranslations('infrastructure');
    
    const cards = [
        {
            title: t('cards.nlp.title'),
            icon: Cpu,
            description: t('cards.nlp.description'),
            statusIndicator: t('cards.nlp.status'),
            span: "col-span-1",
        },
        {
            title: t('cards.personalized.title'),
            icon: UserCircle,
            description: t('cards.personalized.description'),
            span: "col-span-1",
        },
        {
            title: t('cards.availability.title'),
            icon: Clock,
            description: t('cards.availability.description'),
            visualStyle: "solid light-purple fill",
            span: "col-span-1 md:col-span-2",
        },
    ];
    
    return (
        <section className="py-20 md:py-32 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl md:text-5xl font-display font-bold text-brand-primaryText mb-12"
                >
                    {t('title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, index) => (
                        <CapabilityCard key={card.title} card={card} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}