"use client";

import { Header, Footer } from "@/components/layout";
import HeroSection from "./components/HeroSection";
import DataCategories from "./components/DataCategories";
import DataManagement from "./components/DataManagement";
import DataSources from "./components/DataSources";

export default function SchoolDataPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <HeroSection />
            <DataCategories />
            <DataManagement />
            <DataSources />
            <Footer />
        </div>
    );
}