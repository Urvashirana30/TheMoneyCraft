"use client";

import React from "react";
import Image from "next/image";
import { FaDollarSign, FaHandshake, FaChartLine, FaBullhorn } from "react-icons/fa";
import aboutImage from "../images/whoweare1.png";

const AboutUs = () => {
  return (
    <>
      {/* Section 1: Who We Are */}
      <section className="bg-ivory-white min-h-screen py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
              Who We Are
            </h2>
            <p className="text-lg text-tree-bark-dark font-serif leading-relaxed">
          At The Money Craft, we believe everyone deserves clear, trustworthy guidance to navigate their financial journey with confidence. Our team is passionate about making finance simple and approachable, offering personalized support that reflects your unique goals and circumstances. Together, we help you craft a future that’s secure, meaningful, and truly your own.
            <br className="hidden sm:block" />
              <span className="block mt-4 text-forest-green">
                Your future is our craft. Canada-based expertise.
              </span>
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none md:mx-0">
            <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 duration-300">
              <Image
                src={aboutImage}
                alt="Who We Are - The Money Craft"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Expertise */}
      <section className="bg-mint-gray min-h-screen py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-money-green to-wealth-gold">
            Our Expertise
          </h2>
          <p className="text-lg text-tree-bark-dark mb-12 font-serif">
            We empower your financial decisions with deep industry insights, ethical guidance, and strategic tools that simplify wealth building.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <FaDollarSign className="text-money-green text-6xl mb-4 mx-auto animate-pulse" />
              <h3 className="text-xl font-semibold text-tree-bark-dark mb-2 font-serif">
                Wealth Planning
              </h3>
              <p className="text-forest-green">
                Smart and structured planning for sustainable wealth across generations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <FaHandshake className="text-wealth-gold text-6xl mb-4 mx-auto animate-spin-slow" />
              <h3 className="text-xl font-semibold text-tree-bark-dark mb-2 font-serif">
                Personalized Advisory
              </h3>
              <p className="text-forest-green">
                Financial guidance tailored to your life goals, income, and values.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <FaChartLine className="text-money-green text-6xl mb-4 mx-auto animate-bounce" />
              <h3 className="text-xl font-semibold text-tree-bark-dark mb-2 font-serif">
                Investment Strategy
              </h3>
              <p className="text-forest-green">
                Insight-driven plans to grow your capital with confidence and clarity.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
              <FaBullhorn className="text-wealth-gold text-6xl mb-4 mx-auto animate-bounce" />
              <h3 className="text-xl font-semibold text-tree-bark-dark mb-2 font-serif">
                Financial Literacy
              </h3>
              <p className="text-forest-green">
                Empowering you with the knowledge to take control of your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
