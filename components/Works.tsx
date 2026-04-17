'use client'

import { motion } from 'framer-motion'
import { workItems } from '@/lib/data'

export function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-brandBlack">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mb-14"
      >
        <span className="font-bebas text-sm text-orange tracking-[0.2em]">
          01
        </span>
        <h2 className="font-bebas text-[clamp(2.2rem,5vw,3.5rem)] text-white tracking-[0.05em]">
          Selected Works
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-rust/50 to-transparent" />
      </motion.div>

      {/* ITEMS */}
      <div className="grid grid-cols-12 gap-6">
        {workItems.map((work, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden cursor-pointer bg-mahogany border border-rust/25 hover:border-orange transition-colors ${work.size}`}
          >
            <div className="w-full aspect-video flex items-center justify-center relative">

              <div className={`w-full h-full flex items-center justify-center font-bebas text-8xl relative ${work.bg}`}>
                ▶
              </div>

              <div className="absolute inset-0 bg-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                className="absolute w-12 h-12 rounded-full border-2 border-orange flex items-center justify-center bg-orange/15"
              >
                <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-orange ml-1" />
              </motion.div>

            </div>

            <div className="p-4 md:p-5">
              <div className="text-[0.65rem] tracking-[0.18em] uppercase text-orange mb-1">
                {work.category}
              </div>
              <div className="font-bebas text-xl text-white tracking-[0.06em]">
                {work.title}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* CTA BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <a
          href="https://linktr.ee/jlazucena"
          target="_blank"
          className="
            px-10 py-5
            border border-orange/40
            text-orange
            text-xs uppercase tracking-[0.15em]
            hover:bg-orange/10 hover:border-orange
            transition-all duration-300
          "
        >
          View More Projects
        </a>
      </motion.div>

    </section>
  )
}