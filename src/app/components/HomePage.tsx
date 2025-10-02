"use client";
export default function HomePage() {
  return (
    <div className="relative flex h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-black">

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text animate-gradient-text mb-4">
          PDTECH CONSULTANCY
        </h1>
        <h2 className="text-4xl font-semibold text-white">
          WHERE INNOVATION MEETS EXCELLENCE
        </h2>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button onClick={() => window.location.href = "#about"} className="about-button px-8 py-4 rounded-full font-semibold transition-all duration-500 border border-white text-black bg-white hover:text-white hover:border-transparent hover:gradient-animate">
          Find Out More
          </button>
          <button  onClick={() => window.location.href = "#contact"} className="about-button px-8 py-4 rounded-full font-semibold transition-all duration-500 border border-white text-black bg-white hover:text-white hover:border-transparent hover:gradient-animate">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
