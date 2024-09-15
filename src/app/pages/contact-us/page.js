"use client";
import { useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { motion } from 'framer-motion';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const [responseMessage, setResponseMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  // Form submit handler
  const onSubmit = async (data) => {
    setResponseMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      setTimeout(() => {
        setResponseMessage("");
      }, 3000);
    } catch (error) {
      setResponseMessage("An error has occurred.");
      setMessageColor("text-red-500");
    }
  };

  return (
    <main className="flex flex-col items-center relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative z-10 px-4 py-16 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 tracking-tight">
            Contact Us
          </h1>
          <TextGenerateEffect words="Get in Touch with Us" className="text-xl mb-8 tracking-tight" />
          <p className='text-lg text-center mb-10 text-white/50 max-w-md'>
            Feel free to send us your questions, suggestions or feedback. We are here to help you.
          </p>
        </motion.div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 max-w-lg mx-auto">
          <div>
            <label className="block text-black font-semibold mb-1" htmlFor="name">
              Adınız
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-1" htmlFor="email">
              E-posta
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-1" htmlFor="message">
              Mesajınız
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message here"
              className="w-full"
              {...register("message", { required: true })}
            />
          </div>

          {/* Button with loading state */}
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white hover:bg-blue-500 transition-colors duration-300 flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin h-5 w-5 border-2 border-t-transparent border-white rounded-full"></span>
            ) : (
              "Send"
            )}
          </Button>
        </form>

        {/* Display Response Message */}
        {responseMessage && (
          <p className={`mt-4 ${messageColor} font-semibold`}>{responseMessage}</p>
        )}
      </div>
    </main>
  );
}
