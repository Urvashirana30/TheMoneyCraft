import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroimage from '../images/Hero.png';

const HeroSection = () => {
  return (
    <section className="bg-ivory-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-money-green mb-4 leading-tight font-serif">
            Crafting your <span className="text-wealth-gold">financial future</span>
          </h1>
          <p className="text-xl text-tree-bark-dark mb-2 font-serif">
            Mastering Money, Made Simple.
          </p>
          <p className="text-lg text-forest-green mb-6 font-serif">
            📊 Insurance | Investing | Estate Planning <br />  Proudly Canada-based
          </p>

          {/* Button with Link */}
          <Link href="/about">
            <button className="bg-wealth-gold hover:bg-golden-sheen text-tree-bark-dark font-semibold py-2 px-6 rounded shadow-md transition duration-300">
              Discover More
            </button>
          </Link>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center animate-fadeIn">
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={heroimage}
              alt="Finance Expertise"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
