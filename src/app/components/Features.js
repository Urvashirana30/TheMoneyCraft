"use client";

import React from "react";
import {
  FaThumbsUp,
  FaShieldAlt,
  FaUserTie,
  FaChartLine,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-mint-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Expertise */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaUserTie className="text-money-green text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              Financial Expertise
            </h3>
            <p className="text-forest-green font-serif">
              Decades of experience in wealth building, risk planning, and investment strategy tailored for you.
            </p>
          </div>

          {/* Reliability */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaShieldAlt className="text-wealth-gold text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              Proven Reliability
            </h3>
            <p className="text-forest-green font-serif">
              Trusted by families and businesses across Canada with secure and transparent financial practices.
            </p>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaChartLine className="text-money-green text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              Tangible Results
            </h3>
            <p className="text-forest-green font-serif">
              Data-driven strategies and consistent outcomes that speak louder than promises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Innovation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaLightbulb className="text-wealth-gold text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              100% Online Service
            </h3>
            <p className="text-forest-green font-serif">
              Get expert guidance and support from anywhere in Canada, with seamless virtual consultations and easy-to-use digital tools.
            </p>
          </div>

          {/* Trust */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaHandshake className="text-money-green text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              Built on Trust
            </h3>
            <p className="text-forest-green font-serif">
              Long-term relationships rooted in integrity, honesty, and client-first values.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaThumbsUp className="text-wealth-gold text-5xl mb-4 mx-auto animate-pulse" />
            <h3 className="text-2xl font-semibold text-tree-bark-dark mb-2 font-serif">
              Quality Assurance
            </h3>
            <p className="text-forest-green font-serif">
              We don’t settle. Every service is delivered with precision, clarity, and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
