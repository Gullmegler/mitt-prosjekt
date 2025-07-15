import React from "react";

const FAQ = () => {
  return (
    <section id="faq" className="bg-[#5648b1] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-purple-400">How easy is it to integrate?</h3>
            <p>Very easy! You can set it up and start using within minutes.</p>
          </div>
          <div>
            <h3 className="font-bold text-purple-400">Can I customize the CRM?</h3>
            <p>Yes, you can fully tailor workflows, fields, and automations.</p>
          </div>
          <div>
            <h3 className="font-bold text-purple-400">Is support included?</h3>
            <p>Absolutely. Our support team is available 24/7 to help you succeed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
