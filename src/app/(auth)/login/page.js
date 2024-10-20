"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthForm } from "@/components/custom/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";
import { login } from "../actions";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("pending");
    
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
   
    console.log(email, password);
    
    // try {
    //   const result = await login(form);
    //   if (result.status === "success") {
    //     router.push("/");
    //   } else {
    //     setStatus("error");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setStatus("error");
    // }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
          <h3 className="text-xl font-semibold dark:text-zinc-50">Sign In</h3>
          <p className="text-sm text-white/50 dark:text-zinc-400">
            Use your email and password to sign in
          </p>
        </div>
        <AuthForm action={handleSubmit} defaultEmail={email}>
          <SubmitButton>Sign in</SubmitButton>
          <p className="text-center text-sm text-white/50 mt-4 dark:text-zinc-400">
            {"Don't have an account? "}
            <Link
              href="/register"
              className="font-semibold text-white hover:underline dark:text-zinc-200"
            >
              Sign up
            </Link>
            {" for free."}
          </p>
        </AuthForm>
      </div>
    </div>
  );
}