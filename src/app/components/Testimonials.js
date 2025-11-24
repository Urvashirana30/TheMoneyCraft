"use client";

import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex Nguyen",
    position: "Toronto, ON",
    text: "I had no idea how to start investing in Canada as a newcomer. The Money Craft explained everything clearly and helped me open my TFSA and RRSP. Their guidance gave me confidence and peace of mind."
  },
  {
    name: "Brittany Legre",
    position: "Moncton, NB",
    text: "I was totally confused between term and whole life insurance. At The Money Craft, Yogesh listened to my goals, explained the differences between term, whole, and universal life. He set me up with the perfect combo of term and permanent insurance."
  },
  {
    name: "Amrit & Sonia Gill",
    position: "Mississauga, ON",
    text: "We didn’t even know about RESP grants until Yogesh explained it to us. Thanks to his help, we opened an RESP for our daughter and already received our first government match. Truly grateful!"
  },
  {
    name: "Tanya Campbell",
    position: "Saint John, NB",
    text: "I always thought investing was only for rich people. After just one session with The Money Craft, I finally understood how compound interest works and how to make my money grow. I opened my TFSA the same day!"
  },
  {
    name: "Gurpreet Singh",
    position: "Brampton, ON",
    text: "They helped me structure my estate plan and reduce taxes for my kids. The team at The Money Craft made everything simple and understandable. Highly recommend for retirement planning."
  },
  {
    name: "Jordan McCarthy",
    position: "Fredericton, NB",
    text: "I never thought I needed critical illness insurance until Yogesh explained how one diagnosis could affect my entire income. He helped me get a plan that covers major illnesses without breaking the bank. I feel more secure now knowing I’m protected."
  },

];

const Testimonials = () => {
  return (
    <section className="bg-ivory-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col justify-between hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl text-wealth-gold mb-2">
                <FaQuoteLeft />
              </div>
              <p className="text-forest-green italic mb-4 font-serif leading-relaxed">
                “{testimonial.text}”
              </p>
              <div className="text-4xl text-wealth-gold mb-2">
                <FaQuoteRight />
              </div>
              <h3 className="text-xl font-semibold text-tree-bark-dark font-serif">
                {testimonial.name}
              </h3>
              <p className="text-money-green text-sm">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
