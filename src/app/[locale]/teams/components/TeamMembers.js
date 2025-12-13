"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import TeamProfileCard from "@/components/builders/TeamProfileCard";
import JoinUsCard from "@/components/builders/JoinUsCard";
import { useTranslations } from 'next-intl';

export default function TeamMembers() {
    const t = useTranslations('teams.members');

    const teamMembers = [
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {teamMembers.map((member, index) => (
                        <TeamProfileCard key={member.name} profile={member} index={index} />
                    ))}
                    <JoinUsCard delay={teamMembers.length * 0.1} />
                </motion.div>
            </div>
        </section>
    );
}