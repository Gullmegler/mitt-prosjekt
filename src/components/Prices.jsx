import React from "react";

export default function Prices() {
  return (
    <section id="prices" className="py-20 flex justify-center items-center">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-2xl max-w-md w-full text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Try AI Removals CRM for Free</h2>
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
        <button className="w-full px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition">
          Try now
        </button>
      </div>
    </section>
  );
}
