import Banner from "./components/Banner";
import CaseStudy from "./components/Casestudy";
import Choose from "./components/Choose";
import ContactSection from "./components/ContactSection";
import Review from './components/Review';
import ServicesSection from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhatWeDo from "./components/Whatwedo";



export default function Home() {
  return (
    <div className="pb-12 text-white space-y-5 md:space-y-24">
      <Banner/>
      <Review/>
      <Choose/>
      <ServicesSection/>
      <CaseStudy/>
      <Testimonial/>
      <WhatWeDo/>
      <ContactSection/>
    </div>
  );
}
