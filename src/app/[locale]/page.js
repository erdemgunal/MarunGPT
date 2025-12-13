"use client";

import { Header, Footer } from "@/components/layout";
import {
    HeroSection,
    InfrastructureGrid,
    BuildersSection,
    MissionStatement
} from "@/components/home";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <InfrastructureGrid />
            <MissionStatement />
            <BuildersSection />
            <Footer />
        </div>
    );
}