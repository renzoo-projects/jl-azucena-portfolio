export function Footer() {
  return (
    <footer className="bg-brandBlack py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-2 border-t border-rust/25">
      <div className="font-bebas text-xl tracking-[0.15em] text-rust">JL Azucena</div>
      <div className="text-[0.72rem] text-terra/40 tracking-[0.08em]">© {new Date().getFullYear()} JL Azucena. All rights reserved.</div>
    </footer>
  )
}