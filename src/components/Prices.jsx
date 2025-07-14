import React from "react";

export default function Prices() {
  return (
    <section className="bg-github text-white py-16 px-4 flex justify-center">
      <div className="bg-gradient-to-b from-[#1f2937]/60 to-[#1f2937]/30 backdrop-blur-sm border border-gray-600 rounded-2xl shadow-xl max-w-lg w-full p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Try AI Removals CRM for Free
        </h2>
        <p className="text-gray-300 mb-8">Everything included:</p>

        <ul className="text-gray-400 text-left space-y-2">
          <li>✓ Full CRM access with automation & AI surveys</li>
          <li>✓ Calendar, job tracking & invoicing system</li>
          <li>✓ Vehicle and crew management</li>
          <li>✓ Dashboard with smart reminders</li>
          <li>✓ Photo & video survey uploads</li>
        </ul>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#ffffff0a] rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-white mb-2">Pay monthly</h3>
            <p className="text-lg font-bold">£149 / month</p>
          </div>
          <div className="bg-[#ffffff0a] rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-white mb-2">
              Pay yearly <span className="text-green-400">Save £300</span>
            </h3>
            <p className="text-lg font-bold">£1,488 / year</p>
          </div>
        </div>

        <a
          href="/signup"
          className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition"
        >
          Try now
        </a>
      </div>
    </section>
  );
}
