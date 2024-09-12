"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { 'title': 'About', 'href': '/pages/about' },
        { 'title': 'Blog', 'href': '/pages/blog' },
        { 'title': 'Contact', 'href': '/pages/contact' },
        { 'title': 'Our School', 'href': '/pages/our-school' },
    ];

    return (
        <header className={`sticky top-0 z-50 px-0 md:px-0 transition-all duration-300 bg-black/60 backdrop-blur-sm`}>
            <div className="w-full mx-auto flex justify-between items-center py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
                <div className="flex-shrink-0">
                    <Link href="/" passHref>
                        <Image
                            src="/marungpt-logo-trans.png"
                            alt="MarunGPT Logo"
                            width={256}
                            height={256}
                            className="w-8 h-8"
                        />
                    </Link>
                </div>
                <nav className="flex-grow">
                    <ul className="flex justify-center space-x-8">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.href} className='text-sm text-white hover:text-white/50 transition-all duration-300'>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Button href="#get-started" className="bg-white text-primary shadow-sm hover:bg-white/80">
                    Get Started
                </Button>
            </div>

            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        style={{ originX: 0.5 }}
                        className="absolute left-0 right-0 border-b border-white/20"
                    />
                )}
            </AnimatePresence>
        </header>
    );
}
