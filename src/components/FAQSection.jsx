import React from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How easy is it to integrate?",
      answer: "Very easy! You can set it up and start using within minutes."
    },
    {
      question: "Can I customize the CRM?",
      answer: "Yes, you can fully tailor workflows, fields, and automations."
    },
    {
      question: "Is support included?",
      answer: "Absolutely. Our support team is available 24/7 to help you succeed."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-purple-800 text-white text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-purple-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
