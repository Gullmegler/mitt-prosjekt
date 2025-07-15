import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-[#111144] text-white">
      {/* Mobile hamburger and logo */}
      <div className="flex items-center w-full md:hidden justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
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

      {/* Desktop logo */}
      <div className="hidden md:flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="ml-2 font-bold">AI Removals</span>
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

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111144] flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#benefits" className="hover:underline" onClick={() => setIsOpen(false)}>Benefits</a>
          <a href="#pricing" className="hover:underline" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" className="hover:underline" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#survey" className="hover:underline" onClick={() => setIsOpen(false)}>AI Survey</a>
          <a href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
