"use client";

import { Bot, MessageSquare, Zap } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "Anlık Cevaplar",
      description: "Sorularınıza anında, doğru ve detaylı cevaplar alın.",
      href: "#instant-answers"
    },
    {
      icon: Zap,
      title: "Hızlı ve Verimli",
      description: "Zaman kazanın, daha verimli çalışın.",
      href: "#fast-efficient"
    },
    {
      icon: Bot,
      title: "Kişiselleştirilmiş Deneyim",
      description: "Size özel öneriler ve çözümler sunuyoruz.",
      href: "#personalized-experience"
    },
  ]

  return (
    <main className="relative min-h-screen z-10 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <BackgroundBeams />
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
              Marmara Üniversitesi&apos;nin Yapay Zeka Asistanı
            </h2>
            <TextGenerateEffect words="MarunGPT ile üniversite hayatınızı kolaylaştırın!" className="text-xl mb-8 tracking-tight" />
          </motion.div>
          <Button href="#signup" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Hemen Deneyin
          </Button>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-white">Özellikler</h2>
          <HoverEffect items={features.map(feature => ({
            title: feature.title,
            description: feature.description,
            icon: <feature.icon className="h-8 w-8 text-blue-400" />,
            link: feature.href
          }))} />
        </div>
      </section>
      <section className="relative py-20">
        <div className="container mx-auto">
          <div className="relative w-full">
            <AspectRatio ratio={16 / 9} className="relative overflow-hidden rounded-md">
              <Image
                src="/fef-bina.png"
                alt="Image"
                  layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60 flex flex-col items-center justify-center rounded-md text-center text-white">
                <p className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-4">Anında cevaplar. Daha fazla üretkenlik. Sonsuz ilham.</p>
                <Button href="#signup" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                  Şimdi Deneyin
                </Button>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>
    </main>
  );
}
