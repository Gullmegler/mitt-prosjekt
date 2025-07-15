import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#111144] text-white px-4 py-3 flex items-center justify-between">
      {/* Mobile: Hamburger & Logo */}
      <div className="flex items-center md:hidden w-full justify-between">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <Link
          to="/login"
          className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Log In
        </Link>
      </div>

      {/* Desktop: Logo & Links center, buttons right */}
      <div className="hidden md:flex items-center w-full">
        <div className="flex items-center flex-shrink-0 mr-8">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 font-bold">AI REMOVALS</span>
        </div>

        <div className="flex justify-center flex-1 space-x-6">
          <a href="#benefits" className="hover:underline">Benefits</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#survey" className="hover:underline">AI Survey</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        <div className="flex space-x-3">
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          <a href="#benefits" className="block">Benefits</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#faq" className="block">FAQ</a>
          <a href="#survey" className="block">AI Survey</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
