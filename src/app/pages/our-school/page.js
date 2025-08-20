"use client";

import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useState } from "react";
import { FaGraduationCap, FaUniversity, FaUsers, FaChevronDown, FaMapMarkerAlt, FaCalendar, FaBookOpen, FaGlobe, FaStar, FaUsers as FaStudents } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function OurSchoolPage() {
  const [showMore, setShowMore] = useState(false);

  const sections = [
    {
      title: "Our Rich History",
      content: 'Marmara University is one of the oldest educational institutions in Turkey. Founded in 1883 as the Hamidiye School of Commerce, we have evolved through the decades to become a leading university. From our humble beginnings in İstanbul to becoming Marmara University in 1982, we have consistently been at the forefront of educational innovation and excellence.',
      fullContent: 'Our roots date back to 1883 when the Hamidiye School of Commerce was established in the İzzet Efendi Mansion in Kanlıfırın. In 1890, it moved to the Hakkı Bey Mansion in Beyazıt. After the declaration of the Republic, the school was renamed the Higher School of Commerce. The university awarded its first diplomas in 1887 and transformed into the School of Economics and Commerce in 1924-1925, becoming the first institution in Turkey to offer coeducational learning for both men and women.',
      icon: FaUniversity,
      color: "from-marmara-blue-600 to-marmara-blue-500"
    },
    {
      title: "Academic Excellence",
      content: "Marmara University boasts 21 faculties, 1 school, 4 vocational schools, 12 institutes, and 153 active undergraduate and associate degree programs. We offer education in multiple languages including Turkish, English, French, and German, preparing students for global careers.",
      fullContent: "Our academic programs span across diverse fields including Engineering, Medicine, Business, Arts, Sciences, and Technology. With over 60,000 students and 4,000 faculty members, we maintain a strong commitment to research excellence and innovative teaching methodologies.",
      icon: FaGraduationCap,
      color: "from-marmara-blue-500 to-marmara-blue-400"
    },
    {
      title: "MarunGPT: Your AI Companion",
      content: "MarunGPT is your intelligent AI assistant designed specifically for Marmara University. Get instant answers about courses, campus life, university services, and academic guidance. Experience the future of education with AI-powered assistance tailored to your needs.",
      fullContent: "Our revolutionary AI assistant provides 7/24 support for students, faculty, and staff. From academic planning to campus navigation, MarunGPT understands the unique context of Marmara University and provides personalized, accurate assistance to enhance your university experience.",
      icon: FaUsers,
      color: "from-marmara-blue-400 to-marmara-blue-300"
    }
  ];

  const stats = [
    { icon: FaStudents, number: "60,000+", label: "Students", color: "text-marmara-blue-300" },
    { icon: FaBookOpen, number: "153", label: "Programs", color: "text-marmara-blue-400" },
    { icon: FaGlobe, number: "4", label: "Languages", color: "text-marmara-blue-500" },
    { icon: FaStar, number: "140+", label: "Years of Excellence", color: "text-marmara-blue-600" }
  ];

  const highlights = [
    "State-of-the-art facilities and modern laboratories",
    "Internationally recognized faculty members and researchers",
    "Diverse student body from around the world",
    "Strong industry connections and internship opportunities",
    "Beautiful campuses located in the heart of İstanbul",
    "AI-powered educational support with MarunGPT",
    "Research excellence in multiple disciplines",
    "Global partnerships with leading universities"
  ];

  return (
    <div className="relative min-h-screen bg-futuristic text-white overflow-x-hidden">
      <BackgroundGradientAnimation>
        <main className="relative min-h-screen bg-black/30">
          <div className="relative z-10">
            
            {/* Hero Section */}
            <section className="container-mobile container-desktop pt-12 md:pt-20 pb-12 md:pb-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="text-center max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants} className="mb-8">
                  <Image
                    src='/Y_TekRenk_KoyuZemin_eng.png'
                    alt="Marmara University Logo"
                    width={250}
                    height={125}
                    priority={true}
                    className="mx-auto mb-6 w-32 h-16 md:w-48 md:h-24 lg:w-64 lg:h-32 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
                
                <motion.h1 
                  variants={itemVariants}
                  className="text-hero-mobile text-hero-desktop font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-marmara-blue-300 via-marmara-blue-200 to-marmara-blue-400 tracking-tight animate-glow"
                >
                  Welcome to Marmara University
                </motion.h1>
                
                <motion.div variants={itemVariants}>
                  <TextGenerateEffect
                    words="Discover our innovative learning environment where tradition meets the future!"
                    className="text-body-mobile text-body-desktop text-white/90 mb-8 leading-relaxed"
                  />
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto leading-relaxed"
                >
                  Experience 140+ years of educational excellence enhanced by cutting-edge AI technology
                </motion.p>
              </motion.div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 md:py-16">
              <div className="container-mobile container-desktop">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      className="text-center glass-card p-6 rounded-xl"
                    >
                      <stat.icon className={`w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 ${stat.color}`} />
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm md:text-base text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-12 md:py-20">
              <div className="container-mobile container-desktop">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                  {sections.map(({ title, content, fullContent, icon: Icon, color }, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02 }}
                      className="glass-card-strong rounded-2xl overflow-hidden group"
                    >
                      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                      <CardHeader className="p-6 md:p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${color} rounded-full flex items-center justify-center`}>
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl md:text-2xl text-white font-bold">
                            {title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 md:p-8 pt-0">
                        <p className="text-sm md:text-base text-white/90 leading-relaxed">
                          {showMore ? fullContent : content}
                        </p>
                      </CardContent>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Toggle More Information */}
            <section className="py-8 md:py-12">
              <div className="container-mobile container-desktop text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Button
                    onClick={() => setShowMore(!showMore)}
                    className="btn-primary text-lg px-8 py-4 shadow-lg shadow-marmara-blue-500/30 group"
                    aria-expanded={showMore}
                    aria-controls="extra-content"
                  >
                    <span className="flex items-center gap-3">
                      {showMore ? "Show Less" : "Learn More About Us"}
                      <FaChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          showMore && "rotate-180"
                        )}
                      />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </section>

            {/* Additional Information */}
            <AnimatePresence>
              {showMore && (
                <motion.section
                  id="extra-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 md:py-20"
                >
                  <div className="container-mobile container-desktop">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      
                      {/* Why Choose Us */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="glass-card-strong p-8 md:p-10 rounded-2xl"
                      >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center gap-3">
                          <FaStar className="w-6 h-6 text-marmara-blue-400" />
                          Why Choose Marmara University?
                        </h2>
                        <div className="space-y-4">
                          {highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-2 h-2 bg-marmara-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-white/90 text-sm md:text-base">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Contact Information */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                      >
                        <div className="glass-card p-8 rounded-2xl">
                          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                            <FaMapMarkerAlt className="w-5 h-5 text-marmara-blue-400" />
                            Campus Locations
                          </h3>
                          <div className="space-y-3 text-white/90">
                            <p className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-marmara-blue-400 rounded-full"></span>
                              Göztepe Campus - Main Campus
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-marmara-blue-400 rounded-full"></span>
                              Başıbüyük Campus - Engineering
                            </p>
                            <p className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-marmara-blue-400 rounded-full"></span>
                              Haydarpaşa Campus - Medicine
                            </p>
                          </div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl">
                          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
                            <FaCalendar className="w-5 h-5 text-marmara-blue-400" />
                            Quick Facts
                          </h3>
                          <div className="space-y-3 text-white/90">
                            <p><strong>Founded:</strong> 1883</p>
                            <p><strong>University Status:</strong> 1982</p>
                            <p><strong>Type:</strong> State University</p>
                            <p><strong>Location:</strong> İstanbul, Turkey</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

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
                    Ready to Join Our Community?
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-body-mobile text-body-desktop text-white/80 mb-8 max-w-2xl mx-auto"
                  >
                    Experience world-class education enhanced by AI technology. Start your journey with MarunGPT and discover what makes Marmara University special.
                  </motion.p>
                  <motion.div variants={itemVariants}>
                    <Button
                      href="/pages/contact-us"
                      className="btn-primary text-lg px-10 py-4 shadow-xl shadow-marmara-blue-500/30 group"
                    >
                      <span className="flex items-center justify-center gap-3">
                        Get Started with MarunGPT
                        <FaUsers className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </div>
        </main>
      </BackgroundGradientAnimation>
    </div>
  );
}
