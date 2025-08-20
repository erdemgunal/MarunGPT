"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaNewspaper, FaRss, FaCalendar, FaTag } from "react-icons/fa";

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

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "Introducing MarunGPT",
      description: "Learn about the revolutionary AI assistant designed specifically for Marmara University students and faculty.",
      image: "/blog-post-1.jpg",
      link: "/pages/contact-us",
      icon: <FaNewspaper className="w-8 h-8 text-marmara-blue-400" />
    },
    {
      title: "AI in Education: The Future is Here",
      description: "Explore how artificial intelligence is transforming the educational landscape and enhancing learning experiences.",
      image: "/blog-post-2.jpg",
      link: "/pages/contact-us",
      icon: <FaRss className="w-8 h-8 text-marmara-blue-400" />
    },
    {
      title: "Student Success Stories with MarunGPT",
      description: "Real testimonials and experiences from students who have benefited from using MarunGPT in their academic journey.",
      image: "/blog-post-3.jpg",
      link: "/pages/contact-us",
      icon: <FaCalendar className="w-8 h-8 text-marmara-blue-400" />
    },
    {
      title: "The Technology Behind MarunGPT",
      description: "A comprehensive look into the advanced AI, NLP, and machine learning technologies powering MarunGPT.",
      image: "/blog-post-4.jpg",
      link: "/pages/contact-us",
      icon: <FaTag className="w-8 h-8 text-marmara-blue-400" />
    },
  ];

  const recentPosts = [
    { 
      category: "Updates", 
      title: "MarunGPT 2.0: Revolutionary Features Released", 
      src: '/recent-posts.png', 
      date: "May 15, 2023",
      summary: "Discover the latest enhancements and new capabilities in MarunGPT 2.0"
    },
    { 
      title: "How to Maximize Your MarunGPT Experience", 
      category: "Tips & Tricks", 
      src: '/recent-posts3.png', 
      date: "May 10, 2023",
      summary: "Expert tips for getting the most out of your AI assistant"
    },
    { 
      title: "MarunGPT and Academic Integrity", 
      category: "Ethics", 
      src: '/recent-posts2.jpg', 
      date: "May 5, 2023",
      summary: "Understanding ethical AI use in academic environments"
    },
    { 
      title: "Faculty Perspectives on AI Assistants", 
      category: "Perspectives", 
      src: '/recent-posts4.png', 
      date: "April 30, 2023",
      summary: "Insights from professors on integrating AI into education"
    },
    { 
      title: "MarunGPT: The Ultimate Study Companion", 
      category: "Study Tips", 
      src: '/recent-posts5.png', 
      date: "April 25, 2023",
      summary: "Transform your study sessions with AI-powered assistance"
    },
    { 
      title: "AI in the Classroom: A Student's Perspective", 
      category: "Student Life", 
      src: '/recent-posts6.png', 
      date: "April 20, 2023",
      summary: "First-hand experiences of AI integration in university life"
    },
  ];

  const cards = recentPosts.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "AI & Technology", count: 8 },
    { name: "Student Life", count: 6 },
    { name: "Tips & Tricks", count: 5 },
    { name: "Updates", count: 3 },
    { name: "Research", count: 2 },
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
              MarunGPT Blog
            </motion.h1>
            <motion.div variants={itemVariants}>
              <TextGenerateEffect
                words="Stay Updated with the Latest in AI and Education"
                className="text-body-mobile text-body-desktop text-white/90 mb-6 leading-relaxed"
              />
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Explore insights, updates, and stories about how AI is transforming education at Marmara University.
            </motion.p>
          </motion.div>
        </section>

        {/* Categories Filter - Mobile Optimized */}
        <section className="py-8 md:py-12">
          <div className="container-mobile container-desktop">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-8"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left">Browse by Category</h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {categories.map((category, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      category.active 
                        ? 'bg-marmara-blue-600 text-white shadow-lg' 
                        : 'glass-card text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts */}
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
                Featured Posts
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto"
              >
                Our most popular and impactful articles about AI in education
              </motion.p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <HoverEffect 
                items={featuredPosts.map(post => ({
                  title: post.title,
                  description: post.description,
                  icon: post.icon,
                  link: post.link,
                }))} 
                className="grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              />
            </motion.div>
          </div>
        </section>

        {/* Recent Posts Carousel */}
        <section className="py-12 md:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full"
          >
            <div className="container-mobile container-desktop mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left">
                Recent Posts
              </h2>
              <p className="text-body-mobile text-body-desktop text-white/80 mt-4 text-center md:text-left max-w-2xl">
                Keep up with the latest developments and insights from the MarunGPT community
              </p>
            </div>
            <Carousel items={cards} />
          </motion.div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 md:py-20">
          <div className="container-mobile container-desktop">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="glass-card-strong p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <FaRss className="w-12 h-12 text-marmara-blue-400 mx-auto mb-4" />
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
              >
                Stay in the Loop
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-body-mobile text-body-desktop text-white/80 mb-8 max-w-2xl mx-auto"
              >
                Subscribe to our newsletter and never miss the latest updates about MarunGPT and AI in education.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-marmara-blue-400 focus:border-transparent"
                />
                <button className="btn-primary px-8 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}