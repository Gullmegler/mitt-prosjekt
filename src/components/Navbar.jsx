import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#111144] text-white">
      {/* Mobile: Hamburger */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Logo center on mobile */}
      <div className="flex items-center justify-center flex-1 md:justify-start">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="ml-2 font-bold">AI Removals</span>
      </div>

      {/* Mobile: Log In button right */}
      <div className="md:hidden">
        <Link
          to="/login"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Log In
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6 items-center ml-10">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#survey" className="hover:underline">AI Survey</a>
      </div>

      {/* Desktop buttons */}
      <div className="hidden md:flex space-x-4">
        <Link
          to="/signup"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition"
        >
          Log In
        </Link>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111144] flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#survey" onClick={() => setIsOpen(false)}>AI Survey</a>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
