"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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
        setResponseMessage("Your message was sent successfully!");
        setMessageColor("text-green-500");
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Message sending failed.");
        setMessageColor("text-red-500");
      }
      reset();
      setTimeout(() => setResponseMessage(""), 3000);
    } catch {
      setResponseMessage("An error has occurred.");
      setMessageColor("text-red-500");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-12 sm:px-8">
      <div className="max-w-2xl w-full p-8 rounded-lg shadow-md">
        
        {/* Başlık ve Açıklama */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            Contact Us
          </h1>
          <TextGenerateEffect
            words="Get in Touch with Us"
            className="text-lg md:text-xl mb-2"
          />
          <p className="text-white/75">
            Feel free to send us your questions, suggestions or feedback. We are here to help you.
          </p>
        </motion.div>

        {/* Form Bölümü */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
              Adınız
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
              E-posta
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
              Mesajınız
            </label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Write your message here"
              className="w-full"
              {...register("message", { required: true })}
            />
          </div>

          {/* Submit Butonu */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300 py-3 rounded-lg flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>
            ) : (
              "Send"
            )}
          </Button>
        </motion.form>

        {/* Geri Bildirim Mesajı */}
        {responseMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mt-4 ${messageColor} font-semibold text-center`}
          >
            {responseMessage}
          </motion.p>
        )}
      </div>
    </main>
  );
}