"use client";

import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import contactImage from '../images/CONSTACT.png';

const ContactUs = () => {
  return (
    <section className="bg-ivory-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold font-serif mb-4 text-transparent bg-clip-text bg-gradient-to-r from-money-green to-wealth-gold">
            Contact Us
          </h2>
          <p className="text-lg text-tree-bark-dark mb-8 font-serif">
            We’re here to guide your financial journey. Reach out for personalized advice, consultation, or support.
          </p>

          <div className="space-y-4 text-forest-green text-base font-serif">
            <div className="flex items-center justify-center md:justify-start">
              <FaMapMarkerAlt className="text-wealth-gold text-xl mr-3" />
              <p>Canada</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              {/* <FaPhoneAlt className="text-money-green text-xl mr-3" /> */}
              {/* <p>+91 1234567890</p> */}
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-tree-bark-dark text-xl mr-3" />
              <p>info@themoneycraft.ca</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={contactImage}
              alt="Contact The Money Craft"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
