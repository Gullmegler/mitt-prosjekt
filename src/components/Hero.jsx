import React from "react";
import { Link } from "react-router-dom";
import removalCompanyImage from "../../public/removals-company.png";

const Hero = () => {
  return (
    <section className="bg-[#0b0c35] text-white pt-20 pb-10 px-4 text-center relative">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for <br /> Removal Company 2025
      </h1>
      <p className="max-w-2xl mx-auto text-lg mb-6">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>

      {/* Form with input and button combined */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col md:flex-row justify-center items-center gap-2 w-full max-w-md mx-auto mb-4"
      >
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-grow px-4 py-3 rounded-l-full text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-5 py-3 rounded-r-full hover:bg-orange-600 transition"
          >
            Sign Up
          </button>
        </div>
        <Link
          to="https://aisurvey.airemovals.co.uk"
          className="border border-white text-white px-5 py-3 rounded-full hover:bg-white hover:text-[#0b0c35] transition w-full md:w-auto"
        >
          Try AI Survey
        </Link>
      </form>

      {/* Image */}
      <div className="flex justify-center mt-6">
        <img
          src={removalCompanyImage}
          alt="CRM Illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
};

export default Hero;
