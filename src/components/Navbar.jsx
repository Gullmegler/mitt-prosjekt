import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-b from-[#E2D5FF] via-[#6A58D3] to-[#1D1B4F]">
      <a href="/" className="text-white font-bold text-lg">AI REMOVALS</a>
      <div className="flex space-x-6">
        <a href="#benefits" className="text-white hover:underline">Benefits</a>
        <a href="#prices" className="text-white hover:underline">Prices</a>
        <a href="#faq" className="text-white hover:underline">FAQ</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
      </div>
      <div className="flex space-x-4">
        <a
          href="/signup"
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black"
        >
          Log In
        </a>
      </div>
    </nav>
  );
}
