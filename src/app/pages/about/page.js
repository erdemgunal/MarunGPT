"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { FaRocket, FaBrain, FaClock, FaGlobe } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const teamMembers = [
    { 
      name: "Hakkı", 
      role: "Project Lead & AI Architect", 
      image: "https://avatars.githubusercontent.com/u/65365648?v=4",
      description: "Leading the vision and development of MarunGPT"
    },
    { 
      name: "Kayra", 
      role: "AI Researcher & Developer", 
      image: "https://avatars.githubusercontent.com/u/57875608?v=4",
      description: "Specializing in NLP and machine learning implementations"
    },
  ];

  const projectFeatures = [
    { 
      title: "Natural Language Processing", 
      description: "Advanced NLP capabilities tailored for academic environments and Turkish language support.",
      link: "/pages/contact-us",
      icon: <FaBrain className="w-8 h-8 text-marmara-blue-400" />
    },
    { 
      title: "Personalized Learning", 
      description: "Adaptive learning paths customized for each student's academic journey and preferences.",
      link: "/pages/contact-us",
      icon: <FaRocket className="w-8 h-8 text-marmara-blue-400" />
    },
    { 
      title: "7/24 Availability", 
      description: "Round-the-clock assistance for students, faculty, and staff whenever they need support.",
      link: "/pages/contact-us",
      icon: <FaClock className="w-8 h-8 text-marmara-blue-400" />
    },
    { 
      title: "Multi-lingual Support", 
      description: "Support for Turkish, English, and other languages used at Marmara University.",
      link: "/pages/contact-us",
      icon: <FaGlobe className="w-8 h-8 text-marmara-blue-400" />
    },
  ];

  const content = [
    {
      title: "Our Mission",
      description:
        "At MarunGPT, our mission is to revolutionize the educational experience at Marmara University through cutting-edge AI technology. We aim to provide students with instant, accurate, and personalized assistance, enhancing their learning journey and academic success.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-marmara-blue-900/20 to-black/50 rounded-xl p-8">
          <Image
            src="/content-1.png"
            width={300}
            height={300}
            className="h-full w-full object-contain rounded-lg"
            alt="MarunGPT Mission"
            priority
          />
        </div>
      ),
    },
    {
      title: "The Technology",
      description:
        "MarunGPT leverages state-of-the-art natural language processing and machine learning algorithms. Our AI model is trained on a vast corpus of academic knowledge, university-specific information, and continuously updated data to ensure relevance and accuracy.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-marmara-blue-800/20 to-black/50 rounded-xl p-8">
          <Image
            src="/content-2.png"
            width={300}
            height={300}
            className="h-full w-full object-contain rounded-lg"
            alt="AI Technology"
          />
        </div>
      ),
    },
    {
      title: "Impact on Education",
      description:
        "By integrating AI into the educational process, we're creating a more interactive and engaging learning environment. MarunGPT serves as a 7/24 virtual assistant, helping students with queries, providing study resources, and offering personalized learning recommendations.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-marmara-blue-700/20 to-black/50 rounded-xl p-8">
          <Image
            src="/content-3.png"
            width={300}
            height={300}
            className="h-full w-full object-contain rounded-lg"
            alt="Educational Impact"
          />
        </div>
      ),
    },
    {
      title: "Future Developments",
      description:
        "We're constantly evolving MarunGPT to meet the changing needs of our academic community. Future plans include integration with more university systems, expanded language support, and the development of AI-driven research assistants for graduate students and faculty.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-marmara-blue-600/20 to-black/50 rounded-xl p-8">
          <Image
            src="/content-4.png"
            width={300}
            height={300}
            className="h-full w-full object-contain rounded-lg"
            alt="Future Development"
          />
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-futuristic text-white overflow-x-hidden">
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="container-mobile container-desktop pt-12 md:pt-20 pb-12 md:pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-hero-mobile text-hero-desktop font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-marmara-blue-300 via-marmara-blue-200 to-marmara-blue-400 tracking-tight animate-glow"
            >
              About MarunGPT
            </motion.h1>
            <motion.div variants={itemVariants}>
              <TextGenerateEffect
                words="Empowering Marmara University with Artificial Intelligence"
                className="text-body-mobile text-body-desktop text-white/90 mb-8 leading-relaxed"
              />
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how we&apos;re transforming education through innovative AI technology designed specifically for the Marmara University community.
            </motion.p>
          </motion.div>
        </section>

        {/* Mission and Story - Mobile Optimized Sticky Scroll */}
        <section className="py-12 md:py-20">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInUp}
          >
            <StickyScroll content={content} />
          </motion.div>
        </section>

        {/* Key Features */}
        <section className="py-12 md:py-20">
          <div className="container-mobile container-desktop">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
              >
                Key Features
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto"
              >
                Powerful capabilities designed to enhance your university experience
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <HoverEffect
                items={projectFeatures.map((feature) => ({
                  title: feature.title,
                  description: feature.description,
                  icon: feature.icon,
                  link: feature.link,
                }))}
                className="grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              />
            </motion.div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 md:py-20">
          <div className="container-mobile container-desktop">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="text-center mb-12 md:mb-16"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
              >
                Our Team
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto"
              >
                Meet the passionate individuals behind MarunGPT&apos;s innovation
              </motion.p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 md:p-8 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto border-4 border-marmara-blue-400/30 group-hover:border-marmara-blue-400/60 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-marmara-blue-500/20 to-transparent"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-marmara-blue-300 font-medium mb-3">{member.role}</p>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20">
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
                Experience the Future of Education
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-body-mobile text-body-desktop text-white/80 mb-8 max-w-2xl mx-auto"
              >
                Join us in revolutionizing the way students and faculty interact with technology at Marmara University.
              </motion.p>
              <motion.div variants={itemVariants}>
                <button className="btn-primary text-lg px-10 py-4 shadow-xl shadow-marmara-blue-500/30 group">
                  <span className="flex items-center justify-center gap-3">
                    Get Started Today
                    <FaRocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
