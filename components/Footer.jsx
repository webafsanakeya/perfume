"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const linkSections = [
    {
      title: "PRODUCTS",
      links: [
        { text: "Men's Perfumes", path: "/" },
        { text: "Women's Perfumes", path: "/" },
        { text: "Unisex Perfumes", path: "/" },
        { text: "Luxury Collections", path: "/" },
      ],
    },
    {
      title: "WEBSITE",
      links: [
        { text: "Home", path: "/" },
        { text: "Privacy Policy", path: "/" },
        { text: "Become Plus Member", path: "/pricing" },
        { text: "Create Your Store", path: "/create-store" },
      ],
    },
    {
      title: "CONTACT",
      links: [
        { text: "+1-212-456-7890", path: "/" },
        { text: "contact@example.com", path: "/" },
        { text: "794 Francisco, 94102", path: "/" },
      ],
    },
  ];

  const socialIcons = [
    { icon: "🌐", link: "https://www.facebook.com" },
    { icon: "📸", link: "https://www.instagram.com" },
    { icon: "🐦", link: "https://twitter.com" },
    { icon: "💼", link: "https://www.linkedin.com" },
  ];

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1E2F] via-[#2D2D44] to-[#1E1E2F] animate-[gradientShift_15s_linear_infinite]"></div>

      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F28C28] via-[#FF5F7E] to-[#F28C28] animate-pulse opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 text-slate-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div>
            <motion.div
              className="text-4xl font-semibold text-white drop-shadow-lg"
              animate={{
                textShadow: [
                  "0 0 10px #F28C28",
                  "0 0 20px #F28C28",
                  "0 0 10px #F28C28",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Link href="/">
                <span className="text-[#F28C28]">per</span>Fumes
                <span className="text-[#F28C28] text-5xl">.</span>
              </Link>
            </motion.div>

            <p className="max-w-[410px] mt-6 text-sm text-slate-400">
              Welcome to perfumes, your ultimate destination for premium scents.
              From women’s and men’s collections to luxury editions, we bring
              you timeless fragrances — all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">
              {socialIcons.map((item, i) => (
                <motion.a
                  href={item.link}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-[#F28C28] text-white rounded-full shadow-md"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5 text-sm">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-white md:mb-5 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-slate-400"
                      whileHover={{
                        x: 6,
                        color: "#F28C28",
                        textShadow: "0 0 8px #F28C28",
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Link href={link.path} className="hover:underline">
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          className="py-4 text-sm text-slate-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Copyright 2025 © perfumes. All Rights Reserved.
        </motion.p>
      </div>

      {/* Tailwind Keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-[gradientShift_15s_linear_infinite] {
          background-size: 300% 300%;
          animation: gradientShift 15s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
