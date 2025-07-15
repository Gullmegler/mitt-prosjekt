import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#5648b1] text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Have questions? Reach out to our team anytime.</p>
      <a href="mailto:info@airemovals.co.uk" className="inline-block bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
        Email Us
      </a>
    </section>
  );
};

export default Contact;
