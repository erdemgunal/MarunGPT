"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurSchoolPage() {
  const campusFeatures = [
    {
      title: "Modern Facilities",
      description: "Our campus boasts state-of-the-art laboratories equipped with the latest technology, extensive libraries housing a vast collection of academic resources, and cutting-edge research centers that foster innovation and discovery.",
    },
    {
      title: "Green Campus",
      description: "Marmara University is committed to sustainability. Our campus features lush green spaces, gardens, and parks that provide a serene environment for studying, relaxation, and outdoor activities. We also implement eco-friendly practices across our facilities.",
    },
    {
      title: "Sports Complex",
      description: "Our comprehensive sports complex caters to various athletic interests. It includes indoor and outdoor facilities for basketball, volleyball, tennis, swimming, and more. We encourage a healthy balance between academic pursuits and physical well-being.",
    },
    {
      title: "Cultural Center",
      description: "The cultural heart of our campus, this center hosts a wide array of events including theatrical performances, music concerts, art exhibitions, and cultural festivals. It serves as a hub for artistic expression and cultural exchange.",
    },
  ];

  const academicPrograms = [
    {
      title: "Undergraduate Programs",
      description: "Marmara University offers a diverse range of undergraduate programs across various disciplines. Our curriculum is designed to provide a strong foundation in chosen fields while encouraging interdisciplinary exploration. Students benefit from hands-on learning experiences, internships, and research opportunities.",
    },
    {
      title: "Graduate Programs",
      description: "Our graduate programs are tailored for those seeking advanced knowledge and specialization. With a focus on research and innovation, these programs prepare students for leadership roles in academia, industry, and public service. We offer both master's and doctoral degrees in numerous fields.",
    },
    {
      title: "International Programs",
      description: "Embracing a global perspective, Marmara University provides various international programs. These include exchange programs, joint degree options, and English-taught courses. We have partnerships with universities worldwide, offering students unique opportunities for global exposure and cross-cultural learning.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            Welcome to Marmara University
          </h1>
          <TextGenerateEffect words="Discover our vibrant campus and academic programs." className="text-xl" />
        </motion.div>
      </div>
    </main>
  );
}