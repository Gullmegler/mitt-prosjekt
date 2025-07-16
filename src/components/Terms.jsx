import React from "react";

const Terms = () => {
  return (
    <section className="bg-gradient-to-b from-[#111144] to-[#1f1f4d] text-white py-20 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>
        <p className="mb-4 text-center">
          By accessing or using our CRM platform, you agree to comply with and be bound by these Terms of Service.
        </p>
        <p className="mb-4 text-center">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
        </p>
        <p className="mb-4 text-center">
          We reserve the right to update or change these terms at any time without prior notice.
        </p>
        <p className="text-center">
          If you have any questions about these Terms, please contact us at
          <a href="mailto:info@airemovals.co.uk" className="underline ml-1">info@airemovals.co.uk</a>.
        </p>
      </div>
    </section>
  );
};

export default Terms;
