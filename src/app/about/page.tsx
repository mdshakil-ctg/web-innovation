import React from 'react'
import OurApproach from '../components/OurApproach'
import Choose from '../components/Choose'
import OurStats from '../components/OurStats'
import ClientReview from '../components/ClientReview'
import ContactCircle from '../components/ContactCircle'
import BannerTitle from '../components/shared/BaneerTitle'

const AboutPage = () => {
  return (
    <section>
        <BannerTitle title='About'/>
        <OurApproach/>
        <Choose/>
        <OurStats/>
        <ContactCircle/>
        <ClientReview/>
    </section>
  )
}

export default AboutPage