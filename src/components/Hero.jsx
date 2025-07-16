import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      // Sett HTML5 validation message på engelsk
      e.target[0].setCustomValidity("Please fill out this field.");
      e.target[0].reportValidity();
    } else {
      navigate("/signup", { state: { email } });
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0B0C39] to-[#181946] text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Best AI-powered CRM for Removal Company 2025
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          Optimize your workflows, automate surveys, and grow your removal
          company with our specialized CRM solution.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              e.target.setCustomValidity(""); // Fjern custom validity hvis bruker skriver
            }}
            required
            className="px-4 py-2 rounded-full text-black w-64 md:w-80"
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-full transition"
          >
            Sign Up
          </button>
          <a
            href="https://aisurvey.airemovals.co.uk"
            className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium px-5 py-2 rounded-full transition"
          >
            Try AI Survey
          </a>
        </form>

        <div className="mt-10 flex justify-center">
          <img
            src="/removals-company.png"
            alt="removal company"
            className="w-64 md:w-80"
          />
        </div>
        <p className="mt-2 text-sm text-gray-300">CRM Illustration</p>
      </div>
    </section>
  );
};

export default Hero;
