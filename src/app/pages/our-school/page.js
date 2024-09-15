"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { useState } from "react";
import { FaGraduationCap, FaUniversity, FaUsers, FaChevronDown } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "MarunGPT - Our School",
  description: "Learn more about Marmara University, one of the oldest educational institutions in Turkey."
};

export default function OurSchoolPage() {
  const [showMore, setShowMore] = useState(false);

  const sections = [
    {
      title: "Our Rich History",
      content: 'Marmara University is one of the oldest educational institutions in Turkey. Its roots date back to 1883 when the Hamidiye School of Commerce was established in the İzzet Efendi Mansion in Kanlıfırın. In 1890, it moved to the Hakkı Bey Mansion in Beyazıt. After the declaration of the Republic, the school was renamed the Higher School of Commerce. The university awarded its first diplomas in 1887 and transformed into the School of Economics and Commerce in 1924-1925, becoming the first institution in Turkey to offer coeducational learning for both men and women. In 1959, the institution was renamed Istanbul Academy of Economic and Commercial Sciences (İİTİA). The Sultanahmet building, used by the academy, underwent various changes until the 1970s. Finally, on July 20, 1982, it became Marmara University through the "Decree on the Organization of Higher Education Institutions."',
      icon: FaUniversity
    },
    {
      title: "Academic Excellence",
      content: "Marmara University boasts 21 faculties, 1 school, 4 vocational schools, 12 institutes, and 153 active undergraduate and associate degree programs. We offer education in five languages: Turkish, English, French, German.",
      icon: FaGraduationCap
    },
    {
      title: "MarunGPT: Your AI Companion",
      content: "MarunGPT is your AI assistant for all things at Marmara University. Get instant answers about courses, campus life, and university services. Explore ideas, find smart solutions, and navigate your academic journey with ease.",
      icon: FaUsers
    }
  ];

  return (
    <BackgroundGradientAnimation>
      <main className="relative min-h-screen bg-black/50 text-white">
        <div className="relative z-10 py-8 px-4 md:py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <Image
              src='/Y_TekRenk_KoyuZemin.png'
              alt="Marmara University Logo"
              width={200}
              height={100}
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
              Welcome to Marmara University
            </h1>
            <TextGenerateEffect words="Discover our innovative learning environment!" className="text-lg md:text-xl" />
          </motion.div>

          <motion.section 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {sections.map(({ title, content, icon: Icon }, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-lg border-none text-white hover:bg-white/20 transition-all duration-300"
              >
                <CardHeader className="flex flex-col items-center p-4 md:p-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center mb-2 md:mb-4">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <p className="text-sm md:text-base">{content}</p>
                </CardContent>
              </Card>
            ))}
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Button
              onClick={() => setShowMore(!showMore)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base"
            >
              {showMore ? "Show Less" : "Learn More"} <FaChevronDown className={cn("ml-2 transition-transform", showMore && "rotate-180")} />
            </Button>
          </motion.div>

          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                <CardContent className="p-4 md:p-6">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">Why Choose Marmara University?</h2>
                  <ul className="list-disc list-inside space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>State-of-the-art facilities and laboratories</li>
                    <li>Internationally recognized faculty members</li>
                    <li>Diverse student body from around the world</li>
                    <li>Strong industry connections and internship opportunities</li>
                    <li>Beautiful campus located in the heart of Istanbul</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
}