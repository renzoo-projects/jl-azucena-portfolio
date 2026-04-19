'use client'

import { motion } from 'framer-motion'

const items = ['Home', 'Works', 'About', 'Services', 'Contact']

export function Navbar() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-5 px-6 md:px-12 bg-brandBlack/85 backdrop-blur-md border-b border-rust/30"
    >
      {/* LOGO */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-bebas text-2xl tracking-[0.15em] text-orange"
      >
        JL Azucena
      </motion.div>

      {/* LINKS */}
      <ul className="hidden md:flex gap-8 list-none">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
          >
            <button
              onClick={() => handleScroll(item.toLowerCase())}
              className="relative text-terra text-xs tracking-[0.12em] uppercase transition-colors duration-300 hover:text-orange"
            >
              {item}

              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-orange/5 blur-xl rounded-md" />
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}