import React from "react";

const Terms = () => {
  return (
    <section className="bg-[#5648b1] text-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">
          By accessing or using our CRM platform, you agree to comply with and be bound by these Terms of Service.
        </p>
        <p className="mb-4">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account.
        </p>
        <p className="mb-4">
          We reserve the right to update or change these terms at any time without prior notice.
          Continued use of the service after any such changes shall constitute your consent to such changes.
        </p>
        <p>
          If you have any questions about these Terms, please contact us at 
          <a href="mailto:info@airemovals.co.uk" className="underline ml-1">info@airemovals.co.uk</a>.
        </p>
      </div>
    </section>
  );
};

export default Terms;
