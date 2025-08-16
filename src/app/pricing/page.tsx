"use client";
import { useState } from "react";
import Link from "next/link";
import BannerTitle from "../components/shared/BaneerTitle";
import Button from "../components/shared/Button";

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      monthly: 29,
      yearly: 200,
      features: [
        "Email & Communication Services",
        "Basic Data Backup And Storage",
        "Standard Security Measures",
        "Limited Software Support",
        "Suitable For Small Businesses",
      ],
    },
    {
      name: "Professional Plan",
      monthly: 49,
      yearly: 490,
      features: [
        "Email & Communication Services",
        "Basic Data Backup And Storage",
        "Standard Security Measures",
        "Limited Software Support",
        "Suitable For Small Businesses",
      ],
    },
    {
      name: "Enterprise Plan",
      monthly: 89,
      yearly: 890,
      features: [
        "Email & Communication Services",
        "Basic Data Backup And Storage",
        "Standard Security Measures",
        "Limited Software Support",
        "Suitable For Small Businesses",
      ],
    },
  ];

  return (
    <>
    <BannerTitle title="Pricing"/>
    <section className="bg-black text-white py-16">
      <div className="text-center mb-16">
        <h2 className="text-xl md:text-4xl font-bold mb-10">Choose Your Plan</h2>

        {/* Billing Toggle */}
        <div className="mt-4 flex justify-center gap-2 bg-gray-900 rounded-full text-sm md:text-md md:px-2 md:py-1 w-fit mx-auto">
          <button
            className={`px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold transition ${
              !isYearly ? "bg-green-500 text-black" : "hover:bg-gray-800"
            }`}
            onClick={() => setIsYearly(false)}
          >
            Billed Monthly
          </button>
          <button
            className={`px-2 py-1 md:px-4 md:py-2 rounded-full font-semibold transition flex items-center gap-1 ${
              isYearly ? "bg-green-500 text-black" : "hover:bg-gray-800"
            }`}
            onClick={() => setIsYearly(true)}
          >
            Billed Yearly{" "}
            <span className=" text-[8px] bg-green-500 px-1 md:px-3 py-1 rounded-full font-normal">30% OFF</span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 cursor-pointer">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-500 transition"
          >
            <h3 className="text-green-500 text-lg font-semibold text-center">
              {plan.name}
            </h3>
            <div className="text-center mt-4">
              <span className="text-5xl font-bold">
                ${isYearly ? plan.yearly : plan.monthly}
              </span>
              <span className="text-green-500 ml-1">
                /{isYearly ? "Yearly" : "Monthly"}
              </span>
            </div>

            <ul className="my-12 space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center border-b border-gray-800 pb-2"
                >
                  <span>{feature}</span>
                  <span className="text-green-500 font-bold">✔</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <Link href="/checkout">
                <Button text="Pay Now"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    </>
  );
}
