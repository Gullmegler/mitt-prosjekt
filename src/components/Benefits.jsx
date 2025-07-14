export default function Benefits() {
  const benefits = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%"
  ];

  return (
    <section id="benefits" className="bg-[#0d1117] text-white px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Use AI Removals CRM
      </h2>
      <ul className="max-w-3xl mx-auto space-y-4 text-left">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="bg-green-600 text-white rounded-full p-1.5">
              ✓
            </div>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
