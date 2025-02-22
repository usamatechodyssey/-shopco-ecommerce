"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => setNavOpen(!navOpen);

  return (
    <div>
      {/* Top Bar */}
      <div className="flex h-[34px] md:h-[38px] text-white bg-black justify-center items-center">
        <div className="flex text-white text-[10px] md:text-[12px] lg:text-[14px] font-normal gap-1.5">
          Sign up and get 20% off your first order.
          <span className="font-medium underline decoration-white underline-offset-4">
            Sign Up Now
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center text-white h-[56px] md:h-[66px] lg:h-[92px] p-4 md:px-6 lg:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon (Mobile Only) */}
          <div className="flex xl:hidden">
            <button onClick={handleNavToggle} aria-label="Toggle Navigation">
              <Image height={16} width={20} src="/Vector.svg" alt="Menu" />
            </button>
          </div>

          {/* Logo */}
          <div className="w-[126px] md:w-[160px]">
            <Link href="/">
              <Image src="/SHOP.CO.svg" height={25} width={159} alt="Logo" />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="xm:hidden xl:flex gap-4 lg:gap-8 text-black">
          <ul className="flex gap-4 md:gap-6 lg:gap-8 items-center">
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Brands
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Bar */}
          <div className="hidden md:block md:w-[400px] lg:w-[600px]">
            <div className="relative">
              <Image
                src="/serch gray.svg"
                alt="Search Icon"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-10 md:h-12 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-full focus:outline-none"
              />
            </div>
          </div>

          {/* Icons */}
          <button className="md:hidden">
            <Image height={24} width={24} src="/Serch icon.svg" alt="Search" />
          </button>
          <button>
            <Image height={24} width={24} src="/shop icon.svg" alt="Shop" />
          </button>
          <button>
            <Image height={24} width={24} src="/admin icon.svg" alt="Admin" />
          </button>
        </div>
      </header>
    </div>
  );
}
