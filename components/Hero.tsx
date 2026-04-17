'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const fadeLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } }
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 bg-brandBlack overflow-hidden py-24 lg:py-0">
      {/* Animated Scanline */}
      <motion.div 
        animate={{ x: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange to-transparent z-20"
      />
      
      {/* Massive Background Typography - Centered */}
      <div className="absolute inset-0 flex items-center justify-center font-bebas text-[clamp(10rem,25vw,22rem)] text-rust/10 leading-none pointer-events-none tracking-tighter select-none z-0">
        EDIT
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">
        
        {/* TEXT CONTENT (Left Side) */}
        <motion.div 
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="w-full lg:w-1/2 max-w-2xl relative"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-[0.72rem] tracking-[0.2em] uppercase text-orange mb-6">
            <span className="w-8 h-[1px] bg-orange block" /> Video Editor & Post-Production
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-bebas text-[clamp(4rem,11vw,9rem)] leading-[0.92] text-white tracking-[0.02em]">
            JL<br /><span className="text-orange">Azucena</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="mt-6 text-base font-light leading-[1.7] text-terra max-md:max-w-xs max-w-md">
            Crafting stories frame by frame — from raw footage to cinematic experiences that move, provoke, and linger.
          </motion.p>
          
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <Button asChild className="bg-orange text-brandBlack hover:bg-[#ff7033] rounded-none px-8 py-6 font-sans text-xs font-medium tracking-[0.12em] uppercase transition-transform hover:-translate-y-1">
              <Link href="#work">View My Work</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-terra/40 text-terra hover:border-orange hover:text-orange rounded-none px-8 py-6 font-sans text-xs font-medium tracking-[0.12em] uppercase">
              <Link href="#contact">Let's Collaborate</Link>
            </Button>
          </motion.div>

          {/* Scroll Hint - Now aligned with the text content */}
          <motion.div 
            variants={fadeUp}
            className="hidden md:flex items-center gap-3 text-[0.72rem] tracking-[0.15em] uppercase text-terra/50 mt-16"
          >
            <div className="w-10 h-[1px] bg-terra/30 relative overflow-hidden">
              <motion.div 
                animate={{ left: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-0 w-full h-full bg-orange"
              />
            </div>
            Scroll to explore
          </motion.div>
        </motion.div>

        {/* PROFILE IMAGE FRAME (Right Side) */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeLeft}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[380px] aspect-[4/5] group">
            <div className="absolute inset-0 border border-rust/40 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="absolute inset-0 bg-mahogany border border-rust/30 overflow-hidden z-10">
              <div className="absolute inset-0 bg-orange/10 mix-blend-overlay z-10 pointer-events-none" />
              <Image 
                src="/jlazucena.jpg" 
                alt="JL Azucena"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-orange z-20" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-orange z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}