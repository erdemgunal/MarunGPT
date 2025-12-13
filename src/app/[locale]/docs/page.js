"use client";

import { Header, Footer } from "@/components/layout";
import HeroSection from "./components/HeroSection";
import QuickStart from "./components/QuickStart";
import DocumentationSections from "./components/DocumentationSections";
import APIExample from "./components/APIExample";
import FeaturesOverview from "./components/FeaturesOverview";

export default function DocsPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <QuickStart />
            <DocumentationSections />
            <APIExample />
            <FeaturesOverview />
            <Footer />
        </div>
    );
}