import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-background text-text">
      <a href="https://airemovals.co.uk" className="font-bold text-lg">AI REMOVALS</a>
      <div className="space-x-4 hidden md:block">
        <a href="#benefits" className="hover:underline">Benefits</a>
        <a href="#prices" className="hover:underline">Prices</a>
        <a href="#faq" className="hover:underline">FAQ</a>
        <a href="#cta" className="hover:underline">Contact</a>
        <a href="/signup" className="bg-primary text-white px-4 py-2 rounded">Sign Up</a>
        <a href="/login" className="border border-text px-4 py-2 rounded">Log In</a>
      </div>
    </nav>
  );
}
