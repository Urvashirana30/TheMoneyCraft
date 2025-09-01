"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";
import contactImage from "../images/contact.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [notification, setNotification] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await axios.post(
        "https://themoneycraftbackend.onrender.com/api/forms/submit",
        formData
      );
      console.log(response.data);
      setNotification({ type: "success", message: "Form submitted successfully!" });
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setNotification({ type: "error", message: "Failed to submit the form. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative bg-ivory-white min-h-screen py-16 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-96 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={contactImage}
              alt="Contact Us"
              layout="fill"
              objectFit="cover"
              className="transition-transform transform hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* Form */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-tree-bark-dark mb-8 font-serif text-center md:text-left">
            <span className="bg-clip-text bg-gradient-to-r from-wealth-gold to-money-green text-transparent">
              Contact Us
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="flex items-center space-x-4">
              <FaUser className="text-money-green text-2xl" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 border border-mint-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-money-green"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-money-green text-2xl" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 border border-mint-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-money-green"
              />
            </div>

            {/* Contact Number */}
            <div className="flex items-center space-x-4">
              <FaPhone className="text-money-green text-2xl" />
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="flex-1 py-2 px-4 border border-mint-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-money-green"
              />
            </div>

            {/* Message (optional) */}
            <div className="flex items-start space-x-4">
              <FaPaperPlane className="text-money-green text-2xl mt-2" />
              <textarea
                name="message"
                placeholder="Message (optional)"
                value={formData.message}
                onChange={handleChange}
                className="flex-1 py-2 px-4 border border-mint-gray rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-money-green h-32"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSending}
                className={`py-2 px-8 rounded-lg shadow-md transition-all duration-300 font-semibold ${
                  isSending
                    ? "bg-mint-gray text-tree-bark-dark cursor-not-allowed"
                    : "bg-money-green hover:bg-wealth-gold text-white hover:text-tree-bark-dark"
                }`}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div
          className={`fixed bottom-4 right-4 p-4 rounded shadow-lg ${
            notification.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
