"use client";

import { Header, Footer } from "@/components/layout";
import HeroSection from "./components/HeroSection";
import TeamMembers from "./components/TeamMembers";
import AboutTheTeam from "./components/AboutTheTeam";

export default function TeamsPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <TeamMembers />
            <AboutTheTeam />
            <Footer />
        </div>
    );
}