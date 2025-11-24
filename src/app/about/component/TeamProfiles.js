"use client";

import React from 'react';
import Image from 'next/image';
import VinodImage from '../images/Abouthero.png';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const TeamProfiles = () => {
  const teamMembers = [
    {
      name: 'Vinod Kumar Yadav',
      position: 'Director',
      image: VinodImage,
      description:
        'Vinod Kumar Yadav is the Director of The Money Craft. With decades of experience in the financial world, he leads with vision, precision, and dedication.',
      linkedin: 'https://www.linkedin.com/in/vinodyadav',
      twitter: 'https://twitter.com/vinodyadav',
      facebook: 'https://www.facebook.com/vinodyadav',
    },
    {
      name: 'Member One',
      position: 'Finance Manager',
      image: VinodImage,
      description:
        'A key player in capital planning and financial forecasting, Member One ensures strategic financial decisions for sustainable growth.',
      linkedin: 'https://www.linkedin.com/in/memberone',
      twitter: 'https://twitter.com/memberone',
      facebook: 'https://www.facebook.com/memberone',
    },
    {
      name: 'Member Two',
      position: 'Business Analyst',
      image: VinodImage,
      description:
        'With a sharp eye for market trends and analytics, Member Two brings actionable insights that drive results.',
      linkedin: 'https://www.linkedin.com/in/membertwo',
      twitter: 'https://twitter.com/membertwo',
      facebook: 'https://www.facebook.com/membertwo',
    },
  ];

  return (
    <section className="bg-ivory-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 font-serif text-transparent bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green">
          Meet Our Team
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-tree-bark-dark font-serif mb-1">
                  {member.name}
                </h3>
                <p className="text-wealth-gold font-medium mb-3">{member.position}</p>
                <p className="text-forest-green text-sm leading-relaxed mb-4">
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-money-green hover:text-wealth-gold text-xl transition" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-money-green hover:text-wealth-gold text-xl transition" />
                  </a>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-money-green hover:text-wealth-gold text-xl transition" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamProfiles;
