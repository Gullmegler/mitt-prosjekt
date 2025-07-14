import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "/public/removals-company.png";

export default function Hero() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center p-10 bg-background">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="mb-6 max-w-xl">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded border w-full sm:w-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Sign Up
        </button>
        <a
          href="#ai-survey"
          className="border border-text px-4 py-2 rounded text-text"
        >
          Try AI Survey
        </a>
      </div>
      <img src={heroImage} alt="Removals Company" className="w-full max-w-md mt-6" />
    </section>
  );
}
