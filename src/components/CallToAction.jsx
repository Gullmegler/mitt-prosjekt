import React from "react";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#111827] to-[#1f2937] text-white py-20 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-8 max-w-2xl mx-auto text-gray-300">
        Need help or have questions? Our team is here to support you 24/7. Feel free to reach out and we'll get back to you as soon as possible.
      </p>
      <a
        href="mailto:support@airemovals.co.uk"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition"
      >
        Email Us
      </a>
    </section>
  );
}
