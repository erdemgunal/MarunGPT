import localFont from "next/font/local";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ClarityMsAnalytics from "@/components/ClarityMsAnalytics";
import Navbar from "@/components/Navbar";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 300 400 900",
});

export const metadata = {
  title: "MarunGPT",
  description: "Introducing MarunGPT, your AI assistant for Marmara University. Get answers, explore ideas, and find smart solutions to campus life challenges!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
        <meta name="theme-color" content="#003d72" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={cn('relative h-full font-sans antialiased overflow-x-hidden', geistMono)}
      >
        <main className="min-h-screen bg-futuristic text-white overflow-x-hidden">
          <Navbar />
          {children}
          <SpeedInsights />
        </main>
        <Footer />
        <GoogleAnalytics />
        <ClarityMsAnalytics />
      </body>
    </html>
  );
}
