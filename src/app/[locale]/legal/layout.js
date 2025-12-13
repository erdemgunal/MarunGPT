import { Link } from "@/i18n/routing";
import { Footer } from "@/components/layout";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal' });

    return {
        title: {
            template: "%s - MarunGPT",
            default: "Legal - MarunGPT",
        },
        description: t('index.description'),
    };
}

export default async function LegalLayout({ children }) {
    const t = await getTranslations('legal');

    return (
        <>
            <div className="min-h-screen bg-brand-background text-brand-primaryText">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-aether-cyan hover:text-aether-cyan/80 transition-colors mb-6 text-sm sm:text-base tracking-wide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block"
                        >
                            <path d="M6 8L2 12L6 16" />
                            <path d="M2 12H22" />
                        </svg>
                        {t('backToHome')}
                    </Link>
                </div>
                {children}
            </div>

            <Footer />
        </>
    );
}