import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#111144] text-white px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-8" />
        <span className="font-bold">AI REMOVALS</span>
      </div>

      <div className="hidden md:flex flex-1 justify-center gap-6">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#pricing" className="hover:underline">Pricing</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#survey" className="hover:underline">AI Survey</a>
      </div>

      <div className="hidden md:flex gap-2">
        <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Sign Up</Link>
        <Link to="/login" className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition">Log In</Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111144] flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
          <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#survey" onClick={() => setIsOpen(false)}>AI Survey</a>
          <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Sign Up</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#111144] transition">Log In</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
