"use client"
import Navbar from "@/components/Navbar"
import Banner from "@/components/Banner"

import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"

const ContactPage = () => {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white">
      <Navbar />
      <Banner title="Contact Us" subtitle="We’d love to hear from you" />
      <main className="max-w-7xl mx-auto px-6 py-12">
       <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
