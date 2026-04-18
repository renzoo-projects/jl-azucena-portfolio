'use client'

import { motion } from 'framer-motion'
import { workItems } from '@/lib/data'
import { FiExternalLink } from 'react-icons/fi'

// Builds a permanently-autoplaying, muted, looping background src.
// Vimeo: background=1 hides all UI and loops automatically.
// YouTube: playlist=VIDEO_ID is required for loop=1 to work in iframes.
function buildSrc(url: string): string {
  if (!url) return ''
  const base = url.split('?')[0]

  if (url.includes('vimeo.com')) {
    return `${base}?autoplay=1&muted=1&loop=1&background=1&autopause=0`
  }

  // Extract YouTube video ID for the playlist param
  const ytIdMatch = base.match(/embed\/([^/?]+)/)
  const ytId = ytIdMatch ? ytIdMatch[1] : ''
  return `${base}?autoplay=1&mute=1&loop=1&playlist=${ytId}&controls=0&modestbranding=1&rel=0`
}

export function Works() {
  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-brandBlack">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'tween' }}
        viewport={{ once: true }}
        className="flex items-center gap-6 mb-14"
      >
        <span className="font-bebas text-sm text-orange tracking-[0.2em]">01</span>
        <h2 className="font-bebas text-[clamp(2.2rem,5vw,3.5rem)] text-white">
          Selected Works
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-rust/50 to-transparent" />
      </motion.div>

      {/* ── GRID ───────────────────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6">
        {workItems.map((work, i) => {
          const hasLink  = Boolean(work.reference)
          const hasVideo = Boolean(work.video)

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, type: 'tween' }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden border border-rust/25 hover:border-orange transition-colors duration-300 ${work.size}`}
            >

              {/* ── VIDEO AREA ─────────────────────────────── */}
              <div className="relative w-full aspect-video bg-rich-black overflow-hidden">

                {/* Gradient fallback — always visible beneath the iframe */}
                <div className={`absolute inset-0 ${work.bg}`} />

                {/* Always-on autoplay iframe — muted, looping, no controls */}
                {hasVideo && (
                  <iframe
                    src={buildSrc(work.video)}
                    className="absolute inset-0 w-full h-full scale-110 pointer-events-none"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title={work.title}
                  />
                )}

                {/* Cinematic overlay — softens on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

                {/* External link — appears on hover, only if reference exists */}
                {hasLink && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button
                      type="button"
                      onClick={() => window.open(work.reference, '_blank', 'noopener,noreferrer')}
                      aria-label={`Open ${work.title} in new tab`}
                      className="
                        pointer-events-auto
                        w-12 h-12 rounded-full
                        border border-orange/60
                        flex items-center justify-center
                        bg-orange/10
                        opacity-0 group-hover:opacity-100
                        scale-90 group-hover:scale-100
                        transition-all duration-300
                        hover:bg-orange/25 cursor-pointer
                      "
                    >
                      <FiExternalLink className="text-orange text-lg" aria-hidden />
                    </button>
                  </div>
                )}
              </div>

              {/* ── CARD TEXT ──────────────────────────────── */}
              <div className="p-4 md:p-5">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-orange mb-1">
                  {work.category}
                </p>
                <p className="font-bebas text-xl text-white leading-tight">
                  {work.title}
                </p>
              </div>

            </motion.div>
          )
        })}
      </div>

      {/* ── CTA ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'tween' }}
        viewport={{ once: true }}
        className="flex justify-center mt-14"
      >
        <a
          href="https://linktr.ee/jlazucena"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 border border-orange/40 text-orange text-xs uppercase tracking-[0.15em] hover:bg-orange/10 hover:border-orange transition-colors duration-200"
        >
          View More Projects
        </a>
      </motion.div>

    </section>
  )
}