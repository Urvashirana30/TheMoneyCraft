"use client";

import React from 'react';
import Image from 'next/image';
import aboutImage from '../images/Abouthero.png';

const AboutHero = () => {
  return (
    <section className="relative bg-ivory-white min-h-screen py-20 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
            About Us
          </h2>
          <p className="text-lg text-tree-bark-dark font-serif leading-relaxed">
        At The Money Craft, we believe financial literacy is the key to unlocking your true potential. We empower Canadians to take control of their financial future through personalized advice, clear education, and trusted guidance. Whether you’re just starting your financial journey or looking to grow your wealth, we provide the tools and knowledge you need to make smart, confident decisions.
           <br className="hidden sm:block" />
            <span className="block mt-4 text-forest-green">
              Your future is our craft.
            </span>
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 w-full max-w-md mx-auto md:max-w-none md:mx-0 z-10">
          <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutImage}
              alt="About The Money Craft"
              layout="fill"
              objectFit="cover"
              className="transition-transform transform hover:scale-105 duration-300 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-[-5rem] left-[-5rem] w-64 h-64 bg-money-green rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-[-5rem] right-[-5rem] w-64 h-64 bg-wealth-gold rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default AboutHero;
