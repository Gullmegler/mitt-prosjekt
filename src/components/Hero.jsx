import React, { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic
  };

  return (
    <section
      className="bg-gradient-to-b from-primary to-[#5648b1] text-white py-20 px-4"
    >
      <div className="container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Best AI-powered CRM for Removal Company 2025
        </h1>
        <p className="mb-8">
          Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded w-64 text-black"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded"
          >
            Try AI Survey
          </button>
        </form>
        <div className="mt-10 flex justify-center">
          <img
            src="/removals-company.png"
            alt="Removals company illustration"
            className="max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
