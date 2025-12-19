import { getLegalContent } from '@/lib/markdown';
import LegalContent from '@/components/LegalContent';
import { Link } from "@/i18n/routing";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal.index.documents.privacy' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function PrivacyPage({ params }) {
    const { locale } = await params;
    const content = await getLegalContent('privacy', locale);
    const t = await getTranslations('legal');

    return (
        <div className="max-w-5xl ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 px-4 sm:px-6 lg:px-8 pb-20">
            <div className="mb-8">
                <Link
                    href="/legal"
                    className="inline-flex items-center gap-2 text-aether-cyan hover:text-aether-cyan/80 transition-colors text-sm sm:text-base tracking-wide"
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
                    >
                        <path d="M6 8L2 12L6 16" />
                        <path d="M2 12H22" />
                    </svg>
                    {t('backToLegal')}
                </Link>
            </div>

            <LegalContent content={content} />
        </div>
    );
}