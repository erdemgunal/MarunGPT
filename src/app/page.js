"use client";

import { Bot, MessageSquare, Zap } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Answers",
      description: "Get immediate, accurate and detailed answers to your questions.",
      href: "",
    },
    {
      icon: Zap,
      title: "Fast and Efficient",
      description: "Save time, work more efficiently.",
      href: "",
    },
    {
      icon: Bot,
      title: "Personalized Experience",
      description: "We offer customized suggestions and solutions.",
      href: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen z-10 py-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <BackgroundBeams />
        <section className="relative py-20 overflow-hidden">
          <div className="mx-auto text-center relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight"
              >
                Artificial Intelligence Assistant of Marmara University
              </motion.h2>
              <motion.div variants={itemVariants}>
                <TextGenerateEffect
                  words="Make your university life easier with MarunGPT!"
                  className="text-lg md:text-xl mb-8"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button
                  href="/pages/contact-us"
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform"
                >
                  Try it now
                  <FaArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold text-center"
              >
                Features
              </motion.h1>
              <motion.div variants={itemVariants}>
                <HoverEffect
                  items={features.map((feature) => ({
                    title: feature.title,
                    description: feature.description,
                    icon: (
                      <feature.icon className="h-8 w-8 text-blue-400" />
                    ),
                    link: feature.href,
                  }))}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
