import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b0c35] px-4 py-3 flex items-center justify-between relative">
      {/* Left: Hamburger menu on mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center space-x-2">
        <a href="https://airemovals.co.uk">
          <img
            src="/logo.png"
            alt="CRM"
            className="h-8 w-auto"
          />
        </a>
        <a href="https://airemovals.co.uk" className="text-white font-semibold text-lg hidden md:block">
          AI REMOVALS
        </a>
      </div>

      {/* Right: Log In button on mobile */}
      <div className="flex md:hidden">
        <Link
          to="/login"
          className="border border-white text-white px-3 py-1 rounded hover:bg-white hover:text-[#0b0c35] transition"
        >
          Log In
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6 ml-auto items-center">
        <Link to="/benefits" className="text-white hover:text-purple-300">
          Benefits
        </Link>
        <Link to="/pricing" className="text-white hover:text-purple-300">
          Pricing
        </Link>
        <Link to="/faq" className="text-white hover:text-purple-300">
          FAQ
        </Link>
        <a href="https://aisurvey.airemovals.co.uk" className="text-white hover:text-purple-300">
          AI Survey
        </a>
        <Link to="/contact" className="text-white hover:text-purple-300">
          Contact
        </Link>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#0b0c35] transition"
        >
          Log In
        </Link>
      </div>

      {/* Mobile dropdown links */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#0b0c35] flex flex-col items-start px-4 py-2 space-y-2 md:hidden z-50">
          <Link to="/benefits" className="text-white hover:text-purple-300 w-full">
            Benefits
          </Link>
          <Link to="/pricing" className="text-white hover:text-purple-300 w-full">
            Pricing
          </Link>
          <Link to="/faq" className="text-white hover:text-purple-300 w-full">
            FAQ
          </Link>
          <a href="https://aisurvey.airemovals.co.uk" className="text-white hover:text-purple-300 w-full">
            AI Survey
          </a>
          <Link to="/contact" className="text-white hover:text-purple-300 w-full">
            Contact
          </Link>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition w-full text-center"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#0b0c35] transition w-full text-center"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
