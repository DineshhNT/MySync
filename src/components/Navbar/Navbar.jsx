import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // ✅ Handle highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "";
      menuItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.25) {
            currentSection = item.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // ✅ run on mount too
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Click scroll
  const handleMenuItemClick = (sectionId) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-16 ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between py-6 text-gray-100">
        {/* Left Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-gray-100  ">My</span>
          <span className="text-gray-100">Sync</span>
        </div>

        {/* Centered Menu */}
        <ul className="hidden md:flex absolute left-1/2 transform  -translate-x-1/2 space-x-8 font-semibold text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition duration-200 hover:text-fuchsia-600 ${
                activeSection === item.id ? "text-fuchsia-600" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden ml-auto">
          {isOpen ? (
            <FiX
              className="text-3xl text-gray-200 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-gray-200 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-fuchsia-600 ${
                  activeSection === item.id ? "text-fuchsia-600" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
