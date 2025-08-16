// components/OurStats.tsx
import { FaAward, FaUsers, FaCogs, FaMedal } from "react-icons/fa";

export default function OurStats() {
  const stats = [
    {
      icon: <FaMedal className="text-green-400 text-4xl mb-3" />,
      value: "5",
      label: "Years",
      desc: "Working With Passion",
    },
    {
      icon: <FaUsers className="text-green-400 text-4xl mb-3" />,
      value: "1.5K",
      label: "Customers",
      desc: "Satisfied Customer",
    },
    {
      icon: <FaCogs className="text-green-400 text-4xl mb-3" />,
      value: "800",
      label: "Projects",
      desc: "We Have Completed",
    },
    {
      icon: <FaAward className="text-green-400 text-4xl mb-3" />,
      value: "15",
      label: "Awards",
      desc: "Achievement For Service",
    },
  ];

  return (
    <section className="bg-[#1a1f23] text-white py-28 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left Title */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">Our States</h2>
          <p className="text-gray-500">
            Maecenas euismod viverra purus, volutpat posuere mauris tristique
            quisokaft.
          </p>
        </div>

        {/* Stats */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="px-6 py-4 flex flex-col items-center">
              {stat.icon}
              <h3 className="text-2xl font-bold">
                {stat.value} <span className="text-base font-normal">{stat.label}</span>
              </h3>
              <p className="text-gray-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
