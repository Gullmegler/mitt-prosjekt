import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md flex items-center justify-between px-6 py-4 z-50">
      {/* Logo */}
      <a href="/">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </a>

      {/* Links */}
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li>
          <a href="#benefits" className="hover:text-orange-500 transition">Benefits</a>
        </li>
        <li>
          <a href="#prices" className="hover:text-orange-500 transition">Prices</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </li>
        <li>
          <a href="#faq" className="hover:text-orange-500 transition">FAQ</a>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-3">
        <a
          href="/signup"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Sign Up
        </a>
        <a
          href="/login"
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-500 hover:text-white transition"
        >
          Log In
        </a>
      </div>
    </nav>
  );
}
