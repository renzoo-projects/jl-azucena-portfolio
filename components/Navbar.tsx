import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-5 px-6 md:px-12 bg-brandBlack/85 backdrop-blur-md border-b border-rust/30">
      <div className="font-bebas text-2xl tracking-[0.15em] text-orange">JL Azucena</div>
      <ul className="hidden md:flex gap-8 list-none">
        {['Home', 'Work', 'About', 'Services', 'Contact'].map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`} className="text-terra text-xs tracking-[0.12em] uppercase hover:text-orange transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}