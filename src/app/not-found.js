import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex h-96 flex-col items-center justify-center bg-black text-white p-6">
      <h2 className="text-6xl sm:text-8xl tracking-tight">404</h2>
      <p className="text-sm sm:text-lg mt-4 text-center max-w-md">
    The page you&apos;re trying to access cannot be found. You might have entered the address incorrectly, or the page may have been relocated.
      </p>
      <Link href="/">
        <Button className="bg-white text-primary shadow-sm hover:bg-white/80 mt-6">
          Go Back Home
        </Button>
      </Link>
    </main>
  );
}
