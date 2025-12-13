"use client";

import { motion } from "framer-motion";
import ProfileCard from "../builders/ProfileCard";
import JoinUsCard from "../builders/JoinUsCard";
import { useTranslations } from 'next-intl';

export default function BuildersSection() {
    const t = useTranslations('builders');
    
    const profiles = [
        {
            name: t('profiles.hakki.name'),
            role: t('profiles.hakki.role'),
            badge: t('profiles.hakki.badge'),
            avatar: "https://avatars.githubusercontent.com/u/65365648?v=4"
        },
        {
            name: t('profiles.kayra.name'),
            role: t('profiles.kayra.role'),
            badge: t('profiles.kayra.badge'),
            avatar: "https://avatars.githubusercontent.com/u/57875608?v=4"
        },
    ];
    
    return (
        <section className="py-20 md:py-32 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl md:text-5xl font-display font-bold text-brand-primaryText mb-12"
                >
                    {t('title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={profile.name} profile={profile} index={index} />
                    ))}
                    <JoinUsCard delay={profiles.length * 0.1} />
                </div>
            </div>
        </section>
    );
}

