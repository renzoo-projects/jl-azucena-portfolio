export function Footer() {
  return (
    <footer className="bg-brandBlack py-6 px-6 md:px-12 border-t border-rust/25">
      
      <div className="flex flex-col items-center justify-center text-center gap-2">
        
        <div className="text-[0.72rem] text-terra/40 tracking-[0.08em]">
          © {new Date().getFullYear()} JL Azucena. All rights reserved.
        </div>

      </div>

    </footer>
  )
}