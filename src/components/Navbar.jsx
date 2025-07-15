import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#111144] text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Mobile: Hamburger */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile: Logo center */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 font-bold hidden md:inline">AI Removals</span>
        </div>

        {/* Mobile: Log In button */}
        <div className="flex md:hidden">
          <Link
            to="/login"
            className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition text-sm"
          >
            Log In
          </Link>
        </div>

        {/* Desktop: Links */}
        <div className="hidden md:flex space-x-6 items-center ml-10">
          <a href="#benefits" className="hover:underline">Benefits</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#survey" className="hover:underline">AI Survey</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Desktop: Buttons */}
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
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111144] px-4 pt-2 pb-4 space-y-2">
          <a href="#benefits" onClick={() => setMenuOpen(false)} className="block hover:underline">Benefits</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block hover:underline">Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="block hover:underline">FAQ</a>
          <a href="#survey" onClick={() => setMenuOpen(false)} className="block hover:underline">AI Survey</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:underline">Contact</a>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="block bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition mt-2"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition mt-2"
          >
            Log In
          </Link>
        </div>
      )}
    </nav>
  );
}
