'use client'

import { motion } from 'framer-motion'

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp
} from 'react-icons/fa'

import { SiLinktree } from 'react-icons/si'

import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-mahogany py-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,120,50,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.4),transparent_45%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* HEADER */}
          <div className="space-y-5">
            <div className="text-[0.72rem] tracking-[0.25em] uppercase text-orange/90">
              Let's Create Together
            </div>

            <h2 className="font-bebas text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-white">
              Got a story <br />
              to <span className="text-orange">tell?</span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-terra text-base leading-[1.9] max-w-md opacity-90">
            Whether it's a brand campaign, short film, or music video —
            let's build something that feels cinematic, intentional, and unforgettable.
          </p>

          {/* EMAIL */}
          <a
            href="mailto:jl@azucena.com"
            className="inline-block text-orange text-sm tracking-[0.25em] uppercase hover:opacity-60 transition"
          >
            jl@azucena.com
          </a>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 pt-2">

            {[
              { icon: FaFacebook, link: 'https://facebook.com' },
              { icon: FaInstagram, link: 'https://instagram.com' },
              { icon: FaYoutube, link: 'https://youtube.com' },
              { icon: FaLinkedin, link: 'https://linkedin.com' },
              { icon: FaTiktok, link: 'https://tiktok.com' },
              { icon: FaWhatsapp, link: 'https://whatsapp.com' },
              { icon: SiLinktree, link: 'https://linktr.ee/jlazucena' }
            ].map((social, i) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 flex items-center justify-center rounded-md
                             border border-white/10 bg-white/5
                             backdrop-blur-md
                             hover:border-orange/40 hover:bg-orange/10
                             transition"
                >
                  <Icon size={18} className="text-terra hover:text-orange transition" />
                </motion.a>
              )
            })}

          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-5"
        >

          <div className="grid gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/5 border border-white/10
                         px-5 py-4 text-white text-sm
                         outline-none rounded-md
                         focus:border-orange/50 focus:bg-white/10
                         transition backdrop-blur-md"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10
                         px-5 py-4 text-white text-sm
                         outline-none rounded-md
                         focus:border-orange/50 focus:bg-white/10
                         transition backdrop-blur-md"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-white/5 border border-white/10
                         px-5 py-4 text-white text-sm
                         outline-none rounded-md
                         resize-none
                         focus:border-orange/50 focus:bg-white/10
                         transition backdrop-blur-md"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange/90 text-brandBlack
                       hover:bg-orange hover:scale-[1.01]
                       transition-all duration-300
                       px-8 py-6 rounded-md
                       text-xs uppercase tracking-[0.14em]"
          >
            Send Message
          </Button>

        </motion.form>

      </div>
    </section>
  )
}