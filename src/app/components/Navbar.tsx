import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black h-16 flex items-center">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
        {/* Logo and Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-white text-lg font-bold">
            <Image src="/logo5.png" alt="PNDTech Logo" width={90} height={90} />
          </div>

          {/* Navigation Links */}
          <ul className="flex list-none space-x-8">
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sign In Button */}
        {/* <div>
          <button className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all">
            Sign In
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;