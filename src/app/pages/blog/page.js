"use client";

import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export default function BlogPage() {
  const featuredPosts = [
    {
      title: "Introducing MarunGPT",
      description: "Learn about the revolutionary AI assistant for Marmara University students.",
      image: "/blog-post-1.jpg",
    },
    {
      title: "AI in Education: The Future is Here",
      description: "Explore how AI is transforming the educational landscape at Marmara University.",
      image: "/blog-post-2.jpg",
    },
    {
      title: "Student Success Stories with MarunGPT",
      description: "Read about how students are benefiting from MarunGPT in their academic journey.",
      image: "/blog-post-3.jpg",
    },
    {
      title: "The Technology Behind MarunGPT",
      description: "A deep dive into the advanced AI and NLP powering MarunGPT.",
      image: "/blog-post-4.jpg",
    },
  ];

  const recentPosts = [
    {
      category: "Updates",
      title: "MarunGPT Updates: New Features Released",
      src: '/recent-posts.png',
      date: "May 15, 2023",
    },
    {
      title: "How to Make the Most of MarunGPT",
      category: "Tips & Tricks",
      src: '/recent-posts3.png',
      date: "May 10, 2023",
    },
    {
      title: "MarunGPT and Academic Integrity",
      category: "Ethics",
      src: '/recent-posts2.jpg',
      date: "May 5, 2023",
    },
    {
      title: "Faculty Perspectives on AI Assistants",
      category: "Perspectives",
      src: '/recent-posts4.png',
      date: "April 30, 2023",
    },
    {
      title: "MarunGPT: The Ultimate Study Buddy",
      category: "Study Tips",
      src: '/recent-posts5.png',
      date: "April 25, 2023",
    },
    {
      title: "AI in the Classroom: A Student's View",
      category: "Student Life",
      src: '/recent-posts6.png',
      date: "April 20, 2023",
    }
  ];

  const cards = recentPosts.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            Blog
          </h1>
          <TextGenerateEffect words="Stay Updated with the Latest in AI and Education" className="text-lg md:text-xl" />
        </motion.div>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
          <HoverEffect items={featuredPosts.map(post => ({
            title: post.title,
            description: post.description,
          }))} />
        </section>

        <div className="my-16 w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
          Recent Posts
          </h2>
          <Carousel items={cards} />
        </div>
      </div>
    </main>
  );
}