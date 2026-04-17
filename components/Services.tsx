import { servicesData } from '@/lib/data'

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brandBlack">
      <div className="flex items-center gap-6 mb-14">
        <span className="font-bebas text-sm text-orange tracking-[0.2em]">03</span>
        <h2 className="font-bebas text-[clamp(2.2rem,5vw,3.5rem)] text-white tracking-[0.05em]">What I Offer</h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-rust/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5px] bg-rust/20 border border-rust/20">
        {servicesData.map((service, i) => (
          <div key={i} className="group relative bg-brandBlack p-10 overflow-hidden hover:bg-mahogany/50 transition-colors">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
            <div className="font-bebas text-6xl text-rust/20 leading-none mb-4">{service.num}</div>
            <h3 className="font-bebas text-2xl text-white tracking-[0.05em] mb-3">{service.name}</h3>
            <p className="text-sm leading-[1.7] text-terra/80">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}