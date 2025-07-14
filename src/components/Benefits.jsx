import { Check } from "lucide-react"; // Du kan bruke lucide-react for en lett check-icon

export default function Benefits() {
  const benefits = [
    "Dashboard with full control and real-time overview",
    "CRM calendar with all job details — no extra clicks",
    "AI advice with smart task reminders",
    "AI-integrated video & photo surveys that impress customers",
    "Boost number of surveys by 60%",
  ];

  return (
    <section id="benefits" className="py-16 px-6 bg-gradient-to-b from-purple-900 to-purple-950 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Why Use AI Removals CRM</h2>
      <ul className="space-y-6 max-w-3xl mx-auto">
        {benefits.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-pink-500 rounded-full p-2">
              <Check className="text-white w-5 h-5" />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
