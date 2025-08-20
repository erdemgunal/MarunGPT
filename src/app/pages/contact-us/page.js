"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaUser, FaComment, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

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

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const onSubmit = async (data) => {
    setResponseMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setResponseMessage("Your message was sent successfully! We'll get back to you soon.");
        setMessageColor("text-green-400");
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Message sending failed. Please try again.");
        setMessageColor("text-red-400");
      }
      reset();
      setTimeout(() => setResponseMessage(""), 5000);
    } catch {
      setResponseMessage("An error occurred. Please check your connection and try again.");
      setMessageColor("text-red-400");
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6 text-marmara-blue-400" />,
      title: "Email",
      content: "marungpt@marmara.edu.tr",
      description: "Send us an email anytime"
    },
    {
      icon: <FaPhone className="w-6 h-6 text-marmara-blue-400" />,
      title: "Phone",
      content: "+90 (216) 777 0000",
      description: "Call us during office hours"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-marmara-blue-400" />,
      title: "Location",
      content: "Marmara University",
      description: "İstanbul, Turkey"
    },
    {
      icon: <FaClock className="w-6 h-6 text-marmara-blue-400" />,
      title: "Support Hours",
      content: "7/24 Available",
      description: "AI assistance always ready"
    }
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
              Contact Us
            </motion.h1>
            <motion.div variants={itemVariants}>
              <TextGenerateEffect
                words="Get in Touch with the MarunGPT Team"
                className="text-body-mobile text-body-desktop text-white/90 mb-6 leading-relaxed"
              />
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-body-mobile text-body-desktop text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Have questions, suggestions, or feedback? We&apos;d love to hear from you. Our team is here to help you make the most of MarunGPT.
            </motion.p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container-mobile container-desktop">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <p className="text-marmara-blue-300 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-white/70">{info.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-20">
          <div className="container-mobile container-desktop">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Form Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="glass-card-strong p-8 md:p-10 rounded-2xl"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Send us a Message</h2>
                    <p className="text-white/80">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-white/90 mb-3">
                        <FaUser className="w-4 h-4 text-marmara-blue-400" />
                        Your Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full h-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-marmara-blue-400 focus:border-transparent rounded-lg transition-all duration-300"
                        {...register("name", { required: true })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-white/90 mb-3">
                        <FaEnvelope className="w-4 h-4 text-marmara-blue-400" />
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="your.email@example.com"
                        className="w-full h-12 bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-marmara-blue-400 focus:border-transparent rounded-lg transition-all duration-300"
                        {...register("email", { required: true })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-white/90 mb-3">
                        <FaComment className="w-4 h-4 text-marmara-blue-400" />
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you or share your feedback..."
                        className="w-full bg-white/10 border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-marmara-blue-400 focus:border-transparent rounded-lg transition-all duration-300 resize-none"
                        {...register("message", { required: true })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Button
                        type="submit"
                        className="w-full btn-primary h-12 text-lg font-medium shadow-lg shadow-marmara-blue-500/30 group"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            Send Message
                            <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Response Message */}
                  {responseMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-6 p-4 rounded-lg glass-card ${messageColor} font-medium text-center`}
                    >
                      {responseMessage}
                    </motion.div>
                  )}
                </motion.div>

                {/* Info Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="space-y-8"
                >
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Why Contact Us?</h3>
                    <ul className="space-y-4 text-white/80">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-marmara-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Technical support and troubleshooting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-marmara-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Feature requests and suggestions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-marmara-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Partnership and collaboration opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-marmara-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>General inquiries about MarunGPT</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Quick Response</h3>
                    <p className="text-white/80 mb-4">
                      We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our AI assistant MarunGPT is available 7/24 to provide immediate help.
                    </p>
                    <div className="flex items-center gap-2 text-marmara-blue-300">
                      <FaClock className="w-4 h-4" />
                      <span className="text-sm font-medium">Average response time: &lt; 24 hours</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}