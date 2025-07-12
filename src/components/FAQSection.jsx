import React from "react";

const faqs = [
  {
    question: "What is included in the AI Survey?",
    answer: "Our AI survey includes video and photo walkthroughs, object detection, and instant report generation that integrates directly into the CRM."
  },
  {
    question: "Can I switch plans later?",
    answer: "Yes! You can easily upgrade or downgrade between AI Survey Only and Full CRM plans anytime."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you can try the full CRM for free and explore all features before committing."
  },
  {
    question: "How does AI improve my removals business?",
    answer: "AI boosts efficiency, increases surveys completed, reduces errors, and helps impress customers with instant insights."
  }
];

export default function FAQSection() {
  return (
    <section className="bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-neutral-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
