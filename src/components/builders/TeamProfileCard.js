"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamProfileCard({ profile, index }) {
    return (
        <motion.div
            key={profile.name}
            initial={{ opacity: 0, translateY: 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col items-center text-center gap-3"
        >
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-200">
                <Image
                    src={profile.avatar}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                    unoptimized
                />
            </div>
            <div className="space-y-1">
                <h3 className="font-display text-lg md:text-2xl font-bold text-brand-primaryText">{profile.name}</h3>
                <p className="font-body text-brand-primaryText/70 text-sm md:text-base">{profile.role}</p>
                <span className="inline-flex text-xs font-mono px-2 py-1 bg-brand-utility text-brand-primaryText rounded">
                    {profile.badge}
                </span>
            </div>
            {profile.bio ? (
                <p className="text-brand-primaryText/70 text-xs md:text-sm leading-relaxed">{profile.bio}</p>
            ) : null}
        </motion.div>
    );
}