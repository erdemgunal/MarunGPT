import { NextResponse } from "next/server";
import { z } from "zod";

function sendToDiscord(email, success) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    const color = success ? 0x00FF00 : 0xFF0000; // Yeşil (Başarı) veya Kırmızı (Hata)
    const title = success ? 'New subscriber!' : 'Failed subscription!';
    const message = success ? `> ${email}` : `Invalid email: ${email}`;
    const footerText = success ? "MarunGPT Newsletter Bot (Success)" : "MarunGPT Newsletter Bot (Failed)";
    
    const payload = {
        'username': 'MarunGPT Newsletter Bot',
        'avatar_url': 'https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg?ex=66e430b9&is=66e2df39&hm=c9b7fc5f6ea10ef3aff5878687c957be8bb1164a172d0959b75870b4a5161e23&',
        'embeds': [
            {
                'title': title,
                'thumbnail': {
                    "url":"https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg?ex=66e430b9&is=66e2df39&hm=c9b7fc5f6ea10ef3aff5878687c957be8bb1164a172d0959b75870b4a5161e23&"
                },
                'color': color,
                'fields': [
                    {'name': 'Email', 'value': message}
                ],
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
    const { email } = await request.json();

    const emailSchema = z.string().email();

    try {
        emailSchema.parse(email);
        // saveToDatabase(email);  // Gelecekte kullanmak için saklanacak
        
        sendToDiscord(email, true);  // Başarılı durumda yeşil
        return NextResponse.json({ message: "Email saved successfully!" });
    } catch (error) {
        sendToDiscord(email, false);  // Başarısız durumda kırmızı
        return NextResponse.json({ message: "Invalid email address!" }, { status: 400 });
    }
}
