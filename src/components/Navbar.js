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
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card-strong' : 'bg-transparent'} ${scrolled ? 'shadow-lg shadow-marmara-blue-500/20' : ''}`}>
            <div className="container-mobile container-desktop flex justify-between items-center min-h-[60px]">
                <motion.div 
                    className='flex-shrink-0'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link href="/" passHref>
                        <Image
                            src="/marungpt-logo-trans.png"
                            alt="MarunGPT Logo"
                            width={256}
                            height={256}
                            className='w-10 h-10 hover:animate-glow transition-all duration-300'
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-grow justify-center">
                    <NavLinks links={links} />
                </div>

                {/* Get Started Button (Desktop) */}
                <div className="hidden md:block">
                    <Button href="/pages/contact-us" className="btn-primary shadow-lg">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <motion.button 
                                className="text-white z-50 p-2 rounded-lg glass-card hover:bg-white/20 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <HiMenu size={24} />
                            </motion.button>
                        </SheetTrigger>
                        <SheetContent 
                            side="top" 
                            className="p-0 bg-gradient-to-b from-black/95 via-marmara-blue-900/30 to-black/95 backdrop-blur-lg border-b border-marmara-blue-500/30"
                        >
                            <div className="w-full flex flex-col items-center justify-center pt-20 pb-8 space-y-8">
                                <motion.div 
                                    className="flex flex-col space-y-6 w-full px-8"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <NavLinks links={links} mobile={true} toggleMobileMenu={toggleMobileMenu} />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                >
                                    <Button 
                                        href="/pages/contact-us" 
                                        className="btn-primary w-48 shadow-lg" 
                                        onClick={toggleMobileMenu}
                                    >
                                        Get Started
                                    </Button>
                                </motion.div>
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