"use client";

import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from 'next-intl';
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";

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
    const toggleMenu = () => setIsOpen((prev) => !prev);
    const toggleLang = () => setIsLangOpen(!isLangOpen);

    const switchLanguage = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
        setIsLangOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-void-black">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <MobileHeader
                        isMenuOpen={isOpen}
                        onToggleMenu={toggleMenu}
                        isLangOpen={isLangOpen}
                        onToggleLang={toggleLang}
                        locale={locale}
                        onSelectLanguage={switchLanguage}
                        t={t}
                    />

                    <DesktopNav
                        navLinks={navLinks}
                        isLangOpen={isLangOpen}
                        onToggleLang={toggleLang}
                        locale={locale}
                        onSelectLanguage={switchLanguage}
                        t={t}
                    />
                </div>
            </nav>

            {isOpen && (
                <MobileMenu
                    navLinks={navLinks}
                    onClose={closeMenu}
                    t={t}
                />
            )}
        </>
    );
}
