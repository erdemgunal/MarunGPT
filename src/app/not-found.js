"use client";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { HomeIcon, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-black to-primary text-white p-6 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10 text-center">
        <h2 className="text-8xl sm:text-9xl font-bold bg-clip-text text-transparent text-white tracking-tighter">
          404
        </h2>
        <p className="text-xl sm:text-2xl mt-4 font-light text-white max-w-xl mx-auto">
          Oops! Sayfa bulunamadı
        </p>
        <p className="text-sm sm:text-base mt-2 text-white/50 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <Link href="/">
            <Button className="group bg-white text-primary hover:bg-white/90 transition-all duration-300 font-medium px-6 py-2">
              <HomeIcon className="w-4 h-4 mr-2" />
              Ana Sayfa
            </Button>
          </Link>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="group border-white/20 hover:bg-white/90 hover:border-white/40 text-primary transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Geri Dön
          </Button>
        </div>
      </div>
    </main>
  );
}