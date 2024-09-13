import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(1, "Ad alanı boş olamaz."),
    email: z.string().email("Geçerli bir e-posta adresi girin."),
    message: z.string().min(1, "Mesaj alanı boş olamaz."),
});

function sendToDiscord(name, email, message, success) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const color = success ? 0x00FF00 : 0xFF0000;
    const title = success ? 'New contact message!' : 'Failed contact message!';
    const messageContent = success ? `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}` : `Invalid contact message:\n**Name:** ${name || "N/A"}\n**Email:** ${email || "N/A"}\n**Message:** ${message || "N/A"}`;
    const footerText = success ? "MarunGPT Contact Form (Success)" : "MarunGPT Contact Form (Failed)";
    
    const payload = {
        'username': 'MarunGPT Contact Form',
        'avatar_url': 'https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg',
        'embeds': [
            {
                'title': title,
                'thumbnail': {
                    "url": "https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg"
                },
                'color': color,
                'description': messageContent,
                'footer': {
                    "text": footerText
                },
                "timestamp": (new Date()).toISOString()
            }
        ]
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
}

export async function POST(request) {
    try {
        const data = await request.json();

        const parsedData = contactSchema.safeParse(data);
        if (parsedData.success) {
            const { name, email, message } = parsedData.data;

            await sendToDiscord(name, email, message, true);
            return NextResponse.json({ message: "Mesajınız başarıyla gönderildi!" });
        } else {
            const { name, email, message } = data;

            await sendToDiscord(name, email, message, false);
            return NextResponse.json({ error: parsedData.error.errors[0].message }, { status: 400 });
        }
    } catch (error) {
        const { name = "Unknown", email = "Unknown", message = "Unknown" } = await request.json();

        await sendToDiscord(name, email, message, false);
        return NextResponse.json({ error: "Bir hata oluştu." }, { status: 500 });
    }
}
