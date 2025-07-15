import React from "react";

const faqs = [
  {
    question: "How easy is it to integrate?",
    answer: "Very easy! You can set it up and start using within minutes.",
  },
  {
    question: "Can I customize the CRM?",
    answer: "Yes, you can fully tailor workflows, fields, and automations.",
  },
  {
    question: "Is support included?",
    answer: "Absolutely. Our support team is available 24/7 to help you succeed.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="bg-[#111827] text-white py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1f2937] rounded-lg p-6 shadow hover:shadow-purple-600 transition-all"
          >
            <h3 className="text-lg font-semibold text-purple-400 mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
