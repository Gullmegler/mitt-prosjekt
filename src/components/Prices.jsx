import React from "react";

export default function Prices() {
  return (
    <section id="pricing" className="py-20 bg-purple-700 text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        <div className="bg-purple-600 p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-2">Starter</h3>
          <p className="mb-4">Perfect for small teams starting out.</p>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded transition">Choose</button>
        </div>
        <div className="bg-purple-600 p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-2">Professional</h3>
          <p className="mb-4">Best choice for growing removal companies.</p>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded transition">Choose</button>
        </div>
        <div className="bg-purple-600 p-6 rounded-lg shadow-lg flex-1">
          <h3 className="text-xl font-bold mb-2">Enterprise</h3>
          <p className="mb-4">Full control & advanced AI integrations.</p>
          <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded transition">Choose</button>
        </div>
      </div>
    </section>
  );
}
