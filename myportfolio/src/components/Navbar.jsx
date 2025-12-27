import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-6 md:px-10 lg:px-20 ${
        isScrolled
          ? "bg-[#050414] bg-opacity-60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-5">

        {/* Logo */}
        <div className="text-lg font-bold cursor-pointer flex items-center space-x-2">
          <span className="text-[#8245ec] text-xl">&lt;</span>
          <span className="text-white">Samir</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rijal</span>
          <span className="text-[#8245ec] text-xl">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                className="transition duration-200"
                onClick={() => handleMenuItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons + Get in Touch */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/Rijal-Samir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-200"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/samir-rijal-091083270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/samir__rijal?igsh=ZW5zdTBzbjI5YWs2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition duration-200"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="mailto:rijalsamir21@gmail.com"
            className="text-gray-300 hover:text-[#8245ec] transition duration-200"
          >
            <FiMail size={24} />
          </a>

          <a
            href="mailto:rijalsamir21@gmail.com"
            className="ml-8 px-5 py-2 bg-[#8245ec] text-white font-medium rounded-lg hover:bg-[#a065f9] transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-80 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-5 py-6 text-gray-300 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  className="transition duration-200"
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 mt-3">
              <a
                href="https://github.com/Rijal-Samir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition duration-200"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/samir-rijal-091083270"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition duration-200"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/samir__rijal?igsh=ZW5zdTBzbjI5YWs2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec] transition duration-200"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:rijalsamir21@gmail.com"
                className="text-gray-300 hover:text-[#8245ec] transition duration-200"
              >
                <FiMail size={24} />
              </a>
            </div>
            <a
              href="mailto:rijalsamir21@gmail.com"
              className="mt-4 px-5 py-2 bg-[#8245ec] text-white font-medium rounded-lg hover:bg-[#a065f9] transition duration-300"
            >
              Get in Touch
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
