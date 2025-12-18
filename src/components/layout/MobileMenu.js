"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function MobileMenu({ navLinks, onClose, t }) {
    return (
        <div className="fixed inset-0 top-16 bg-void-black z-40 sm:hidden flex flex-col overflow-hidden">
            <div className="flex flex-col flex-1 justify-center px-6">
                {navLinks.map((item) => (
                    <Link 
                        key={item.href}
                        href={item.href} 
                        className="block py-6 text-2xl font-display text-paper-white hover:text-aether-cyan active:scale-95 active:text-aether-cyan active:bg-grid-gray/10 transition-all duration-150 ease-out" 
                        onClick={onClose}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            
            <div className="px-6 pb-8">
                <Link
                    href="/coming-soon"
                    className="w-full bg-aether-cyan text-void-black px-8 py-4 rounded-full font-body text-lg font-bold transition-all duration-150 flex items-center justify-center gap-3 hover:bg-paper-white hover:scale-105 active:scale-95 shadow-lg"
                    onClick={onClose}
                >
                    {t('launchBeta')}
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}

