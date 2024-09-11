import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="p-4 z-10 relative">
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
        </header>
    );
}
