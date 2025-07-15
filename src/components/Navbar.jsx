import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#111444] text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="font-bold text-lg">AI REMOVALS</span>
      </div>
      <div className="hidden md:flex gap-6">
        <a href="#benefits" className="hover:text-purple-300 transition">Benefits</a>
        <a href="#prices" className="hover:text-purple-300 transition">Prices</a>
        <a href="#faq" className="hover:text-purple-300 transition">FAQ</a>
        <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
      </div>
      <div className="flex gap-2">
        <Link to="/login" className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#111444] transition">Log In</Link>
        <Link to="/signup" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
