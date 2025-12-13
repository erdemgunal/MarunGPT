"use client";

import { motion } from "framer-motion";

export default function PageHero({ badge, title, description }) {
    return (
        <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 px-5 sm:px-6 lg:px-8 bg-void-black relative overflow-hidden border-b border-grid-gray">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                >
                    <div className="font-mono text-aether-cyan text-xs sm:text-sm mb-4 sm:mb-6 flex items-center uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                        <span className="inline-block w-2 h-2 bg-volt-yellow mr-2 animate-pulse flex-shrink-0"></span>
                        <span className="truncate">{badge}</span>
                    </div>
                    
                    <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-paper-white uppercase leading-tight sm:leading-[1.05] md:leading-[1.02] mb-4 sm:mb-6">
                        {title}
                    </h1>
                    
                    <p className="text-grid-gray text-base sm:text-lg md:text-xl max-w-2xl sm:max-w-3xl leading-relaxed sm:leading-[1.8] font-medium">
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}