"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from 'framer-motion';

export default function Header() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                // Scroll down
                controls.start({ y: '-100%' });
            } else {
                // Scroll up
                controls.start({ y: '0%' });
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, controls]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 p-4 z-50"
            initial={{ y: '0%' }}
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-shrink-0">
                    <Link href="/" passHref>
                        <Image
                            src="/marungpt-logo-trans.png"
                            alt="MarunGPT Logo"
                            width={256}
                            height={256}
                            className="w-16 h-16"
                        />
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Button href="#features" className="bg-white text-primary shadow-sm hover:bg-white/80">
                                Özellikler
                            </Button>
                        </li>
                        <li>
                            <Button href="#signup" className="bg-white text-primary shadow-sm hover:bg-white/80">
                                Kaydol
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}
