"use client";

import Link from "next/link";
import { FaInstagram, FaXTwitter, FaDiscord } from "react-icons/fa6";

const socialLinks = [
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/marungpt",
    },
    {
        name: "Discord",
        icon: FaDiscord,
        href: "https://discord.gg/marungpt",
    },
    {
        name: "X (Twitter)",
        icon: FaXTwitter,
        href: "https://x.com/marungpt",
    },
];

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                    <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-paper-white/80 hover:text-aether-cyan transition-colors"
                        aria-label={social.name}
                    >
                        <Icon className="w-5 h-5 sm:w-5 sm:h-5" />
                    </Link>
                );
            })}
        </div>
    );
}