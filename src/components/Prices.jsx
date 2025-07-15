import React from "react";

export default function Prices() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-purple-700 to-purple-900 text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Pricing Plans</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        <div className="bg-purple-600 p-8 rounded-2xl shadow-xl flex-1 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Starter</h3>
          <p className="mb-6">Perfect for small teams starting out.</p>
          <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-medium transition">Choose</button>
        </div>
        <div className="bg-purple-600 p-8 rounded-2xl shadow-xl flex-1 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Professional</h3>
          <p className="mb-6">Best choice for growing removal companies.</p>
          <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-medium transition">Choose</button>
        </div>
        <div className="bg-purple-600 p-8 rounded-2xl shadow-xl flex-1 transition transform hover:-translate-y-2 hover:shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="mb-6">Full control & advanced AI integrations.</p>
          <button className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-medium transition">Choose</button>
        </div>
      </div>
    </section>
  );
}
