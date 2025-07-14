import React from "react";

export default function Prices() {
  return (
    <section
      id="prices"
      className="py-20 flex justify-center px-4"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl max-w-lg w-full text-white shadow-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Try AI Removals CRM for Free</h2>
        <ul className="text-left mb-6 space-y-2">
          <li>Full CRM access with automation & AI surveys</li>
          <li>Calendar, job tracking & invoicing system</li>
          <li>Vehicle and crew management</li>
          <li>Dashboard with smart reminders</li>
          <li>Photo & video survey uploads</li>
        </ul>
        <div className="flex justify-center gap-4 mb-4">
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Pay monthly £149
          </button>
          <button className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition">
            Pay yearly £1488
          </button>
        </div>
        <a
          href="/signup"
          className="w-full inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          Try now
        </a>
      </div>
    </section>
  );
}
