import React from "react";

const Privacy = () => {
  return (
    <section className="bg-[#5648b1] text-white py-20 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          We value your privacy and are committed to protecting your personal information. 
          This Privacy Policy outlines how we collect, use, and safeguard your data when you use our CRM platform.
        </p>
        <p className="mb-4">
          By using our services, you agree to the collection and use of information in accordance with this policy.
        </p>
        <p className="mb-4">
          We do not sell or share your data with third parties without your consent. 
          Your information is securely stored and only used to improve your experience.
        </p>
        <p>
          If you have any questions, please contact us at 
          <a href="mailto:info@airemovals.co.uk" className="underline ml-1">info@airemovals.co.uk</a>.
        </p>
      </div>
    </section>
  );
};

export default Privacy;
