import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const emailSchema = z.string().email();

async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const unsubscribeToken = jwt.sign({ email }, process.env.JWT_SECRET, { algorithm: 'HS256' });
    const unsubscribeLink = `https://marungpt.vercel.app/unsubscribe?s=${unsubscribeToken}`;

    const mailOptions = {
        from: process.env.EMAIL_SENDER,
        to: email,
        subject: 'Newsletter Kaydı',
        html: `
            <html>
                <head>
                    <style>
                        body {
                            font-family: 'Open Sans', sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                            color: #333;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        }
                        .content {
                            text-align: center;
                        }
                        .content h1 {
                            color: #0b3160;
                            font-size: 24px;
                            margin: 0 0 20px;
                        }
                        .content p {
                            font-size: 16px;
                            margin: 0 0 20px;
                        }
                        .cta-button {
                            display: inline-block;
                            padding: 10px 20px;
                            font-size: 16px;
                            color: #fff;
                            background-color: #0b3160;
                            text-decoration: none;
                            border-radius: 4px;
                        }
                        .footer {
                            text-align: center;
                            font-size: 14px;
                            color: #666;
                            margin-top: 20px;
                        }
                        .footer a {
                            color: #0b3160;
                            text-decoration: none;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="content">
                            <h1>Teşekkürler!</h1>
                            <p>Newsletter'ımıza kaydolduğunuz için teşekkür ederiz! Güncellemeleri almak için e-posta adresinizi doğru girdiğinizden emin olun.</p>
                            <a href="#get-started" class="cta-button">Başlayın</a>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 MarunGPT. Tüm hakları saklıdır. <br>
                            <a href="${unsubscribeLink}">Abonelikten çık</a></p>
                        </div>
                    </div>
                </body>
            </html>
        `
    };

    await transporter.sendMail(mailOptions);
}

function sendToDiscord(email, success) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    const color = success ? 0x00FF00 : 0xFF0000;
    const title = success ? 'New subscriber!' : 'Failed subscription!';
    const message = success ? `> ${email}` : `Invalid email: ${email}`;
    const footerText = success ? "MarunGPT Newsletter Bot (Success)" : "MarunGPT Newsletter Bot (Failed)";
    
    const payload = {
        'username': 'MarunGPT Newsletter Bot',
        'avatar_url': 'https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg',
        'embeds': [
            {
                'title': title,
                'thumbnail': {
                    "url": "https://cdn.discordapp.com/attachments/1283402134716682260/1283404651462393877/marungpt-logo-black.jpg"
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

    try {
        emailSchema.parse(email);
        await sendEmail(email);
        sendToDiscord(email, true);
        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        sendToDiscord(email, false);
        return NextResponse.json({ message: "Invalid email address!" }, { status: 400 });
    }
}