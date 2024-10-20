"use client";

import React from 'react'
import Link from 'next/link'
import { AuthForm } from "@/components/custom/auth-form";
import { SubmitButton } from "@/components/custom/submit-button";
import { useState } from 'react'
// import { useRouter } from 'next/router'

export default function RegisterPage() {
    // const router = useRouter();

    const [email, setEmail] = useState("");
    // const [state, setState] = useState({ status: "idle" });

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
            <div className="w-full max-w-md overflow-hidden rounded-2xl gap-12 flex flex-col">
                <div className="flex flex-col items-center justify-center gap-2 px-4 text-center sm:px-16">
                    <h3 className="text-xl font-semibold dark:text-zinc-50">Sign Up</h3>
                    <p className="text-sm text-white/50 dark:text-zinc-400">
                        Create an account with your email and password
                    </p>
                </div>
                <AuthForm action={handleSubmit} defaultEmail={email}>
                    <SubmitButton>Sign Up</SubmitButton>
                    <p className="text-center text-sm text-white/50 mt-4 dark:text-zinc-400">
                        {"Already have an account? "}
                        <Link
                            href="/login"
                            className="font-semibold text-white hover:underline dark:text-zinc-200"
                        >
                            Sign in
                        </Link>
                        {" instead."}
                    </p>
                </AuthForm>
            </div>
        </div>
    );
}
