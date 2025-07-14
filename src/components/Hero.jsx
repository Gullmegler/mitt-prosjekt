import React from "react";
import heroImg from "../public/removals-company.png";

export default function Hero() {
  return (
    <section className="bg-githubBlue bg-gradient-to-b from-githubBlue to-lightHero text-white text-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="text-lg mb-6 max-w-2xl mx-auto">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <form className="flex justify-center flex-wrap gap-2 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 rounded-l-md w-64"
        />
        <button
          type="submit"
          className="bg-orange text-white px-6 rounded-r-md"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="border border-orange text-orange px-6 rounded-md"
        >
          Try AI Survey
        </button>
      </form>
      <img
        src={heroImg}
        alt="CRM preview"
        className="mx-auto mt-8 max-w-md"
      />
    </section>
  );
}
