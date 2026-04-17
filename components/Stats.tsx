'use client'

import { motion } from 'framer-motion'
import { statsData } from '@/lib/data'

export function Stats() {
  return (
    <div className="bg-mahogany border-y border-rust/50 grid grid-cols-2 md:grid-cols-4 py-10 px-6 md:px-12 gap-y-6">

      {statsData.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: i * 0.08
          }}
          className="text-center md:border-r border-rust/30 last:border-none px-4"
        >
          <div className="font-bebas text-5xl text-orange leading-none">
            {stat.num}
          </div>

          <div className="text-[0.72rem] tracking-[0.12em] uppercase text-terra mt-2 opacity-70">
            {stat.label}
          </div>
        </motion.div>
      ))}

    </div>
  )
}