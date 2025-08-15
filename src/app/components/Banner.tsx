import Image from 'next/image'
import banner from '@/assets/banner.png'
const Banner = () => {
  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Side */}
        <div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Set Your <span className="text-green-500">Business</span> <br />
            New Ideas.
          </h1>
          <p className="mt-6 text-gray-300">
            Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla
            porttitor. Duis a orci nunc. Suspendisse ac convallis sapien, quis
            commodo libero.
          </p>
          <p className="mt-4 text-gray-300">
            Donec nec duomoi luctus, pellentesque lacus sed, mollis going leo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-500 text-black px-6 py-3 font-semibold rounded-md hover:bg-green-400 transition">
              Free Consultancy
            </button>
            <button className="flex items-center gap-2 bg-transparent text-green-400 font-semibold px-6 py-3 rounded-md border border-green-400 hover:bg-green-400 hover:text-black transition">
              View All Work <span className="text-xl">↗</span>
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div
          className="relative w-full h-[500px] overflow-hidden rounded-[30px]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)" }}
        >
          <Image
            src={banner}// put your image in public folder
            alt="Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-green-500 opacity-40"
            style={{
              clipPath: "polygon(20% 0, 30% 0, 60% 100%, 40% 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Banner