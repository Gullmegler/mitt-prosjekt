import React from "react";

const Prices = () => {
  return (
    <section id="prices" className="bg-[#5648b1] text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Simple Pricing</h2>
        <p className="mb-8">Flexible plans to scale your removal business — no hidden fees.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Starter</h3>
            <p>Perfect for small teams starting out.</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Choose</button>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Professional</h3>
            <p>Best choice for growing removal companies.</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Choose</button>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Enterprise</h3>
            <p>Full control & advanced AI integrations.</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Choose</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
