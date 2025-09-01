"use client";

import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-ivory-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif text-transparent bg-clip-text bg-gradient-to-r from-money-green to-wealth-gold">
          Ready to Transform Your Financial Future?
        </h2>
        <p className="text-lg text-tree-bark-dark mb-10 font-serif">
          Let <span className="text-money-green font-semibold">The Money Craft</span> guide your next step toward financial clarity. From personalized wealth strategies to secure insurance plans — we make money simple.
        </p>
        <a
          href="/contact"
          className="inline-block bg-money-green text-ivory-white hover:bg-wealth-gold hover:text-tree-bark-dark text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
