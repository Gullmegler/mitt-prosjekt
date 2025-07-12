import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-orange-500 text-white py-32 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered CRM for Removals
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Streamline your removals business with automation, AI surveys and full control.
          </p>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Try It Free
          </Link>
        </div>
        <div className="flex-shrink-0 mt-8 md:mt-0">
          <img
            src="/survey-agent.png"
            alt="Survey Agent"
            className="w-48 md:w-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
