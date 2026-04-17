'use client'
import { motion } from 'framer-motion'
import { tickerItems } from '@/lib/data'

export function Ticker() {
  return (
    <div className="bg-orange overflow-hidden py-2 whitespace-nowrap flex">
      <motion.div 
        animate={{ x: [0, -1035] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="flex"
      >
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-bebas text-sm tracking-[0.15em] text-brandBlack px-8">{item}</span>
            <span className="text-brandBlack/30">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}