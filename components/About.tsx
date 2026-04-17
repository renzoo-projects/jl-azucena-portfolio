'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { mainSkills, specializations } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-mahogany relative overflow-hidden">

      {/* glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,120,50,0.08),transparent_45%)] pointer-events-none" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-6 mb-14 relative z-10"
      >
        <span className="font-bebas text-sm text-orange tracking-[0.2em]">
          02
        </span>

        <h2 className="font-bebas text-[clamp(2.2rem,5vw,3.5rem)] text-white tracking-[0.05em]">
          About JL
        </h2>

        <div className="flex-1 h-[1px] bg-gradient-to-r from-orange/40 to-transparent" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-start relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-10 text-[1.05rem] md:text-[1.1rem] font-light leading-[1.9] text-terra"
        >
          <p>
            I'm <strong className="text-white font-medium">JL Azucena</strong>,
            a video editor focused on emotion-driven storytelling.
            <br></br>From <strong className="text-white font-medium">cinematic commercials</strong>,
            I refine pacing, rhythm, and narrative clarity in every frame.
            <br></br>
            I help creators turn raw footage into meaningful visual stories.
          </p>

          <Button
            className="bg-orange text-brandBlack hover:bg-orange/20 hover:text-orange border border-transparent 
            hover:border-orange/40 transition-all duration-300 rounded-none px-8 py-6 text-xs uppercase tracking-[0.12em]">

            <Link href="#contact">Work With Me</Link>
          </Button>
        </motion.div>

        {/* RIGHT */}
        <div>

          {/* MAIN SKILLS */}
          <div className="grid grid-cols-2 gap-3">
            {mainSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: -4,
                  scale: 1.03
                }}
                className="
                  border border-white/10 bg-white/5 backdrop-blur-md
                  p-3 text-[0.78rem] tracking-[0.1em] uppercase
                  text-terra cursor-default
                  hover:border-orange/40 hover:text-orange hover:bg-orange/10
                  transition
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* TITLE */}
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-bebas text-xl tracking-[0.1em] text-white mt-10 mb-4"
          >
            Specializations
          </motion.h3>

          {/* SPECIALIZATIONS */}
          <div className="grid grid-cols-2 gap-3">
            {specializations.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: -4,
                  scale: 1.03
                }}
                className="
                  border border-white/10 bg-white/5 backdrop-blur-md
                  p-3 text-[0.78rem] tracking-[0.1em] uppercase
                  text-terra cursor-default
                  hover:border-orange/40 hover:text-orange hover:bg-orange/10
                  transition
                "
              >
                {skill}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}