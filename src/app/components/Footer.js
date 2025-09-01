"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-tree-bark-dark text-ivory-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Brand */}
        <div className="text-center md:text-left text-sm">
          <span className="font-semibold text-wealth-gold">The Money Craft</span> © {new Date().getFullYear()}
        </div>

        {/* Navigation Links (no privacy/disclaimer) */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="hover:text-wealth-gold transition">Home</a>
          <a href="/about" className="hover:text-wealth-gold transition">About</a>
          <a href="/contact" className="hover:text-wealth-gold transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-wealth-gold">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={16} />
          </a> */}
          <a href="https://instagram.com/themoneycraft_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Contact Line with Policy Links */}
      <div className="text-center text-xs text-mint-gray mt-4 px-4 space-y-1 md:space-y-0 md:flex md:items-center md:justify-center md:gap-4">
        <span>📍 Canada</span>
        {/* <span>📞 +91-1234567890</span> */}
        <span>
          📧 <a href="mailto:info@themoneycraft.ca" className="underline hover:text-wealth-gold">info@themoneycraft.ca</a>
        </span>
        <span className="hidden md:inline-block">|</span>
        <a href="/privacy" className="underline hover:text-wealth-gold">Privacy Policy</a>
        <span className="hidden md:inline-block">|</span>
        <a href="/privacy" className="underline hover:text-wealth-gold">Disclaimer</a>
      </div>
    </footer>
  );
};

export default Footer;
