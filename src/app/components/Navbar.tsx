"use client"
import Image from "next/image";
import logo from '@/assets/logo/logo.png'
import { BsTelephonePlus } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  return (
    <nav className="fixed top-0 w-full z-10 flex justify-between items-center px-12 py-2 bg-slate-900 text-white">
      {/* logo */}
      <div className="flex items-center">
        <Image
        src={logo}
        alt="logo"
        width={80}
        height={80}
        className="border-2"
        />
        <p className="font-semibold text-green-500 text-xl">WEB INN<span className="text-rose-600">O</span>VATION</p>
      </div>

      {/* navigation item */}
      <div>
        <ul className="flex gap-5 justify-center items-center">
          <Link href='/'><li className={`flex items-center ${path == '/' ? 'text-green-500' : ''}`}>
            Home
          </li></Link>
          <Link href='/about'><li className={`flex items-center ${path == '/about' ? 'text-green-500' : ''}`}>About</li></Link>
          <Link href='/service'>
          <li className={`flex items-center ${path == '/service' ? 'text-green-500' : ''}`}>
            Service
          </li>
          </Link>         
         <Link href='/websites'>
          <li className={`flex items-center ${path == '/websites' ? 'text-green-500' : ''}`}>
            Demo Websites
          </li>
         </Link>
          <Link href='/pricing'>
          <li className={`flex items-center ${path == '/pricing' ? 'text-green-500' : ''}`}>
            Pricing
          </li>
          </Link>
        </ul>
      </div>
      {/* quoto button */}
      <div className="flex gap-5">
        <div className="flex items-center justify-center gap-2">
          <BsTelephonePlus className="text-green-500" />
          <div className="text-xs">
            <p>For Client Support:</p>
          <p >+880-1815-149399</p>
          </div>
        </div>
        <Link href='#contactme'>
        <button className="text-green-400 border-1 rounded-md border-green-400 px-5 py-2 font-semibold cursor-pointer">
          Get A Quote
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
