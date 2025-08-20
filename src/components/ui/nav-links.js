"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function NavLinks({ links, mobile = false, toggleMobileMenu }) {
    const pathname = usePathname();

    const linkVariants = {
        hidden: { opacity: 0, y: mobile ? 20 : 0 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            {links.map((link, index) => (
                <motion.div
                    key={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: mobile ? index * 0.1 : 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href={link.href}
                        className={clsx(
                            "relative text-white transition-all duration-300",
                            pathname === link.href 
                                ? 'font-bold text-marmara-blue-300' 
                                : 'font-medium hover:text-marmara-blue-200',
                            mobile 
                                ? 'block text-xl py-3 px-4 text-center glass-card hover:bg-white/10 rounded-lg' 
                                : 'inline-block px-3 py-2 rounded-lg hover:bg-white/10',
                            pathname === link.href && !mobile && 'bg-white/10'
                        )}
                        onClick={mobile ? toggleMobileMenu : null}
                    >
                        {link.title}
                        {pathname === link.href && (
                            <motion.div
                                className={clsx(
                                    "absolute bg-marmara-blue-400",
                                    mobile 
                                        ? "bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5"
                                        : "bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5"
                                )}
                                layoutId="activeTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                </motion.div>
            ))}
        </>
    );
}
