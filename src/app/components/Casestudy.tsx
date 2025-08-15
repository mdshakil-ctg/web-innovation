import Image from "next/image";
import case1 from "@/assets/Case-Study-1.jpg";
import case2 from "@/assets/Case-Study-2.jpg";
import case3 from "@/assets/Case-Study-3.jpg";
import case4 from "@/assets/Case-Study-4.jpg";

const caseStudies = [
  {
    category: "Cloud Hosting",
    title: "Morbi Erat Ut, Hendrerit Vel Tortor",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus...",
    image: case1, // replace with your image
    link: "#",
  },
  {
    category: "Data Analytics",
    title: "Nunc Sit Amet Finibus Felis, Ut Egestas Lacus.",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus...",
    image: case2,
    link: "#",
  },
  {
    category: "Digital Marketing",
    title: "Accumsan Purus Vel, Pellentesque Risus.",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus...",
    image: case3,
    link: "#",
  },
  {
    category: "Cloud Hosting",
    title: "Vivamus Vehicula Noted By Thi Ut, Hendrerit Vel",
    description:
      "Interdum et malesuada fames ac ante ipsum primis in faucibus...",
    image: case4,
    link: "#",
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-[#0a0a0d] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-16">
          <span className="opacity-10 block text-9xl -mb-12 text-slate-600">Case Study</span>
          Case Study</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            {caseStudies.slice(0, 2).map((item, i) => (
              <div key={i}>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-green-400 uppercase text-sm font-semibold">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-3 inline-block text-green-400 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {caseStudies.slice(2, 4).map((item, i) => (
              <div key={i}>
                <div className="relative w-full h-56 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="text-green-400 uppercase text-sm font-semibold">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="mt-3 inline-block text-green-400 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="bg-green-400 text-black font-semibold px-6 py-3 rounded hover:bg-green-500 transition"
          >
            View All Case
          </a>
        </div>
      </div>
    </section>
  );
}
