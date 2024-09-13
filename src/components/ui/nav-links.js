"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks({ links, mobile = false, toggleMobileMenu }) {
    const pathname = usePathname();
    
    return (
        <nav className={mobile ? 'w-full' : 'flex-grow'}>
            <ul className={clsx(
                mobile ? 'flex flex-col space-y-6 items-center' : 'flex justify-center space-x-8',
            )}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link href={link.href}>
                            <div
                                onClick={mobile ? toggleMobileMenu : null}
                                className={clsx(
                                    'text-sm text-white hover:text-white/50 transition-all duration-300',
                                    {
                                        'font-bold': pathname === link.href,
                                        'text-2xl': mobile,
                                    }
                                )}
                            >
                                {link.title}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
