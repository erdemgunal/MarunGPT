"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatePresence, motion } from 'framer-motion';
import NavLinks from './ui/nav-links';

const links = [
    { 'title': 'About', 'href': '/pages/about' },
    { 'title': 'Blog', 'href': '/pages/blog' },
    { 'title': 'Contact', 'href': '/pages/contact-us' },
    { 'title': 'Our School', 'href': '/pages/our-school' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/60 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="mx-auto py-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-between items-center">
                <div className='flex-shrink-0'>
                    <Link href="/" passHref>
                        <Image
                            src="/marungpt-logo-trans.png"
                            alt="MarunGPT Logo"
                            width={256}
                            height={256}
                            className='w-8 h-8'
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex items-center space-x-8 flex-grow justify-center">
                    <NavLinks links={links} />
                </div>

                {/* Get Started Button (Desktop) */}
                <div className="hidden sm:block">
                    <Button href="/pages/contact-us" className="bg-white text-primary shadow-sm hover:bg-white/80">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex sm:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <button className="text-white z-50">
                                <HiMenu size={32} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="top" className="p-4 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-start">
                            <div className="w-full flex flex-col space-y-6 mt-10">
                                <NavLinks links={links} mobile={true} toggleMobileMenu={toggleMobileMenu} />
                                <Button href="/pages/contact-us" className="bg-white text-primary shadow-sm hover:bg-white/80 mt-4" onClick={toggleMobileMenu}>
                                    Get Started
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <AnimatePresence>
                {scrolled && (
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        style={{ originX: 0.5 }}
                        className="absolute left-0 right-0 border-b border-white/20"
                    />
                )}
            </AnimatePresence>
        </nav>
    );
}