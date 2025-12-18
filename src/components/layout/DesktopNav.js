"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import LanguageSelector from "./LanguageSelector";

export default function DesktopNav({ 
    navLinks, 
    isLangOpen, 
    onToggleLang,
    locale,
    onSelectLanguage,
    t 
}) {
    return (
        <div className="hidden sm:flex items-center justify-between gap-8 h-16">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
            >
                <Link 
                    href="/" 
                    className="font-display text-xl font-bold text-paper-white sm:hover:text-aether-cyan transition-colors"
                >
                    {t('brand')}
                </Link>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.1 }} 
                className="flex items-center gap-6"
            >
                <div className="flex items-center gap-4 font-body text-sm text-paper-white">
                    {navLinks.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className="transition-colors sm:hover:text-aether-cyan"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                
                <LanguageSelector
                    locale={locale}
                    isOpen={isLangOpen}
                    onToggle={onToggleLang}
                    onSelectLanguage={onSelectLanguage}
                />
                
                <Link
                    href="/coming-soon"
                    className="bg-void-black text-paper-white px-6 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 flex items-center gap-2 sm:hover:text-aether-cyan"
                >
                    {t('launchBeta')}
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </motion.div>
        </div>
    );
}

