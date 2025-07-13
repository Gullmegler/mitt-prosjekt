import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-800 to-purple-900 text-white fixed w-full z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-lg font-bold">AI REMOVALS</span>
      </div>
      <div className="flex space-x-6">
        <ScrollLink to="benefits" smooth={true} offset={-70} className="cursor-pointer">Benefits</ScrollLink>
        <ScrollLink to="prices" smooth={true} offset={-70} className="cursor-pointer">Prices</ScrollLink>
        <ScrollLink to="faq" smooth={true} offset={-70} className="cursor-pointer">FAQ</ScrollLink>
        <ScrollLink to="contact" smooth={true} offset={-70} className="cursor-pointer">Contact</ScrollLink>
        <Link to="/signup" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-4 rounded">Sign Up</Link>
        <Link to="/login" className="border border-white text-white font-bold py-1 px-4 rounded">Log In</Link>
      </div>
    </nav>
  );
}
