import Image from "next/image";
import logo from '@/assets/logo/logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { BsTelephonePlus } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 bg-slate-900 text-white">
      {/* logo */}
      <div className="flex items-center">
        <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="border-2"
        />
        <p className="font-semibold text-2xl -ml-3">WEB INN<span className="text-rose-600">O</span>VATION</p>
      </div>

      {/* navigation item */}
      <div>
        <ul className="flex gap-5 justify-center items-center">
          <Link href='/'><li className="flex items-center">
            Home
          </li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/service'>
          <li className="flex items-center">
            Service
          </li>
          </Link>         
         <Link href='/websites'>
          <li className="flex items-center">
            Ready Websites
          </li>
         </Link>
          <li className="flex items-center">
            Blog
            <IoIosArrowDown />
          </li>
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
        <button className="text-green-400 border-1 rounded-md border-green-400 px-5 py-2 font-semibold">
          Get A Quote
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
