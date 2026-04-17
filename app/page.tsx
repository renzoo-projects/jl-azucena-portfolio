import { Navbar } from '@/components/Navbar' 
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Ticker } from '@/components/Ticker'
import { Stats } from '@/components/Stats'
import { Works } from '@/components/Works'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <Works />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}