"use client";
import { motion } from 'framer-motion'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export default function OurSchool() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            Our School
          </h1>
          <TextGenerateEffect words="Marmara University" className="text-xl" />
        </motion.div>
      </div>
    </main>
  )
}
