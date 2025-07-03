'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    emailjs.init('YOUR_USER_ID');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message: ' + error.text);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-10 bg-gray-200 dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 animate-slide-up text-gray-600 dark:text-gray-200">Contact Me</h2>
        <div className="flex flex-wrap justify-center mb-8 space-x-4 md:space-x-6">
          {/* <div className="flex items-center space-x-3 relative group mb-6 md:mb-0">
            <Image src="/images/icons/phone.png" alt="Phone Icon" width={24} height={24} />
            <span className="text-lg text-gray-600 dark:text-gray-300">+94771147484</span>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-2 text-sm text-white bg-sky-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Call me on phone
            </div>
          </div> */}
          <div className="flex items-center space-x-3 relative group mb-6 md:mb-0">
            <Link href="https://wa.me/+94771147484" target="_blank">
              <Image src="/images/icons/whatsapp.png" alt="WhatsApp Icon" width={24} height={24} />
            </Link>
            <span className="text-lg text-gray-600 dark:text-gray-300">+94771147484</span>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-2 text-sm text-white bg-sky-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Chat with me on WhatsApp
            </div>
          </div>
          <div className="flex items-center space-x-3 relative group mb-6 md:mb-0">
            <Image src="/images/icons/email.png" alt="Email Icon" width={24} height={24} />
            <span className="text-lg text-gray-600 dark:text-gray-300">spmskperera@gmail.com</span>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-2 text-sm text-white bg-sky-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Send me an email
            </div>
          </div>
          <div className="flex items-center space-x-3 relative group mb-6 md:mb-0">
            <Image src="/images/icons/location.png" alt="Location Icon" width={24} height={24} />
            <span className="text-lg text-gray-600 dark:text-gray-300">Colombo, Sri Lanka</span>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-2 text-sm text-white bg-sky-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              My location
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="form-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-sky-500 dark:focus:border-gray-400 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.2)] dark:focus:shadow-[0_0_0_3px_rgba(74,85,104,0.2)]"
              required
              aria-label="Your Name"
            />
            <span className="absolute right-3 top-3 text-red-500 hidden">*</span>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="form-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-sky-500 dark:focus:border-gray-400 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.2)] dark:focus:shadow-[0_0_0_3px_rgba(74,85,104,0.2)]"
              required
              aria-label="Your Email"
            />
            <span className="absolute right-3 top-3 text-red-500 hidden">*</span>
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="form-input w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-sky-500 dark:focus:border-gray-400 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.2)] dark:focus:shadow-[0_0_0_3px_rgba(74,85,104,0.2)]"
              required
              aria-label="Your Message"
            />
            <span className="absolute right-3 top-3 text-red-500 hidden">*</span>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-sky-500 text-white rounded-md hover:bg-sky-600 transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}