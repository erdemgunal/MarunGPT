"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const t = useTranslations('header');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const navLinks = [
        { href: "/architecture", label: t('nav.architecture') },
        { href: "/docs", label: t('nav.docs') },
        { href: "/school-data", label: t('nav.schoolData') },
        { href: "/teams", label: t('nav.teams') },
    ];

    const closeMenu = () => setIsOpen(false);

    const switchLanguage = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
        setIsLangOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4 h-16 sm:hidden">
                    <div className="flex items-center gap-4">
                        <motion.button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full text-paper-white transition-all duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                            aria-label={t('toggleNavigation')}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </motion.button>

                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
                            <Link href="/" className="font-display text-xl font-bold text-paper-white transition-colors">
                                {t('brand')}
                            </Link>
                        </motion.div>
                    </div>
                    
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1 text-paper-white hover:text-aether-cyan transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-sm uppercase">{locale}</span>
                        </button>
                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 bg-void-black border border-grid-gray rounded-lg shadow-lg overflow-hidden">
                                <button
                                    onClick={() => switchLanguage('en')}
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${locale === 'en' ? 'text-aether-cyan' : 'text-paper-white'}`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => switchLanguage('tr')}
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${locale === 'tr' ? 'text-aether-cyan' : 'text-paper-white'}`}
                                >
                                    Türkçe
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden sm:flex items-center justify-between gap-8 h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <Link href="/" className="font-display text-xl font-bold text-paper-white sm:hover:text-aether-cyan transition-colors">
                            {t('brand')}
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }} className="flex items-center gap-6">
                        <div className="flex items-center gap-4 font-body text-sm text-paper-white">
                            {navLinks.map((item) => (
                                <Link key={item.href} href={item.href} className="transition-colors sm:hover:text-aether-cyan">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-1 text-paper-white hover:text-aether-cyan transition-colors"
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-sm uppercase">{locale}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute right-0 mt-2 bg-void-black border border-grid-gray rounded-lg shadow-lg overflow-hidden">
                                    <button
                                        onClick={() => switchLanguage('en')}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${locale === 'en' ? 'text-aether-cyan' : 'text-paper-white'}`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => switchLanguage('tr')}
                                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${locale === 'tr' ? 'text-aether-cyan' : 'text-paper-white'}`}
                                    >
                                        Türkçe
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        <Link
                            href="/coming-soon"
                            className="bg-void-black text-paper-white px-6 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 flex items-center gap-2 sm:hover:text-aether-cyan"
                        >
                            {t('launchBeta')}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                {isOpen && (
                    <div className="sm:hidden mt-3 mb-6 rounded-xl bg-void-black/95 shadow-xl">
                        <div className="flex flex-col pb-2">
                            {navLinks.map((item) => (
                                <Link key={item.href} href={item.href} className="px-4 py-4 text-paper-white" onClick={closeMenu}>
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}