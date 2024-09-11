"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaXTwitter,FaDiscord } from "react-icons/fa6";
import { SparklesCore } from "@/components/ui/sparkles";
import { Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted email:', email);
    alert('Teşekkürler! Güncellemelerden haberdar olmak için e-posta adresinizi kontrol edin.');
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
    <section id="signup" className="relative bg-black text-white py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full absolute inset-0"
        particleColor="#4299e1"
      />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Güncellemelerden Haberdar Olun
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex space-x-2 mb-6">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/10 text-white placeholder-white/50 border-blue-400 transition-all duration-300 focus:border-white"
            />
            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform">
              <Mail className="w-4 h-4 mr-2" />
              Kaydol
            </Button>
          </div>
        </form>
      </div>

      <footer className="py-4 relative z-10">
        <div className="flex flex-row items-center justify-between gap-8 mt-16">
          <p className="text-white text-sm">
            &copy; 2024 MarunGPT. Tüm hakları saklıdır.
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
