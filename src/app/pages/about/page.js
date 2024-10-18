"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  const teamMembers = [
    { name: "Hakkı", role: "Project Lead", image: "https://avatars.githubusercontent.com/u/65365648?v=4" },
    { name: "Kayra", role: "AI Researcher", image: "https://avatars.githubusercontent.com/u/57875608?v=4" },
  ];

  const projectFeatures = [
    { title: "Natural Language Processing", description: "Advanced NLP capabilities.", link: "/features/about" },
    { title: "Personalized Learning", description: "Adaptive learning paths.", link: "/features/about" },
    { title: "7/24 Availability", description: "Round-the-clock assistance.", link: "/features/about" },
    { title: "Multi-lingual Support", description: "Support for multiple languages.", link: "/features/about" },
  ];

  const content = [
    {
      title: "Our Mission",
      description:
        "At MarunGPT, our mission is to revolutionize the educational experience at Marmara University through cutting-edge AI technology. We aim to provide students with instant, accurate, and personalized assistance, enhancing their learning journey and academic success.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/content-1.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "The Technology",
      description:
        "MarunGPT leverages state-of-the-art natural language processing and machine learning algorithms. Our AI model is trained on a vast corpus of academic knowledge, university-specific information, and continuously updated data to ensure relevance and accuracy.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/content-2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Impact on Education",
      description:
        "By integrating AI into the educational process, we're creating a more interactive and engaging learning environment. MarunGPT serves as a 7/24 virtual assistant, helping students with queries, providing study resources, and offering personalized learning recommendations.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/content-3.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Future Developments",
      description:
        "We're constantly evolving MarunGPT to meet the changing needs of our academic community. Future plans include integration with more university systems, expanded language support, and the development of AI-driven research assistants for graduate students and faculty.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/content-4.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        
        {/* Başlık ve Açıklama */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            About MarunGPT
          </h1>
          <TextGenerateEffect
            words="Empowering Marmara University with Artificial Intelligence"
            className="text-xl mb-8 tracking-tight"
          />
        </motion.div>

        {/* Sticky Scroll */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <StickyScroll content={content} />
        </motion.div>

        {/* Key Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <HoverEffect
            items={projectFeatures.map((feature) => ({
              ...feature,
              link: feature.link,
            }))}
          />
        </motion.section>

        {/* Our Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="my-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
