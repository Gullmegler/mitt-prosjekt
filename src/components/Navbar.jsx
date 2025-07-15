import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#111144] text-white">
      {/* Mobile: Hamburger */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="ml-2 font-bold hidden md:block">AI Removals</span>
      </div>

      {/* Mobile: Log In button */}
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
        <a href="#contact" className="hover:underline">Contact</a>
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
        <div className="absolute top-16 left-0 w-full bg-[#111144] text-center flex flex-col space-y-4 p-4 md:hidden">
          <a href="#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#survey" onClick={() => setIsOpen(false)}>AI Survey</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
