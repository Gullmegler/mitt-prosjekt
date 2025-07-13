export default function Benefits() {
  return (
    <section className="bg-[#FFF7CF] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold mb-6">Why Use AI Removals CRM</h2>
          <ul className="space-y-3 text-lg text-gray-800">
            <li>Dashboard with full control and real-time overview</li>
            <li>CRM calendar with all job details — no extra clicks</li>
            <li>AI advice with smart task reminders</li>
            <li>AI-integrated video & photo surveys that impress customers</li>
            <li>Boost number of surveys by 60%</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src="/survey-agent.png" alt="Survey agent" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}
