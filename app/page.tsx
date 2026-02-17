import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Partners } from "@/components/partners"
import { News } from "@/components/news"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <News />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
