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
      description: "Get immediate, accurate and detailed answers to your questions about Marmara University.",
      href: "/pages/about",
    },
    {
      icon: Zap,
      title: "Fast and Efficient",
      description: "Save time with AI-powered assistance for academic and administrative tasks.",
      href: "/pages/about",
    },
    {
      icon: Bot,
      title: "Personalized Experience",
      description: "AI tailored specifically for Marmara University students and faculty.",
      href: "/pages/about",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <main className="relative min-h-screen z-10">
      <BackgroundBeams />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
        <div className="container-mobile container-desktop text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={heroVariants} className="mb-8 md:mb-12">
              <h1 className="text-hero-mobile text-hero-desktop font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-marmara-blue-300 via-marmara-blue-200 to-marmara-blue-400 tracking-tight leading-tight animate-glow">
                Artificial Intelligence Assistant of Marmara University
              </h1>
              <div className="text-body-mobile text-body-desktop text-white/90 mb-8 md:mb-10">
                <TextGenerateEffect
                  words="Make your university life easier with MarunGPT! Your intelligent companion for academic success."
                  className="leading-relaxed"
                />
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                href="/pages/contact-us"
                className="btn-primary w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-marmara-blue-500/25 group"
              >
                <span className="flex items-center justify-center gap-3">
                  Try it now
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                href="/pages/about"
                className="btn-secondary w-full sm:w-auto text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-20 relative">
        <div className="container-mobile container-desktop">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
            >
              Powerful Features
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto"
            >
              Discover how MarunGPT can transform your university experience with AI-powered assistance
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <HoverEffect
              items={features.map((feature) => ({
                title: feature.title,
                description: feature.description,
                icon: (
                  <feature.icon className="h-8 w-8 md:h-10 md:w-10 text-marmara-blue-400" />
                ),
                link: feature.href,
              }))}
              className="grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 relative">
        <div className="container-mobile container-desktop text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="glass-card-strong p-8 md:p-12 rounded-2xl max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-body-mobile text-body-desktop text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of Marmara University students and faculty who are already using MarunGPT to enhance their academic journey.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                href="/pages/contact-us"
                className="btn-primary text-lg px-10 py-4 shadow-xl shadow-marmara-blue-500/30 group"
              >
                <span className="flex items-center justify-center gap-3">
                  Start Your Journey
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
