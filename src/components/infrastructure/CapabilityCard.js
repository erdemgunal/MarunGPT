"use client";

import { motion } from "framer-motion";

export default function CapabilityCard({ card, index }) {
    const Icon = card.icon;
    const isPurple = card.visualStyle?.includes("purple");

    return (
        <motion.div
            key={card.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`${card.span} bg-brand-surface border-2 border-slate-200 p-8 rounded-lg transition-all duration-300 cursor-pointer hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.5),0_0_30px_rgba(0,229,255,0.3),0_0_45px_rgba(124,58,237,0.2)] hover:bg-gradient-to-br hover:from-white hover:to-cyan-50/50 ${isPurple ? "bg-brand-accentSecondary/10 border-slate-300" : ""
                }`}
        >
            <div className="flex items-start gap-4 mb-4">
                <div
                    className={`p-3 rounded-lg ${isPurple
                        ? "bg-brand-accentSecondary/20"
                        : "bg-brand-utility"
                        }`}
                >
                    <Icon
                        className="w-6 h-6 text-brand-primaryText"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="font-display text-base md:text-xl font-bold text-brand-primaryText mb-2">
                        {card.title}
                    </h3>
                    {card.statusIndicator && (
                        <span className="inline-block text-xs font-mono px-2 py-1 bg-green-100 text-green-800 rounded mb-2">
                            {card.statusIndicator}
                        </span>
                    )}
                </div>
            </div>
            <p className="font-body text-sm md:text-base text-brand-primaryText/70 leading-relaxed">
                {card.description}
            </p>
        </motion.div>
    );
}