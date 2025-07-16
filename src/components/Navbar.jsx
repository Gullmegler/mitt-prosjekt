import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b0c35] text-white px-4 py-3 flex items-center justify-between relative">
      {/* Hamburger button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Logo (center on mobile) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
        <a href="https://airemovals.co.uk" className="flex items-center">
          <img
            src="/logo.png"
            alt="CRM"
            className="h-8 w-auto"
          />
          <span className="ml-2 font-bold">AI REMOVALS</span>
        </a>
      </div>

      {/* Right side links (desktop) */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/benefits">Benefits</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/aisurvey">AI Survey</Link>
        <Link to="/contact">Contact</Link>
        <Link
          to="/signup"
          className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0b0c35] transition"
        >
          Log In
        </Link>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0c35] flex flex-col items-center py-4 space-y-4 z-10 md:hidden">
          <Link to="/benefits" onClick={() => setIsOpen(false)}>Benefits</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/aisurvey" onClick={() => setIsOpen(false)}>AI Survey</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0b0c35] transition"
            onClick={() => setIsOpen(false)}
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
