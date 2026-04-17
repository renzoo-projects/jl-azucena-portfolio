import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contact" className="bg-mahogany text-center py-28 px-6 md:px-12">
      <div className="text-[0.72rem] tracking-[0.22em] uppercase text-orange mb-4">Let's Create Together</div>
      <h2 className="font-bebas text-[clamp(3rem,8vw,6.5rem)] text-white leading-[0.95] tracking-[0.03em] mb-6">
        Got a story<br />to <em className="text-orange not-italic">tell?</em>
      </h2>
      <p className="text-base font-light text-terra mb-10 max-w-md mx-auto leading-[1.7]">
        Whether it's a brand campaign, short film, or a music video — I'm ready to cut something great with you.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Button asChild className="bg-orange text-brandBlack hover:bg-[#ff7033] rounded-none px-8 py-6 font-sans text-xs font-medium tracking-[0.12em] uppercase w-full md:w-auto">
          <a href="mailto:jl@azucena.com">jl@azucena.com</a>
        </Button>
        {['Instagram', 'Vimeo', 'YouTube'].map((link, i) => (
          <Button key={i} asChild variant="outline" className="bg-transparent border-terra/40 text-terra hover:border-orange hover:text-orange rounded-none px-8 py-6 font-sans text-xs font-medium tracking-[0.12em] uppercase w-full md:w-auto">
            <a href="#">{link}</a>
          </Button>
        ))}
      </div>
    </section>
  )
}