import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { mainSkills, specializations } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-mahogany">
      <div className="flex items-center gap-6 mb-14">
        <span className="font-bebas text-sm text-orange tracking-[0.2em]">02</span>
        <h2 className="font-bebas text-[clamp(2.2rem,5vw,3.5rem)] text-white tracking-[0.05em]">About JL</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-rust/50 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="space-y-5 text-base font-light leading-[1.85] text-terra">
          <p>I'm <strong className="text-white font-medium">JL Azucena</strong>, a video editor based in the Philippines with a passion for turning raw footage into compelling, emotion-driven stories.</p>
          <p>From <strong className="text-white font-medium">cinematic commercials</strong> to viral social content, I bring technical precision and a sharp creative eye to every project. Every cut is intentional. Every frame matters.</p>
          <p>I've collaborated with brands, artists, and independent filmmakers — helping them find the rhythm and soul within their footage, and delivering work that actually gets watched.</p>
          <Button asChild className="bg-orange text-brandBlack hover:bg-[#ff7033] rounded-none px-8 py-6 mt-4 font-sans text-xs font-medium tracking-[0.12em] uppercase">
            <Link href="#contact">Work With Me</Link>
          </Button>
        </div>
        
        <div>
          <div className="grid grid-cols-2 gap-3">
            {mainSkills.map((skill, i) => (
              <div key={i} className={`border p-3 text-[0.78rem] tracking-[0.1em] uppercase transition-colors cursor-default ${i < 2 ? 'border-orange text-orange bg-orange/10' : 'border-rust/50 text-terra hover:border-orange hover:text-orange hover:bg-orange/5'}`}>
                {skill}
              </div>
            ))}
          </div>
          
          <h3 className="font-bebas text-xl tracking-[0.1em] text-white mt-10 mb-4">Specializations</h3>
          <div className="grid grid-cols-2 gap-3">
            {specializations.map((skill, i) => (
              <div key={i} className="border border-rust/50 p-3 text-[0.78rem] tracking-[0.1em] uppercase text-terra hover:border-orange hover:text-orange hover:bg-orange/5 transition-colors cursor-default">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}