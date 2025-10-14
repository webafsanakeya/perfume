'use client'
import { Search, ShoppingCart, Menu, X, PackageIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import {useUser, useClerk, UserButton} from "@clerk/nextjs"

const Navbar = () => {
const {user} = useUser()
const {openSignIn} = useClerk()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const cartCount = useSelector((state) => state.cart.total)
  const controls = useAnimation()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollY = useMotionValue(0)
  const navY = useTransform(scrollY, [0, 500], [0, -15])

  const handleSearch = (e) => {
    e.preventDefault()
    router.push(`/shop?search=${search}`)
  }

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY)
      if (window.scrollY > lastScrollY) {
        controls.start({ y: -100, opacity: 0, transition: { duration: 0.3 } })
      } else {
        controls.start({ y: 0, opacity: 1, transition: { duration: 0.3 } })
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, controls, scrollY])

  const menuItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.1, rotateX: 5, rotateY: 5, textShadow: '0px 0px 8px rgba(242,140,40,0.7)', transition: { type: 'spring', stiffness: 300 } },
  }

  const buttonVariants = {
    hover: { scale: 1.05, rotateX: 3, rotateY: 3, boxShadow: '0 8px 20px rgba(242,140,40,0.6)' },
    tap: { scale: 0.95, rotateX: 0, rotateY: 0 },
  }

  const plusVariants = {
    animate: {
      y: [0, -3, 0],
      rotate: [0, 5, 0],
      transition: { repeat: Infinity, duration: 1.2 },
    },
  }

  return (
    <motion.nav
      animate={controls}
      style={{ y: navY }}
      className="fixed w-full z-50 bg-gradient-to-r from-[#1a1a1a]/95 via-[#2c2c2c]/90 to-[#111111]/95 shadow-2xl backdrop-blur-md border-b border-[#F28C28]/40"
    >
      <div className="mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-4 transition-all">
          {/* Logo */}
          <Link href="/" className="relative text-3xl md:text-3xl font-bold text-white tracking-tight">
            <span className="text-[#F28C28]">per</span>Fume
            <span className="text-[#F28C28] text-4xl md:text-4xl leading-0">.</span>

            <motion.p
              className="absolute text-xs font-semibold -top-1 -right-8 px-3 p-0.5 rounded-full flex items-center gap-2 text-black bg-[#F28C28]"
              variants={plusVariants}
              animate="animate"
            >
              plus
            </motion.p>
          </Link>

          {/* Desktop / Tablet Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 text-white">
{['Home', 'Shop', 'About', 'Contact'].map((item) => (
  <motion.div
    key={item}
    variants={menuItemVariants}
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="hover:text-[#F28C28] transition cursor-pointer text-sm sm:text-base md:text-base"
  >
    <Link href={`/${item.toLowerCase()}`}>{item}</Link>
  </motion.div>
))}

            {/* Search Bar - Tablet & Desktop */}
           <form
    onSubmit={handleSearch}
    className="hidden lg:flex items-center w-xs text-sm gap-2 bg-[#2c2c2c]/70 px-3 py-2 rounded-full backdrop-blur-sm shadow-md"
  >
    <Search size={16} className="text-[#F28C28]" />
    <input
      className="w-full bg-transparent outline-none placeholder-[#F28C28] text-white text-sm"
      type="text"
      placeholder="Search products"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      required
    />
  </form>

            {/* Cart */}
              <motion.div
    whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: '0 8px 20px rgba(242,140,40,0.6)' }}
    className="relative text-sm sm:text-base"
  >
    <Link href="/cart" className="flex items-center gap-1 sm:gap-2 text-white">
      <ShoppingCart size={18} />
      Cart
      <span className="absolute -top-1 left-3 text-[8px] sm:text-[10px] text-white bg-[#F28C28] rounded-full px-1">
        {cartCount}
      </span>
    </Link>
  </motion.div>

            {/* Login Button */}
{!user ? (
              <motion.button
              onClick={openSignIn}
    className="px-6 sm:px-8 py-1 sm:py-2 bg-[#F28C28] hover:bg-white hover:text-black transition text-black rounded-full shadow-md text-sm sm:text-base"
    whileHover={buttonVariants.hover}
    whileTap={buttonVariants.tap}
  >
    Login
  </motion.button>
) : (
  <UserButton>
    <UserButton.MenuItems>
      <UserButton.Action labelIcon={<PackageIcon size={16}/> } label="My-Orders" onClick={()=>router.push('/orders')}/>
    </UserButton.MenuItems>
  </UserButton>
)}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center gap-2">
            {user ? (
              <div>
                  <UserButton>
    <UserButton.MenuItems>
      <UserButton.Action labelIcon={<ShoppingCart size={16}/> } label="Cart" onClick={()=>router.push('/cart')}/>
    </UserButton.MenuItems>
  </UserButton>

    <UserButton>
    <UserButton.MenuItems>
      <UserButton.Action labelIcon={<PackageIcon size={16}/> } label="My-Orders" onClick={()=>router.push('/orders')}/>
    </UserButton.MenuItems>
  </UserButton>
              </div>
            ) : (
              <div>
                        <motion.button
              onClick={(openSignIn) => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white rounded-full bg-[#F28C28]/80 hover:bg-[#F28C28]/100 transition"
              whileHover={{ scale: 1.1 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

              </div>
            )}
    
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-[#F28C28]/40"
        >
          <div className="flex flex-col p-4 gap-4 text-white">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="py-2 px-4 rounded hover:bg-[#F28C28]/20 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <form
              onSubmit={handleSearch}
              className="flex items-center w-full text-sm gap-2 bg-[#2c2c2c]/70 px-4 py-2 rounded-full backdrop-blur-sm shadow-md"
            >
              <Search size={18} className="text-[#F28C28]" />
              <input
                className="w-full bg-transparent outline-none placeholder-[#F28C28] text-white"
                type="text"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
              />
            </form>
            <Link
              href="/cart"
              className="flex items-center gap-2 text-white py-2 px-4 rounded hover:bg-[#F28C28]/20 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart size={18} />
              Cart
            </Link>
            <Link
              href="/login"
              className="py-2 px-4 bg-[#F28C28] text-black rounded-full text-center hover:bg-white hover:text-black transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
      <hr className="border-[#F28C28]/40" />
    </motion.nav>
  )
}

export default Navbar
