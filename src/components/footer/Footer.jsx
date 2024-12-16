import React from "react";
import { FaTelegram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 mt-10 text-white font-mono bg-gradient-to-r from-blue-900 to-gray-900">
      {/* Main Content */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 px-5 sm:px-10 lg:px-20">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center text-center">
            <img
              className="w-24 h-24 rounded-full shadow-lg"
              src="../../images/logo.jpg"
              alt="Logo"
            />
            <p className="text-2xl md:text-3xl font-bold text-secondary mt-4">
              Grace Academy
            </p>
            <p className="mt-2 text-gray-300 text-sm md:text-base">
              Empowering Your Future Through Learning
            </p>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-secondary text-white py-6 mt-10">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-bold">Connect with Us</h2>
          <p className="text-gray-200 mt-2 text-sm md:text-base text-center">
            Follow us on our social media platforms for updates and news.
          </p>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <a
              href="https://t.me/graceacademy1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-200"
            >
              <FaTelegram className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/grace-academy-eth/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition duration-200"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/@gracetech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition duration-200"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-6 text-center">
        <p className="text-gray-400 text-sm md:text-base">
          &copy; {new Date().getFullYear()} Grace Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
