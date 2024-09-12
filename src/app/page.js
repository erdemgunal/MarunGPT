"use client";

import { Bot, MessageSquare, Zap } from "lucide-react"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Answers",
      description: "Get immediate, accurate and detailed answers to your questions.",
      href: ""
    },
    {
      icon: Zap,
      title: "Fast and Efficient",
      description: "Save time, work more efficiently.",
      href: ""
    },
    {
      icon: Bot,
      title: "Personalized Experience",
      description: "We offer customized suggestions and solutions.",
      href: ""
    },
  ]

  return (
    <main className="relative min-h-screen z-10 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <BackgroundBeams />
      <section className="relative py-20 overflow-hidden">
        <div className="mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
              Artificial Intelligence Assistant of Marmara University
            </h2>
            <TextGenerateEffect words="Make your university life easier with MarunGPT!" className="text-xl mb-8 tracking-tight" />
          </motion.div>
          <Button href="#signup" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform">
            Try it now
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-center">Features</h1>
          <HoverEffect items={features.map(feature => ({
            title: feature.title,
            description: feature.description,
            icon: <feature.icon className="h-8 w-8 text-blue-400" />,
            link: feature.href
          }))} />
        </div>
      </section>
      <section className="relative py-20">
        <div className="mx-auto">
          <div className="relative w-full">
            <AspectRatio ratio={16 / 9} className="relative overflow-hidden rounded-md">
              <Image
                src="/fef-bina.png"
                alt="Image"
                  layout="fill"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/60 flex flex-col items-center justify-center rounded-md text-center text-white">
                <p className="text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-4">Instant answers. More productivity. Endless inspiration.</p>
                <Button href="#signup" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:translate-x-2">
                  Try Now
                </Button>
              </div>
            </AspectRatio>
          </div>
        </div>
      </section>
    </main>
  );
}
