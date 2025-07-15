import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#111444] to-[#5648b1] text-white py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Best AI-powered CRM for Removal Company 2025
        </h1>
        <p className="text-lg mb-6">
          Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-md mx-auto">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded-l-md px-4 py-2 text-black focus:outline-none"
            />
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
            >
              Sign Up
            </button>
          </div>
          <button
            className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            Try AI Survey
          </button>
        </div>
        <div className="mt-10">
          <img src="/removals-company.png" alt="CRM Illustration" className="mx-auto w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
