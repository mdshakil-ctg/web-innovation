import { Poppins } from 'next/font/google';
import Link from "next/link";
import Image from 'next/image';
import { FaHome } from 'react-icons/fa';
import Navbar from './components/Navbar';
import './globals.css';

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ['latin']
});

export default function NotFound() {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black`}>
        <Navbar />

        <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute -top-30 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-500/50 blur-[120px] pointer-events-none"></div>
          <div className="absolute -bottom-30 -right-40 w-[400px] h-[400px] rounded-full bg-emerald-500/50 blur-[120px] pointer-events-none"></div>

          {/* Content */}
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            
            {/* Left Section */}
            <div>
              <h1 className="text-7xl font-bold">404</h1>
              <p className="text-gray-400 my-8 leading-relaxed">
                It looks like you&apos;ve reached a URL that does not exist. Please use the navigation above or click below to go back to our amazing website.
              </p>
              
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-5 py-3 rounded-md hover:bg-emerald-400 transition"
              >
                <FaHome className="w-5 h-5" />
                Back To Home
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex justify-center">
              <Image
                src="/error-bg.png"
                alt="404 Illustration"
                className="max-w-xs md:max-w-md"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
