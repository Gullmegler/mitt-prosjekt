import React from "react";

const Hero = () => {
  return (
    <section className="bg-orange-500 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered CRM for Removals
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Streamline your removals business with automation, AI surveys and full control.
          </p>
          <a
            href="#upload"
            className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Try It Free
          </a>
        </div>
        <div className="flex-shrink-0">
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
