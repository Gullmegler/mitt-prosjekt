import React from "react";

const FAQSection = () => {
  return (
    <section className="bg-[#5e50c2] text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[#7c3aed] mb-2">How easy is it to integrate?</h3>
          <p>Very easy! You can set it up and start using within minutes.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#7c3aed] mb-2">Can I customize the CRM?</h3>
          <p>Yes, you can fully tailor workflows, fields, and automations.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#7c3aed] mb-2">Is support included?</h3>
          <p>Absolutely. Our support team is available 24/7 to help you succeed.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
