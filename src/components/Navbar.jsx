import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: "#111444" }}>
      <div className="flex items-center">
        <img src={logo} alt="AI Removals Logo" className="h-8 mr-2" />
        <span className="text-white font-semibold text-lg">AI REMOVALS</span>
      </div>
      <ul className="flex space-x-6 text-white">
        <li><a href="#benefits" className="hover:underline">Benefits</a></li>
        <li><a href="#prices" className="hover:underline">Prices</a></li>
        <li><a href="#faq" className="hover:underline">FAQ</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><a href="#signup" className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded">Sign Up</a></li>
        <li><a href="#login" className="border border-white px-3 py-1 rounded hover:bg-white hover:text-[#111444]">Log In</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
