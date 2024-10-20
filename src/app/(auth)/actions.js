"use server";

import { z } from "zod";

// import { createUser, getUser } from "@/db/queries";
// import { signIn } from "./auth";

const authFormSchema = z.object({
    email: z.string().email("Geçerli bir e-posta adresi girin."),
    password: z.string().min(6, "Şifreniz en az 6 karakter olmalıdır."),
});

export const login = async (_, formData) => {
    try {
        const validatedData = authFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        return { status: "test" };

        // await signIn("credentials", {
        //     email: validatedData.email,
        //     password: validatedData.password,
        //     redirect: false,
        // });

        // return { status: "success" };
    } catch (error) {
        return { status: "test" };
        // if (error instanceof z.ZodError) {
        //     return { status: "invalid_data" };
        // }

        // return { status: "failed" };
    }
};

export const register = async (_, formData) => {
    try {
        const validatedData = authFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        return { status: "test" };
        // let [user] = await getUser(validatedData.email);

        // if (user) {
        //     return { status: "user_exists" };
        // } else {
        //     await createUser(validatedData.email, validatedData.password);
        //     await signIn("credentials", {
        //         email: validatedData.email,
        //         password: validatedData.password,
        //         redirect: false,
        //     });

        //     return { status: "success" };
        // }
    } catch (error) {
        return { status: "test" };
        // if (error instanceof z.ZodError) {
        //     return { status: "invalid_data" };
        // }

        // return { status: "failed" };
    }
};