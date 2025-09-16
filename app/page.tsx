import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Certificate } from "@/components/certificate"
import { Leadership } from "@/components/leadership"
import { Partners } from "@/components/partners"
import { CoreTeam } from "@/components/core-team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Certificate />
        <Leadership />
        <Partners />
        <CoreTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
