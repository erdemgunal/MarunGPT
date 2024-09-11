import localFont from "next/font/local";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import { BackgroundBeams } from "@/components/ui/background-beams";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MarunGPT",
  description: "Introducing MarunGPT, your AI assistant for Marmara University. Get answers, explore ideas, and find smart solutions to campus life challenges!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn('relative h-full font-sans antialiased', geistMono)}
      >
        <main className="min-h-screen bg-gradient-to-b from-black to-primary text-white overflow-hidden">
          {/* <BackgroundBeams /> */}
          <Header />
            {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
