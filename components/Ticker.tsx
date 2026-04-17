'use client'

import { motion } from 'framer-motion'
import { tickerItems } from '@/lib/data'

export function Ticker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-orange overflow-hidden py-2 whitespace-nowrap"
    >
      <motion.div
        className="flex w-max"
        initial={{ x: '0%' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
          delay: 0.3 // starts AFTER entry animation
        }}
      >
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-bebas text-sm tracking-[0.15em] text-brandBlack px-8">
              {item}
            </span>
            <span className="text-brandBlack/30">✦</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}