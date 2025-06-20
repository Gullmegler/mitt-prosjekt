import React from "react";

const Prices = () => {
  return (
    <section id="prices" className="bg-gray-50 py-20 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Pricing</h2>
        <p className="text-gray-600 mb-12">Choose the plan that fits your removals business</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">AI Survey + Full CRM</h3>
              <p className="text-2xl font-bold mb-4">£149 / month</p>
              <ul className="text-left text-sm space-y-2 text-gray-700 mb-6">
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
            </div>
            <a
              href="/test-access"
              className="mt-auto inline-block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Start Free Test
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-200 hover:shadow-xl transition">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">AI Survey Access Only</h3>
              <p className="text-2xl font-bold mb-4">£49 / month</p>
              <ul className="text-left text-sm space-y-2 text-gray-700 mb-6">
                <li>Video and image upload</li>
                <li>Reduced CRM access</li>
                <li>Dashboard with key statistics</li>
                <li>Customer Views</li>
                <li>Download AI Survey Reports</li>
              </ul>
            </div>
            <a
              href="/test-access"
              className="mt-auto inline-block w-full text-center bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Start Free Test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
