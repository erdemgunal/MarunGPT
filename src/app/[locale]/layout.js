import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics, ClarityMsAnalytics } from "@/components/analytics";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export function generateMetadata({ params }) {
    return {
        title: "MarunGPT",
        description: "Introducing MarunGPT, your AI assistant for Marmara University. Get answers, explore ideas, and find smart solutions to campus life challenges!",
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;

    if (!routing.locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} className="h-full">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <meta name="theme-color" content="#000000" />
            </head>
            <body
                className={cn(
                    'relative h-full font-body antialiased',
                    spaceGrotesk.variable,
                    inter.variable,
                    jetbrainsMono.variable
                )}
            >
                <NextIntlClientProvider messages={messages}>
                    <main className="min-h-screen bg-brand-background text-brand-primaryText overflow-x-hidden">
                        {children}
                        <SpeedInsights />
                    </main>
                </NextIntlClientProvider>
                <GoogleAnalytics />
                <ClarityMsAnalytics />
            </body>
        </html>
    );
}