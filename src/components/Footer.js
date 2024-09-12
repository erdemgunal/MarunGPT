"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaXTwitter,FaDiscord } from "react-icons/fa6";
import { Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted email:', email);
    alert('under construction. please check back later.');
    setEmail("");
  };

  const social_media = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/marungpt"
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/marungpt"
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/marungpt"
    }
  ]

  return (
    <section id="signup" className="relative bg-gradient-to-l from-black to-gray-900 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Stay Informed about Updates
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex space-x-2 mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/10 text-white placeholder-white/50 border-blue-400 transition-all duration-300 focus:border-white"
            />
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Kaydol
            </Button>
          </div>
        </form>
      </div>
      <footer className="py-4 relative z-10">
        <div className="flex flex-row items-center justify-between gap-4 mt-8">
          <p className="text-white text-sm">
            &copy; 2024 MarunGPT. All rights reserved.
          </p>
          <div className="flex flex-row gap-8">
            {social_media.map((item, index) => (
              <Link key={`social-${index}`} href={item.href} passHref>
                <div className="text-white hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  <item.icon className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </section>
);
}
