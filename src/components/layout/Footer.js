"use client";

import Image from "next/image";
import CurvedTopEdge from "../footer/CurvedTopEdge";
import FooterDecorations from "../footer/FooterDecorations";
import LanguageSelector from "../footer/LanguageSelector";
import BackToTopButton from "../footer/BackToTopButton";
import LegalLinks from "../footer/LegalLinks";
import SocialLinks from "../footer/SocialLinks";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    
    return (
        <footer className="relative bg-void-black text-paper-white mt-20">
            <CurvedTopEdge />
            <FooterDecorations />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 sm:pb-8">
                {/* Top section with language toggle and back to top */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                    <LanguageSelector />
                    <BackToTopButton />
                </div>

                {/* Main footer content */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-grid-gray">
                    <LegalLinks />
                    <SocialLinks />
                </div>

                {/* Copyright with Logo */}
                <div className="mt-4 sm:mt-6 flex flex-col items-center gap-3 sm:gap-4">
                    <Image
                        src="/logos/Y_TekRenk_KoyuZemin_eng.png"
                        alt="School Logo"
                        width={150}
                        height={60}
                        className="h-auto opacity-80 w-[120px] sm:w-[150px]"
                    />
                    <p className="font-mono text-xs sm:text-sm text-paper-white/70 text-center px-4">
                        {t('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
}