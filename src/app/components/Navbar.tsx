"use client";
import Image from "next/image";
import logo from "@/assets/logo/logo.png";
import { BsTelephonePlus } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./shared/Button";

const Navbar = () => {
  const path = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // sample state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-20 flex justify-between items-center lg:px-12 py-2 lg:py-2 bg-slate-900 text-white shadow-md">
      {/* logo */}
      <Link href="/" className="cursor-pointer pl-5 lg:pl-0">
        <div className="flex items-center">
          <div className="w-[50px] md:w-[120px] h-16">
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={120}
              className="w-full h-full object-cover transform -rotate-15"
            />
          </div>
          <p className="font-semibold text-white lg:-ml-6 text-md lg:text-md italic">
            WEB INN<span className="text-rose-600">O</span>VATION
          </p>
        </div>
      </Link>

      {/* navigation item for desktop */}
      <div className="hidden md:flex">
        <ul className="flex gap-5 justify-center items-center">
          <Link href="/">
            <li className={`${path == "/" ? "text-green-500" : ""}`}>Home</li>
          </Link>
          <Link href="/about">
            <li className={`${path == "/about" ? "text-green-500" : ""}`}>
              About
            </li>
          </Link>
          <Link href="/service">
            <li className={`${path == "/service" ? "text-green-500" : ""}`}>
              Service
            </li>
          </Link>
          <Link href="/websites">
            <li className={`${path == "/websites" ? "text-green-500" : ""}`}>
              Portfolio
            </li>
          </Link>
          <Link href="/pricing">
            <li className={`${path == "/pricing" ? "text-green-500" : ""}`}>
              Pricing
            </li>
          </Link>
        </ul>
      </div>

      {/* right side buttons */}
      <div className="flex gap-4 lg:ml-5 items-center">
        {/* phone info (hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center gap-2">
          <BsTelephonePlus className="text-green-500" />
          <div className="text-xs">
            <p>For Client Support:</p>
            <p>+880-1815-149399</p>
          </div>
        </div>

        {/* get a quote button */}
        <Link href="#contactme" className="hidden lg:flex">
          <button className="text-green-400 border rounded-md border-green-400 px-5 py-2 font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition">
            Get A Quote
          </button>
        </Link>

        {/* login / profile */}
        {!isLoggedIn ? (
          <Link href="/login" className="hidden md:flex">
            <Button text="Login"/>
          </Link>
        ) : (
          <Link href="/profile" className="hidden md:flex">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500 cursor-pointer">
              <Image
                src="https://via.placeholder.com/150"
                alt="User Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </Link>
        )}

        {/* Hamburger Menu (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none mr-4"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-gray-800 to-purple-600 text-white shadow-lg md:hidden animate-slide-down">
          <ul className="flex flex-col gap-4 py-6 px-6 text-lg">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/" ? "text-green-500" : ""}`}>Home</li>
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/about" ? "text-green-500" : ""}`}>
                About
              </li>
            </Link>
            <Link href="/service" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/service" ? "text-green-500" : ""}`}>
                Service
              </li>
            </Link>
            <Link href="/websites" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/websites" ? "text-green-500" : ""}`}>
                Portfolio
              </li>
            </Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>
              <li className={`${path == "/pricing" ? "text-green-500" : ""}`}>
                Pricing
              </li>
            </Link>
            {/* Mobile login / profile */}
            {!isLoggedIn ? (
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="mt-4 text-black bg-green-600 hover:bg-green-600 px-4 py-2 rounded-md font-semibold w-full transition">
                  Login
                </button>
              </Link>
            ) : (
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 cursor-pointer mt-4">
                  <Image
                    src="https://via.placeholder.com/150"
                    alt="User Profile"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
