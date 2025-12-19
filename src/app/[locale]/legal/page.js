import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'legal.index' });

    return {
        title: t('title'),
        description: t('description'),
    };
}

export default async function LegalPage() {
    const t = await getTranslations('legal.index');

    const legalDocuments = [
        {
            title: t('documents.privacy.title'),
            description: t('documents.privacy.description'),
            href: "/legal/privacy",
        },
        {
            title: t('documents.terms.title'),
            description: t('documents.terms.description'),
            href: "/legal/terms",
        },
        {
            title: t('documents.cookies.title'),
            description: t('documents.cookies.description'),
            href: "/legal/cookies",
        },
    ];

    return (
        <div className="max-w-5xl ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
            <div className="mb-12 sm:mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                    {t('title')}
                </h1>
                <p className="text-brand-secondaryText text-lg sm:text-xl tracking-wide">
                    {t('description')}
                </p>
            </div>

            <div className="space-y-6 mb-16">
                {legalDocuments.map((doc) => (
                    <div key={doc.href}>
                        <Link
                            href={doc.href}
                            className="text-xl sm:text-2xl font-bold underline hover:text-aether-cyan transition-colors tracking-tight"
                        >
                            {doc.title}
                        </Link>
                        <p className="text-brand-secondaryText text-sm sm:text-base leading-relaxed mt-2 tracking-wide">
                            {doc.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}