"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks({ links }) {
    const pathname = usePathname();
    return (
        <nav className='flex-grow'>
            <ul className='flex justify-center space-x-8'>
                {links.map((link,index) => (
                    <li key={index}>
                        <Link href={link.href}>
                            <div className={clsx('text-sm text-white hover:text-white/50 transition-all duration-300', {
                                'font-bold': pathname === link.href,
                            })}>
                                {link.title}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
