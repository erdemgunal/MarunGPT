"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "Introducing MarunGPT",
      description: "Learn about the revolutionary AI assistant for Marmara University students.",
      image: "/blog-post-1.jpg",
      link: "/blog/introducing-marungpt"
    },
    {
      title: "AI in Education: The Future is Here",
      description: "Explore how AI is transforming the educational landscape at Marmara University.",
      image: "/blog-post-2.jpg",
      link: "/blog/ai-in-education"
    },
    {
      title: "Student Success Stories with MarunGPT",
      description: "Read about how students are benefiting from MarunGPT in their academic journey.",
      image: "/blog-post-3.jpg",
      link: "/blog/student-success-stories"
    },
    {
      title: "The Technology Behind MarunGPT",
      description: "A deep dive into the advanced AI and NLP powering MarunGPT.",
      image: "/blog-post-4.jpg",
      link: "/blog/technology-behind-marungpt"
    },
  ];

  const recentPosts = [
    {
      title: "MarunGPT Updates: New Features Released",
      date: "May 15, 2023",
      link: "/blog/marungpt-updates"
    },
    {
      title: "How to Make the Most of MarunGPT",
      date: "May 10, 2023",
      link: "/blog/maximize-marungpt"
    },
    {
      title: "MarunGPT and Academic Integrity",
      date: "May 5, 2023",
      link: "/blog/academic-integrity"
    },
    {
      title: "Faculty Perspectives on AI Assistants",
      date: "April 30, 2023",
      link: "/blog/faculty-perspectives"
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
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            MarunGPT Blog
          </h1>
          <TextGenerateEffect words="Stay Updated with the Latest in AI and Education" className="text-xl" />
        </motion.div>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
          <HoverEffect items={featuredPosts.map(post => ({
            title: post.title,
            description: post.description,
          }))} />
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6"
              >
                <Link href={post.link} className="block hover:text-blue-400 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-blue-400">{post.date}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Subscribe to Our Newsletter</h2>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-r-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}