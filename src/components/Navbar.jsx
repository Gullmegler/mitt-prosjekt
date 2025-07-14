import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1D1B4F]">
      <div className="text-white font-bold text-lg">AI REMOVALS</div>
      <div className="hidden md:flex space-x-6 text-white">
        <a href="#benefits">Benefits</a>
        <a href="#prices">Prices</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex space-x-2">
        <a
          href="/signup"
          className="px-4 py-2 bg-pink-500 text-white rounded-md font-semibold hover:opacity-90 transition"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="px-4 py-2 bg-transparent border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition"
        >
          Log In
        </a>
      </div>
    </nav>
  );
}
