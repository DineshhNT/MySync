import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { MyDetails } from "../../constants"; // Adjust the path based on your file structure

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white bg-gray-900/10 py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Logo and Name */}
        <div className="flex justify-center items-center space-x-2">
          <img src={MyDetails[0].Dlogo} alt="Logo" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
        </div>
        <h2 className="text-xl sm:text-2xl pt-4 font-semibold ">Dinesh N T</h2>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Journey", id: "journey" },
            { name: "Projects", id: "work" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              // Added text-base for small screens and up, fixed hover color
              className="hover:text-fuchsia-600 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/dinesh-n-t-20b0b6256/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/d_i_n_e_s_h_h_/",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/DineshhNT",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl text-white hover:text-fuchsia-600 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/80 mt-6 whitespace-nowrap">
          © 2025 Dinesh N T. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;