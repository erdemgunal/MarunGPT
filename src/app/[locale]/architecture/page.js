"use client";

import { Header, Footer } from "@/components/layout";
import HeroSection from "./components/HeroSection";
import ArchitectureOverview from "./components/ArchitectureOverview";
import ComponentDetails from "./components/ComponentDetails";
import TechnicalSpecifications from "./components/TechnicalSpecifications";

export default function ArchitecturePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <ArchitectureOverview />
            <ComponentDetails />
            <TechnicalSpecifications />
            <Footer />
        </div>
    );
}