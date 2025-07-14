export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-purple-900 to-purple-950 text-white relative">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Best AI-powered CRM for Removal Company 2025
      </h1>
      <p className="max-w-2xl mb-8 text-lg">
        Optimize your workflows, automate surveys, and grow your removal company with our specialized CRM solution.
      </p>
      <div className="flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded text-black"
        />
        <button className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 transition">
          Sign Up CRM
        </button>
      </div>
    </section>
  );
}
