import React, { useState } from "react";

const faqs = [
  {
    q: "What is AI Removals CRM?",
    a: "AI Removals CRM is a comprehensive platform designed to streamline the moving process for relocation companies.",
  },
  {
    q: "Can I manage my move online?",
    a: "Absolutely. You get a personal dashboard to track tasks, upload documents, and contact your move coordinator.",
  },
  {
    q: "Is this suitable for small, medium or large companies?",
    a: "AI Removals CRM is built to scale with your business—whether you're a solo operator, a broker, or managing a large removals team. It adapts to any company size or structure.",
  },
  {
    q: "Is the CRM affordable?",
    a: "Yes. Our pricing is transparent and tailored to suit different business needs and sizes."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left text-lg font-medium text-gray-900"
              >
                {faq.q}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
