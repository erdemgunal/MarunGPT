"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/routing";
import LanguageSelector from "./LanguageSelector";

export default function MobileHeader({ 
    isMenuOpen, 
    onToggleMenu, 
    isLangOpen, 
    onToggleLang,
    locale,
    onSelectLanguage,
    t 
}) {
    return (
        <div className="flex items-center justify-between gap-4 h-16 sm:hidden">
            <div className="flex items-center gap-4">
                <motion.button
                    type="button"
                    onClick={onToggleMenu}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-paper-white transition-all duration-300 z-50 relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    aria-label={t('toggleNavigation')}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>

                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 0.1 }}
                >
                    <Link 
                        href="/" 
                        className="font-display text-xl font-bold text-paper-white transition-colors z-50 relative"
                    >
                        {t('brand')}
                    </Link>
                </motion.div>
            </div>
            
            <LanguageSelector
                locale={locale}
                isOpen={isLangOpen}
                onToggle={onToggleLang}
                onSelectLanguage={onSelectLanguage}
            />
        </div>
    );
}

