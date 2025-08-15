// components/ServicesSection.jsx
import { FaCode, FaCloud } from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
    icon: <FaCode className="text-green-400 text-4xl" />,
    link: "#",
  },
  {
    id: "02",
    title: "Cloud Solutions",
    description:
      "Cloud Solutions is the process of creating websites and web applications for the web, internet or intranet.",
    icon: <FaCloud className="text-green-400 text-4xl" />,
    link: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-12">
          <span className="text-white">Our</span>{" "}
          <span className="text-white">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#111113] rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg hover:shadow-green-500/20 transition duration-300"
            >
              <span className="text-gray-600 text-3xl font-bold">
                {service.id}
              </span>
              <h3 className="text-xl font-bold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-3">{service.description}</p>
              <a
                href={service.link}
                className="mt-4 text-green-400 font-semibold inline-flex items-center hover:underline"
              >
                LEARN MORE →
              </a>
              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition">
                {service.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <span className="w-3 h-3 rounded-full border border-green-400"></span>
          <span className="w-3 h-3 rounded-full border border-green-400"></span>
        </div>
      </div>
    </section>
  );
}
