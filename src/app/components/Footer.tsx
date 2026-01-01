import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} PNDTech. All rights reserved.
        </div>

        {/* Right side: contact link */}
        <div className="mt-4 md:mt-0">
          <a
            href="#contact"
            className="text-white hover:text-gray-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
