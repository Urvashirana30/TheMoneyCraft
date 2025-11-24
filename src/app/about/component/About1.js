"use client";

import React from "react";
import Image from "next/image";
import images from "../images/Mission.png";

const About1 = () => {
  return (
    <section className="bg-ivory-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
          Our Mission & Vision
        </h2>

        {/* Layout */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Blocks */}
          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-tree-bark-dark font-serif mb-2">Our History</h3>
              <p className="text-forest-green leading-relaxed">
             Founded with a passion for demystifying finance, The Money Craft began as a vision to simplify complex financial concepts and make them accessible to everyone. Over the years, we have grown into a trusted partner for countless clients across Canada, helping them navigate insurance, investments, and financial planning with confidence. Our journey continues as we innovate and expand to meet the evolving needs of our community.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-tree-bark-dark font-serif mb-2">Our Mission</h3>
              <p className="text-forest-green leading-relaxed">
            Our mission is to educate, empower, and inspire Canadians to build financial security and achieve their dreams. We strive to deliver honest, transparent, and tailored financial advice that fits each client’s unique needs — making complicated financial matters easy to understand and apply.
             </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-tree-bark-dark font-serif mb-2">Our Vision</h3>
              <p className="text-forest-green leading-relaxed">
            To become Canada’s most trusted source for financial education and advisory services, helping every individual and family craft a prosperous and secure financial future.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-tree-bark-dark font-serif mb-2">Our Values</h3>
              <p className="text-forest-green leading-relaxed">
             At The Money Craft, we value integrity, honesty, and transparency. We empower our clients with knowledge to make informed decisions, always keeping your goals at the center. We embrace innovation and are dedicated to building strong, supportive relationships within our community.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
              <Image
                src={images}
                alt="Mission and Vision - The Money Craft"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
