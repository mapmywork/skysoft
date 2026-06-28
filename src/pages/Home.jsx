import React from 'react'
import Hero from '../components/hero/Hero'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'
import FeaturedFleet from '../components/fleet/FeaturedFleet'
import RentalCategories from '../components/services/RentalCategories'
import BookingProcess from '../components/booking/BookingProcess'
import CustomerReviews from '../components/testimonials/CustomerReviews'
import FAQ from '../components/faq/FAQ'
import ContactSection from '../components/contact/ContactSection'

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <WhyChooseUs />
      <FeaturedFleet />
      <RentalCategories />
      <BookingProcess />
      <CustomerReviews />
      <FAQ />
      <ContactSection />
    </div>
  )
}

export default Home
