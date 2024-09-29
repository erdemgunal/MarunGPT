"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks({ links, mobile = false, toggleMobileMenu }) {
    const pathname = usePathname();

    return (
        <>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={clsx(
                        "text-white",
                        pathname === link.href ? 'font-bold' : 'font-normal',
                        mobile ? 'block text-lg' : 'inline-block'
                    )}
                    onClick={mobile ? toggleMobileMenu : null} // Close the menu on mobile after clicking
                >
                    {link.title}
                </Link>
            ))}
        </>
    );
}
