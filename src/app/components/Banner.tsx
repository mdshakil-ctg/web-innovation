import Image from 'next/image'
import banner from '@/assets/banner.png'
import Button from './shared/Button'
import Link from 'next/link'
const Banner = () => {
  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-6 md:py-16">
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

          <div className="mt-8 flex flex-wrap gap-6">
            <Link href='#contactme'><div><Button text='Free Consult'/></div></Link>
           <Link href='/websites'>
            <button className="flex items-center gap-2 bg-transparent text-green-500 font-semibold px-11 py-2 rounded-md border border-green-700 hover:bg-green-500 hover:text-black tracking-wider cursor-pointer hover:transition-all duration-300">
              View All Work <span className="text-xl">↗</span>
            </button>
           </Link>
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