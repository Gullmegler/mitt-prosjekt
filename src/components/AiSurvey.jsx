import React from "react";

export default function Prices() {
  return (
    <section className="bg-[#f6f8fb] py-20 px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Pricing</h2>
      <p className="max-w-xl mx-auto mb-12 text-gray-600">
        Choose the plan that fits your removals business
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Full CRM */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full md:w-1/3">
          <h3 className="text-orange-600 text-lg font-bold mb-2">AI Survey + Full CRM</h3>
          <p className="text-3xl font-extrabold mb-1">£149 <span className="text-lg font-normal">/ month</span></p>
          <ul className="text-left mt-6 mb-8 space-y-2 text-gray-700">
            <li>Full CRM Access</li>
            <li>Leads Management & Job Tracking</li>
            <li>Sales Pipeline Tracking</li>
            <li>Dashboard with statistics</li>
            <li>Calendar for scheduling</li>
            <li>Vehicle and crew management</li>
            <li>Employee and customer tracking</li>
            <li>Invoicing system</li>
            <li>Customer reviews</li>
            <li>AI Advice & smart reminders</li>
            <li>Includes all AI Survey features</li>
          </ul>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-all"
          >
            Start Free Test
          </button>
        </div>

        {/* AI Survey Only */}
        <div className="bg-white rounded-xl shadow-md p-8 w-full md:w-1/3">
          <h3 className="text-orange-600 text-lg font-bold mb-2">AI Survey Access Only</h3>
          <p className="text-3xl font-extrabold mb-1">£49 <span className="text-lg font-normal">/ month</span></p>
          <ul className="text-left mt-6 mb-8 space-y-2 text-gray-700">
            <li>Video and image upload</li>
            <li>Reduced CRM access</li>
            <li>Dashboard with key statistics</li>
            <li>Customer Views</li>
            <li>Download AI Survey Reports</li>
          </ul>
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-all"
          >
            Start Free Test
          </button>
        </div>
      </div>
    </section>
  );
}
