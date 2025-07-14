import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative text-white text-center py-24 px-4 overflow-hidden">
      {/* Bakgrunnsbilde */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/removals-company.png"
          alt="Removal Company"
          className="object-cover w-full h-full opacity-80"
        />
      </div>

      {/* SEO-vennlig H1 */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Companies 2025
      </h1>

      {/* Undertekst */}
      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
        Streamline operations, automate surveys, and elevate your moving business with a purpose-built CRM solution.
      </p>

      {/* Input og knapper */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black w-64"
        />
        <Link
          to="/signup"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition"
        >
          Sign Up CRM
        </Link>
        <Link
          to="https://aisurvey.airemovals.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Try AI Survey
        </Link>
      </div>
    </section>
  );
}
