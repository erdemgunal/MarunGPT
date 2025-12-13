"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from "@/i18n/routing";

const languages = [
    { code: "en", name: "English" },
    { code: "tr", name: "Türkçe" },
];

export default function LanguageSelector() {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const languageDropdownRef = useRef(null);
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('footer.language');

    const currentLanguage = languages.find(lang => lang.code === locale)?.name || "English";

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageDropdownRef.current &&
                !languageDropdownRef.current.contains(event.target)
            ) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const switchLanguage = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
        setIsLanguageOpen(false);
    };

    return (
        <div className="relative" ref={languageDropdownRef}>
            <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-grid-gray/50 hover:bg-grid-gray rounded-md text-xs sm:text-sm text-paper-white hover:text-aether-cyan transition-colors w-full sm:w-auto"
                aria-label="Select language"
                aria-expanded={isLanguageOpen}
            >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage}</span>
                <motion.div
                    animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                    transition={{
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>

            {/* Language dropdown */}
            <AnimatePresence>
                {isLanguageOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute bottom-full left-0 mb-2 w-48 sm:w-48 max-w-[calc(100vw-2rem)] bg-void-black rounded-md shadow-lg border border-grid-gray overflow-hidden z-50 backdrop-blur-sm"
                    >
                        {languages.map((language) => (
                            <motion.button
                                key={language.code}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onClick={() => switchLanguage(language.code)}
                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${locale === language.code
                                        ? "bg-grid-gray text-paper-white font-medium"
                                        : "text-paper-white/70 hover:bg-grid-gray/50 hover:text-aether-cyan"
                                    }`}
                            >
                                {language.name}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}