'use client'

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  Variants
} from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Animation variants
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 }
  }
}

// Component
export function Hero() {
  /* 🔥 Cursor tracking */
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 })

  /* 🔥 Particles (client-only to avoid hydration mismatch) */
  const [particles, setParticles] = useState<
    { left: number; top: number; duration: number }[]
  >([])

  useEffect(() => {
    // generate ONLY on client
    const generated = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2
    }))
    setParticles(generated)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  /* 🔥 Cursor glow gradient */
  const background = useMotionTemplate`
    radial-gradient(
      600px at ${smoothX}px ${smoothY}px,
      rgba(243,93,24,0.15),
      transparent 70%
    )
  `

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 bg-brandBlack overflow-hidden py-24 lg:py-0">

      {/* CURSOR GLOW */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background }}
      />

      {/* AMBIENT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(243,93,24,0.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(139,47,23,0.08),transparent_40%)] z-0" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-orange/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`
            }}
          />
        ))}
      </div>

      {/* SCANLINE */}
      <motion.div
        animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange to-transparent z-20"
      />

      {/* MAIN CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16"
      >

        {/* LEFT */}
        <div className="w-full lg:w-1/2 max-w-2xl">

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-orange mb-6"
          >
            <span className="w-8 h-[1px] bg-orange block" />
            Video Editor & Post-Production
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-bebas text-[clamp(4rem,11vw,9rem)] leading-[0.92] text-white tracking-[0.02em]"
          >
            <span className="whitespace-nowrap">John&nbsp;Lloyd</span>
            <br />
            <span className="text-orange">Azucena</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base font-light leading-[1.7] text-terra max-w-md"
          >
            Crafting stories frame by frame — from raw footage to cinematic experiences that move, provoke, and linger.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button className="bg-orange text-brandBlack hover:bg-orange/20 hover:text-orange border border-transparent hover:border-orange/40 transition-all duration-300 rounded-none px-8 py-6 text-xs uppercase tracking-[0.12em]">
              <Link href="#works">View My Work</Link>
            </Button>

            <Button asChild variant="outline" className="rounded-none px-8 py-6 text-xs uppercase tracking-[0.12em]">
              <Link href="#contact">Let's Collaborate</Link>
            </Button>
          </motion.div>

          {/* SCROLL */}
          <motion.div
            variants={fadeUp}
            className="hidden md:flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase text-terra/50 mt-16"
          >
            <div className="w-10 h-[1px] bg-terra/30 relative overflow-hidden">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-0 w-full h-full bg-orange"
              />
            </div>
            Scroll to explore
          </motion.div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeLeft}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5] group">

            <div className="absolute inset-0 border border-rust/40 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />

            <div className="absolute inset-0 bg-mahogany border border-rust/30 overflow-hidden z-10">
              <div className="absolute inset-0 bg-orange/10 mix-blend-overlay pointer-events-none" />
              <Image
                src="/jlazucena.jpg"
                alt="John Lloyd Azucena"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-orange" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-orange" />

          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}