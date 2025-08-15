import Image from "next/image";
import whatimage from "@/assets/what-we-do-img.jpg"

export default function WhatWeDo() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What We Do
      </h2>

      {/* Top 3 Features */}
      <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
        {[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-green-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L6 21h12l-3.75-4M4.5 14.25v-2.25a7.5 7.5 0 1115 0v2.25M8.25 6.75h.008v.008H8.25V6.75zM15.75 6.75h.008v.008h-.008V6.75z"
                />
              </svg>
            ),
            title: "Research & Discovery",
            desc: "Web development is the process often than operedol creating dare eros augue, ultricies sedatoni quamot authol websites and web.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-green-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-2 2m0 0l-2-2m2 2V10m6 7l2 2m0 0l2-2m-2 2V10m-6 0h6"
                />
              </svg>
            ),
            title: "Industry Expertise",
            desc: "Web development is the process often than operedol creating dare eros augue, ultricies sedatoni quamot authol websites and web.",
          },
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-green-400 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ),
            title: "Quality Assurance",
            desc: "Web development is the process often than operedol creating dare eros augue, ultricies sedatoni quamot authol websites and web.",
          },
        ].map((item, i) => (
          <div key={i} className="space-y-4">
            {item.icon}
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Image + Text */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <Image
            src={whatimage} // place team.jpg in public/assets
            alt="Team working"
            width={500}
            height={350}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Unlock The Potential Of Your Creative Business.
          </h3>
          <p className="text-gray-400 mb-6">
            Morbi interdum pellentesque nunc, luctus pretium nulla luctus ac.
            Aliquam cursus nunc aliquam. Nam semper posuere risus, a gravida
            sapien tincidunt ac. Nam ac lacinia arcu. Aliquam erat volutpat.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            {[
              "Creative Strategy",
              "Rebranding Design",
              "Unique Production",
              "Corporate Identity",
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
