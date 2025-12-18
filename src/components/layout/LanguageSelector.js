"use client";

import { Globe } from "lucide-react";

export default function LanguageSelector({ 
    locale, 
    isOpen, 
    onToggle, 
    onSelectLanguage 
}) {
    return (
        <div className="relative z-50">
            <button
                onClick={onToggle}
                className="flex items-center gap-1 text-paper-white hover:text-aether-cyan transition-colors"
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase">{locale}</span>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 bg-void-black border border-grid-gray rounded-lg shadow-lg overflow-hidden z-50">
                    <button
                        onClick={() => onSelectLanguage('en')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${
                            locale === 'en' ? 'text-aether-cyan' : 'text-paper-white'
                        }`}
                    >
                        English
                    </button>
                    <button
                        onClick={() => onSelectLanguage('tr')}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-grid-gray transition-colors ${
                            locale === 'tr' ? 'text-aether-cyan' : 'text-paper-white'
                        }`}
                    >
                        Türkçe
                    </button>
                </div>
            )}
        </div>
    );
}

