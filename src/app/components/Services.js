"use client";

import React from "react";
import {
  FaHeartbeat,
  FaChartLine,
  FaMoneyBillWave,
  FaGavel,
  FaUserGraduate,
  FaUserShield,
} from "react-icons/fa";

const gradientIconStyle = {
  background: "linear-gradient(to right, #F4B400, #0B4F2D)", // wealth-gold to money-green
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
};

const Services = () => {
  return (
    <section className="bg-mint-gray py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
          Our Services
        </h2>

        {/* Subheading */}
        <p className="text-center text-tree-bark-dark font-serif text-lg max-w-3xl mx-auto mb-12">
At The Money Craft, we provide practical and personalized financial solutions designed to help Canadians at every life stage. Whether youre building your wealth, protecting your loved ones, managing debt, or securing your legacy — we make financial planning simple, relevant, and accessible.        </p>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {/* Life & Health Insurance */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaHeartbeat style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Life & Health Insurance
            </h3>
            <p className="text-forest-green text-center">
              Term & Whole Life, Disability, Critical Illness, and Super Visa plans to protect your loved ones.
            </p>
          </div>

          {/* Investment Planning */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaChartLine style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Investment Planning
            </h3>
            <p className="text-forest-green text-center">
              RRSP, TFSA, FHSA, and RESP strategies tailored to your goals for retirement, education, or a first home.
            </p>
          </div>

          {/* Debt Management */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaMoneyBillWave style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Debt Management
            </h3>
            <p className="text-forest-green text-center">
              Understand your debt and create a step-by-step plan to repay it and regain financial confidence.
            </p>
          </div>

          {/* Estate Planning */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaGavel style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Estate Planning
            </h3>
            <p className="text-forest-green text-center">
              Will setup, inheritance tax strategy, and wealth transfer planning for future generations.
            </p>
          </div>

          {/* Financial Coaching */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaUserGraduate style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Financial Coaching
            </h3>
            <p className="text-forest-green text-center">
              1-on-1 coaching on budgeting, goal-setting, credit, and lifelong money habits for lasting success.
            </p>
          </div>

          {/* Insurance for Business Owners */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
            <div className="text-5xl mb-4 flex justify-center">
              <FaUserShield style={gradientIconStyle} />
            </div>
            <h3 className="text-2xl font-semibold text-center text-tree-bark-dark mb-2 font-serif">
              Insurance for Business Owners
            </h3>
            <p className="text-forest-green text-center">
              Buy-Sell Agreements, Key Person Coverage, and Overhead Insurance to protect your business and income.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
