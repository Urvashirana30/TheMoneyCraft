"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo4.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-money-green shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand as Link */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative">
            <Image src={logo} alt="The Money Craft Logo" fill className="object-contain" />
          </div>
          <span className="text-wealth-gold text-xl font-bold font-serif tracking-wide">
            The Money Craft
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-ivory-white hover:text-golden-sheen font-serif text-lg">
            Home
          </Link>
          <Link href="/about" className="text-ivory-white hover:text-golden-sheen font-serif text-lg">
            Our Vision
          </Link>
          {/* <Link href="/services" className="text-ivory-white hover:text-golden-sheen font-serif text-lg">
            Services
          </Link> */}
          <Link href="/contact" className="text-ivory-white hover:text-golden-sheen font-serif text-lg">
            Connect
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-30">
          <button onClick={toggleMenu} className="text-wealth-gold focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-money-green flex flex-col items-center justify-center z-20 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link href="/" onClick={toggleMenu} className="text-ivory-white text-2xl py-4 font-serif hover:text-golden-sheen">
          Home
        </Link>
        <Link href="/about" onClick={toggleMenu} className="text-ivory-white text-2xl py-4 font-serif hover:text-golden-sheen">
          Our Vision
        </Link>
        {/* <Link href="/services" onClick={toggleMenu} className="text-ivory-white text-2xl py-4 font-serif hover:text-golden-sheen">
          Services
        </Link> */}
        <Link href="/contact" onClick={toggleMenu} className="text-ivory-white text-2xl py-4 font-serif hover:text-golden-sheen">
          Connect
        </Link>
      </div>
    </header>
  );
};

export default Header;
