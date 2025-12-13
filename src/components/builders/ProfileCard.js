"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileCard({ profile, index }) {
    return (
        <motion.div
            key={profile.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-brand-surface border-2 border-slate-200 p-6 rounded-lg hover:border-slate-400 transition-colors"
        >
            <div className="flex items-start gap-4 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-200">
                    <Image
                        src={profile.avatar}
                        alt={profile.name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div className="flex-1 flex items-start justify-between">
                    <h3 className="font-display text-lg md:text-2xl font-bold text-brand-primaryText">
                        {profile.name}
                    </h3>
                    <span className="text-xs font-mono px-2 py-1 bg-brand-utility text-brand-primaryText rounded">
                        {profile.badge}
                    </span>
                </div>
            </div>
            <p className="font-body text-sm md:text-base text-brand-primaryText/70">
                {profile.role}
            </p>
        </motion.div>
    );
}