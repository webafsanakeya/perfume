"use client"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"

import Footer from "@/components/Footer"
import OurSpecs from "@/components/OurSpec"

const AboutPage = () => {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white">
      <Navbar />
      <Banner title="About Us" subtitle="Discover what makes perFumes unique" />
      <main className="max-w-7xl mx-auto px-6 py-12">
       <OurSpecs />
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
