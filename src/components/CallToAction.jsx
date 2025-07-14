import React from "react";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="py-20 px-4 flex justify-center"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-2xl w-full text-center text-white shadow-2xl">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your removals business?</h2>
        <p className="text-gray-300 mb-8">
          Get started today with AI Removals CRM and simplify your workflows.
        </p>
        <a
          href="/signup"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded transition"
        >
          Sign up now
        </a>
      </div>
    </section>
  );
}
