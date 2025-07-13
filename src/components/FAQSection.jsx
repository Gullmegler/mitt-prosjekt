export default function FAQSection() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <h2 className="text-3xl font-extrabold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-left">
        <div>
          <h3 className="font-semibold text-lg">How does the AI survey work?</h3>
          <p className="text-gray-300">You upload videos or photos, and our AI detects, labels, and updates your CRM automatically.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Can I try before subscribing?</h3>
          <p className="text-gray-300">Yes! You can start with a free trial and explore all features.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">What integrations are supported?</h3>
          <p className="text-gray-300">Our system integrates seamlessly with most major removals CRM solutions.</p>
        </div>
      </div>
    </section>
  );
}
