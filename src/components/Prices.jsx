import React, { useState } from "react";

export default function Prices() {
  const [selected, setSelected] = useState("monthly");

  return (
    <section className="bg-[#0d1117] text-white py-20 px-4 flex justify-center">
      <div className="bg-[#161b22] border border-gray-700 rounded-xl w-full max-w-xl p-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">Try AI Removals CRM for Free</h2>

        <div className="border-t border-gray-700 pt-6">
          <p className="mb-4 font-semibold text-gray-300">Everything included:</p>
          <ul className="list-none space-y-2 text-gray-400 text-sm">
            <li>✔️ Full CRM access with automation & AI surveys</li>
            <li>✔️ Calendar, job tracking & invoicing system</li>
            <li>✔️ Vehicle and crew management</li>
            <li>✔️ Dashboard with smart reminders</li>
            <li>✔️ Photo & video survey uploads</li>
          </ul>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="mb-4 font-semibold text-gray-300">Billing frequency after free trial</p>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setSelected("monthly")}
              className={`flex-1 border rounded p-4 ${
                selected === "monthly" ? "border-blue-500 bg-[#21262d]" : "border-gray-700 bg-transparent"
              }`}
            >
              <p className="font-medium text-white">Pay monthly</p>
              <p className="text-lg font-extrabold mt-2">£149 <span className="font-normal text-sm">/ month</span></p>
            </button>
            <button
              onClick={() => setSelected("yearly")}
              className={`flex-1 border rounded p-4 ${
                selected === "yearly" ? "border-blue-500 bg-[#21262d]" : "border-gray-700 bg-transparent"
              }`}
            >
              <p className="font-medium text-white">Pay yearly <span className="text-green-500">Save £300</span></p>
              <p className="text-lg font-extrabold mt-2">£1,488 <span className="font-normal text-sm">/ year</span></p>
            </button>
          </div>
        </div>

        <button
          className="mt-8 w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded transition-all"
        >
          Try now
        </button>
      </div>
    </section>
  );
}
