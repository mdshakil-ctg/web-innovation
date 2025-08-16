import Image from "next/image";
import choose from "@/assets/choose.jpg";
import { FiArrowRight } from "react-icons/fi";

const Choose = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-10">
       

        <div>
          <p className="text-green-500 mb-2">--Why Choose Us</p>
          <h2 className="font-bold text-2xl md:text-5xl">
            Unlock The Potential <br /> Of Your Business.
          </h2>
        </div>
         <div className="md:w-[500px]">
          <Image alt="working" src={choose} width={500} height={300} className="w-full" />
        </div>
      </div>
      <div className="bg-[#0e0e0e] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Card */}
        <div className="bg-[#111] p-6 md:p-10 lg:p-16 relative rounded-lg border border-gray-800 overflow-hidden h-[400px]">
          {/* Top right decorative box */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-900 opacity-40"></div>

          {/* Logo & Heading */}
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-green-500 mr-1">●</span> Web Inn<span className="text-rose-500">o</span>vation
          </h2>
          <h3 className="mt-6 text-lg font-semibold">
            UBest Creative IT Agency And Solutions{" "}
            <span className="text-green-500">Since 2020.</span>
          </h3>

          {/* Description */}
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus
            at. Aliquam cursus nunc arcu, condimentum efficitur tellus iaculis
            faucibus Quisque gravida.
          </p>

          {/* Bottom left decoration */}
          <div className="absolute bottom-4 left-4 text-5xl font-bold text-gray-700 opacity-20">
            #1
          </div>

          {/* Button */}
          <button className="absolute bottom-4 right-4 flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-full text-sm hover:bg-green-500 hover:text-black transition">
            About More <FiArrowRight />
          </button>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-8">
          {/* Stat Item */}
          {[
            { title: "Strategy" },
            { title: "Audience" },
            { title: "Keyword" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              {/* Circle Percentage */}
              <div className="p-5 rounded-full border-2 border-gray-700 flex items-center justify-center text-xl font-bold">
                0%
              </div>
              {/* Text */}
              <div>
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-snug ">
                  Morbi interdum pellentesque nunc, luctus pretium nullagoneq luctus at. Aliquam one cursus nunc arcu
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Choose;
