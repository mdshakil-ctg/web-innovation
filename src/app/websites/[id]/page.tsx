"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/components/Projects";
import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";
import BannerTitle from "@/app/components/shared/BaneerTitle";
export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-20">Project not found</p>;

  const steps = [
    {
      step: "Step 01",
      title: "Research",
      description:
        "Interdum et malesuada fames ac Etiam eu repeat nibh elementum, accumsan ona.",
      icon: (
        <FaLightbulb className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
    {
      step: "Step 02",
      title: "Development",
      description:
        "Interdum et malesuada fames ac Etiam eu repeat nibh elementum, accumsan ona.",
      icon: (
        <FaLaptopCode className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
    {
      step: "Step 03",
      title: "Deploy",
      description:
        "Interdum et malesuada fames ac Etiam eu repeat nibh elementum, accumsan ona.",
      icon: (
        <FaRocket className="w-6 h-6 text-gray-600 absolute top-4 right-4" />
      ),
    },
  ];

  const projectInfo = [
    { label: "Client", value: "Argova Josen" },
    { label: "Company", value: "Egens Lab" },
    { label: "Location", value: "7 Lake Street, London" },
    { label: "Project Type", value: "Desktop Mockup" },
    { label: "Duration", value: "6 Month" },
  ];

  return (
    <>
        <BannerTitle title={project?.title}/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Image layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main large image */}
        <div className="lg:col-span-2">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={800}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Two stacked images */}
        <div className="flex flex-col gap-4">
          <Image
            src="/portfolio-dt-01.jpg"
            alt="Supporting Image 1"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
          <Image
            src="/portfolio-dt-02.jpg"
            alt="Supporting Image 2"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl text-white font-bold mb-4">
              Projects Overview
            </h2>
            <p className="text-gray-300 mb-4">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In
              eu ipsum fringilla, accumsan purus vel, pellentesque risus.
              Vivamus vehicula nl purus at eros interdum, in dignissim nulla
              vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedan
              pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi
              erat nisi, vehicula quis faucibus il ut, hendrerit vel tortor. In
              pharetra lectus luctus ornare sollicitudin.
            </p>
            <p className="text-gray-300">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In
              eu ipsum fringilla, accumsan purus vel, pellentesque risus.
              Vivamus vehicula nl pellentesque quis magna eu vestibulum. Ut sed
              commodo neque. Morbi erat nisi, vehicula quis faucibus il ut,
              hendrerit vel tortor. In pharetra lectus luctus ornare
              sollicitudin.
            </p>
          </section>

          {/* Working Process */}
          <section className="py-12">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Working Process
            </h2>
            <div className="grid md:grid-cols-3 gap-6 ">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 
                       hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10
                       transition-all duration-300 group"
                >
                  {item.icon}
                  <p className="text-green-500 font-semibold">{item.step}</p>
                  <h3 className="text-xl text-white  font-bold mt-1 group-hover:text-green-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Images */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/portfolio-dt-04.jpg"
              alt="Extra Image 1"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/portfolio-dt-05.jpg"
              alt="Extra Image 2"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8">
          {/* Project Info Card */}
          <div className="bg-gradient-to-b from-black/80 to-green-900/40 border-1 border-gray-800 rounded-2xl p-6 w-full max-w-sm">
            {projectInfo.map((item, index) => (
              <div
                key={index}
                className={`py-4 border-b border-white/10 last:border-none`}
              >
                <p className="text-gray-500 text-sm">{item.label}:</p>
                <p className="text-white/70 font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="relative bg-black rounded-2xl overflow-hidden w-full max-w-sm"
            style={{ height: "300px" }}
          >
            {/* Background Image */}
            <Image
              src="/portfolio-dt-04.jpg" // Replace with your actual image path
              alt="Work with us"
              width={600}
              height={400}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="relative px-6 flex flex-col justify-center h-full">
              <h2 className="text-white font-bold text-2xl">Ready to</h2>
              <h3 className="text-gray-300 text-2xl mb-6">work with us?</h3>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-2 px-4 rounded-md w-fit">
                Get a quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* conclusion section */}
      <div className="bg-black text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Conclusion Text */}
        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
        <p className="text-gray-300 mb-4">
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu
          nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum
          fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula
          nl purus at eros interdum, in dignissim nulla vestibulum.
        </p>

        <hr className="border-gray-700 my-6" />

        {/* Navigation Links */}
        <div className="flex justify-between items-center">
          {/* Previous */}
          <div className="flex items-center gap-3">
            <Image
              src="/portfolio-dt-02.jpg" // Replace with actual image path
              alt="Previous Project"
              width={600}
            height={400}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <span className="text-emerald-500 text-xs font-semibold block">
                PREVIOUS
              </span>
              <p className="font-bold leading-snug">
                Accumsan Purus Vel, Pellentesque Risus
              </p>
            </div>
          </div>

          {/* Next */}
          <div className="flex items-center gap-3 text-right">
            <div>
              <span className="text-emerald-500 text-xs font-semibold block">
                NEXT
              </span>
              <p className="font-bold leading-snug">
                Ut Sed Commodo Neque Morbi Erat Nisi
              </p>
            </div>
            <Image
              src="/portfolio-dt-01.jpg" // Replace with actual image path
              alt="Next Project"
              width={600}
            height={400}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
        </div>

        <hr className="border-gray-700 mt-6" />
      </div>
    </div>
    </div>
    </>
  );
}
