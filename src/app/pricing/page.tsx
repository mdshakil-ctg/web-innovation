import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Button from "../components/shared/Button";

const packages = [
  {
    name: "Beginner",
    price: "BDT ১০,০০০/",
    features: [
      "ফ্রি .com/.net/.org ডোমেইন",
      "৫GB SSD হোস্টিং",
      "ব্যান্ডউইথ: ১০০GB",
      "সার্ভার মেইনটেনেন্স: লাইফটাইম",
      "সর্বোচ্চ ডাইনামিক পেজ: ৫",
      "শপিং কার্ট, শিপমেন্ট অপশন",
      "পেমেন্ট: মোবাইল ব্যাঙ্কিং, কার্ড",
      "অর্ডার ম্যানেজমেন্ট অপশন",
      "অটো জেনারেটেড বিল",
      "মাল্টিপল ইমেজ অপশন: না",
      "পোস্ট-সেলস সাপোর্ট: ১ মাস",
      "ডেভেলপমেন্ট টাইমলাইন: ৫ দিন",
      "রিনিউ: ৩,০০০ টাকা/বছর",
    ],
  },
  {
    name: "Buisness",
    price: "BDT ২০,০০০/",
    features: [
      "ফ্রি .com/.net/.org ডোমেইন",
      "১৫GB SSD হোস্টিং",
      "ব্যান্ডউইথ: ৫০০GB",
      "সার্ভার মেইনটেনেন্স: লাইফটাইম",
      "সর্বোচ্চ ডাইনামিক পেজ: ১০",
      "শপিং কার্ট, শিপমেন্ট অপশন",
      "পেমেন্ট: মোবাইল ব্যাঙ্কিং, কার্ড",
      "অর্ডার ম্যানেজমেন্ট অপশন",
      "অটো জেনারেটেড বিল",
      "মাল্টিপল ইমেজ অপশন: হ্যাঁ",
      "পোস্ট-সেলস সাপোর্ট: ২ মাস",
      "ডেভেলপমেন্ট টাইমলাইন: ১০ দিন",
      "রিনিউ: ৫,০০০ টাকা/বছর",
    ],
  },
  {
    name: "Corporate",
    price: "BDT ৫০,০০০/",
    features: [
      "ফ্রি .com/.net/.org ডোমেইন",
      "১০০GB SSD হোস্টিং",
      "ব্যান্ডউইথ: আনলিমিটেড",
      "সার্ভার মেইনটেনেন্স: লাইফটাইম",
      "সর্বোচ্চ ডাইনামিক পেজ: ২০",
      "শপিং কার্ট, শিপমেন্ট অপশন",
      "পেমেন্ট: মোবাইল ব্যাঙ্কিং, কার্ড",
      "অর্ডার ম্যানেজমেন্ট অপশন",
      "অটো জেনারেটেড বিল",
      "মাল্টিপল ইমেজ অপশন: হ্যাঁ",
      "পোস্ট-সেলস সাপোর্ট: ৩ মাস",
      "ডেভেলপমেন্ট টাইমলাইন: ১৫ দিন",
      "রিনিউ: ১০,০০০ টাকা/বছর",
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="py-12">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-10 md:mb-16 text-gray-500 drop-shadow-md">
        প্যাকেজ ও মূল্য তালিকা
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {packages.map((pkg, idx) => (
          <Card
            key={idx}
            className="bg-[#111827] text-white rounded-2xl border border-gray-600 shadow-lg shadow-green-500/40 hover:shadow-green-400/80 hover:scale-105 transition-transform relative overflow-hidden"
          >
            <CardHeader className="p-6">
              <div className="text-4xl font-extrabold text-green-500 opacity-20 absolute top-4 left-4">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <CardTitle className="text-3xl font-bold relative z-10 text-center text-green-600">
                {pkg.name}
              </CardTitle>
              <p className="text-lg font-semibold text-center relative z-10">{pkg.price}</p>
            </CardHeader>
            <CardContent className="p-6 md:p-10 space-y-3 relative z-10">
              {pkg.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start flex-1 gap-2">
                  <Check className="w-5 h-5 text-green-400 mt-1" />
                  <span className="text-gray-300 text-sm font-bold flex-1">{feature}</span>
                </div>
              ))}
              <div className="flex justify-center mt-4">
                <Button text="Go Portfolio"/>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
