import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-orange-500 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Simplify Your Removals Business?</h2>
        <p className="text-lg mb-8">Automated CRM. Intelligent Surveys. Instant Results. Book a free demo and see it in action today.</p>
        <a
          href="/demo"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
        >
          Book a Demo
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
