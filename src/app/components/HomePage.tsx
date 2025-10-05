"use client";

export default function HomePage() {
  return (
    <div className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-black px-4 sm:px-6">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text animate-gradient-text mb-4 leading-tight">
          PDTECH CONSULTANCY
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-white px-2">
          WHERE INNOVATION MEETS EXCELLENCE
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 mt-8 space-y-4 sm:space-y-0">
          <button
            onClick={() => (window.location.href = "#about")}
            className="about-button px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-500 border border-white text-black bg-white hover:text-white hover:border-transparent hover:gradient-animate"
          >
            Find Out More
          </button>
          <button
            onClick={() => (window.location.href = "#contact")}
            className="about-button px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold transition-all duration-500 border border-white text-black bg-white hover:text-white hover:border-transparent hover:gradient-animate"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
