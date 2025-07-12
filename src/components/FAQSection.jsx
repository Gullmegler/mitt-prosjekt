import React from "react";

const FAQSection = () => {
  return (
    <div className="bg-gray-100 py-16" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">How does the AI survey work?</h3>
            <p className="text-gray-700">
              You upload images and videos, and our AI analyzes and generates a detailed inventory automatically. Results are synced directly to your CRM dashboard.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Can I customize the CRM features?</h3>
            <p className="text-gray-700">
              Yes, you can fully customize the CRM to match your company's workflow and specific needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Is there a free trial?</h3>
            <p className="text-gray-700">
              Yes, we offer a free trial so you can explore all features before subscribing.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Which countries do you support?</h3>
            <p className="text-gray-700">
              We support companies worldwide. The system is built to handle multi-language and multi-currency setups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
