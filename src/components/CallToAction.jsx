import React from "react";

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="max-w-2xl text-center mb-8 text-lg">
        Need help or have questions? Our team is here to support you 24/7. Feel free to reach out and we’ll get back to you as soon as possible.
      </p>
      <a
        href="mailto:info@airemovals.co.uk"
        className="bg-purple-600 hover:bg-purple-800 transition px-8 py-4 rounded-lg text-lg font-semibold shadow-lg border border-white"
      >
        Email Us
      </a>
    </section>
  );
};

export default CallToAction;
