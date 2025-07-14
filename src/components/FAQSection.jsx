import React from "react";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 px-4 flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #E2D5FF 0%, #6A58D3 50%, #1D1B4F 100%)",
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl w-full space-y-6">
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white shadow-2xl">
          <h3 className="font-semibold mb-2">How does the AI survey work?</h3>
          <p className="text-gray-300">Customers upload photos or videos. The AI analyzes the items and generates an inventory automatically for you to create a quote quickly.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white shadow-2xl">
          <h3 className="font-semibold mb-2">Can I customize the CRM features?</h3>
          <p className="text-gray-300">Yes! Our CRM is flexible and can be tailored to your specific removals business workflows.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-white shadow-2xl">
          <h3 className="font-semibold mb-2">Is there support available?</h3>
          <p className="text-gray-300">Absolutely. Our team is ready to help you onboard and support you whenever you need assistance.</p>
        </div>
      </div>
    </section>
  );
}
