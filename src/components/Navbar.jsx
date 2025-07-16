import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0b0c35] px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <a href="https://airemovals.co.uk">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>
        <a href="https://airemovals.co.uk" className="text-white font-semibold text-lg">
          AI REMOVALS
        </a>
      </div>
      <div className="hidden md:flex space-x-6">
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
      </div>
      <div className="hidden md:flex space-x-3">
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
    </nav>
  );
};

export default Navbar;
