"use client";

import { useForm, useFormState } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const onSubmit = async (data) => {
    setMessage("");
    const { email } = data;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Email saved successfully!");
        setMessageColor("text-green-500");
      } else {
        setMessage("Invalid email address!");
        setMessageColor("text-red-500");
      }

      reset();
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Something went wrong! Please try again.");
      setMessageColor("text-red-500");
    }
  };

  const social_media = [
    {
      icon: FaInstagram,
      href: "https://instagram.com/marungpt",
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/marungpt",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/marungpt",
    },
  ];

  return (
    <section
      id="signup"
      className="relative bg-gradient-to-l from-black to-gray-900 py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64"
    >
      <div className="mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          Stay Informed about Updates
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="flex space-x-2 mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
              required
              className="flex-grow bg-transparent text-white placeholder-white/50 border-blue-400 transition-all duration-300 focus:border-white"
            />
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Sign up
                </>
              )}
            </Button>
          </div>
        </form>
        {message && (
          <p className={`mt-4 ${messageColor} font-semibold`}>{message}</p>
        )}
      </div>
      <footer className="py-4 relative z-10">
        <div className="flex flex-row items-center justify-between gap-4 mt-8">
          <p className="text-white text-sm">&copy; 2024 MarunGPT. All rights reserved.</p>
          <div className="flex flex-row gap-8">
            {social_media.map((item, index) => (
              <Link key={`social-${index}`} href={item.href} passHref>
                <div className="text-white hover:text-blue-600 transition-all duration-300 cursor-pointer">
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