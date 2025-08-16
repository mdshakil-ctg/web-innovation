"use client";

import { useState } from "react";
import Button from "./shared/Button";
import Link from "next/link";

interface AccordionItem {
  title: string;
  content: string;
}

export default function ContactSection() {
  // index of the currently open step; null means all collapsed
 const [openIndex, setOpenIndex] = useState<number | null>(0);

  const steps:AccordionItem[] = [
    {
      title: "Step 1",
      content:
        "Aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent nec neque at dolor venenatis consectetur eu quis ex. Placerat felis non aliquam.",
    },
    { title: "Step 2", content: "Short description for step two goes here." },
    { title: "Step 3", content: "Short description for step three goes here." },
  ];

  const toggle = (index: number) => {
    setOpenIndex((prev: number | null) => (prev === index ? null : index));
  };

  return (
    <section id="contactme" className="bg-black text-white pt-16 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="opacity-10 block text-5xl md:text-6xl -mb-10">CONTACT</span>
            Contact
          </h2>
          <p className="text-gray-400 mb-6">
            We are happy to answer any questions you may have and help you
            determine which of our services best fit your needs.
          </p>

          {/* Call button */}
          <div className="mb-8 flex justify-start">
            <Link
              href="tel:+8801815149399"
              className="inline-block border border-green-500 text-green-400 font-semibold px-3 md:px-6 py-3 rounded hover:bg-green-500 hover:text-black transition"
            >
              Call Us Now: +880 1815 149399
            </Link>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-800 border-t border-b border-gray-800">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={step.title} className="py-3">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between pr-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${i}`}
                  >
                    <span className="font-semibold text-green-400">
                      {step.title}
                    </span>
                    <span
                      className={`text-green-400 transition-transform ${
                        isOpen ? "rotate-0" : "rotate-0"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Panel */}
                  <div
                    id={`panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-400 mt-2 text-xs">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-8 shadow-lg">
          <h3 className="text-xl font-bold mb-6 text-center">
            Make a Free Consulting
          </h3>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
              />
            </div>

            <input
              type="text"
              placeholder="Company/Organization"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />

            <textarea
              rows={4}
              placeholder="Message"
              className="bg-transparent border border-gray-600 p-3 rounded text-sm w-full focus:outline-none focus:border-green-400"
            />
            <div className="flex justify-center">
            <Button text="Submit"/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
