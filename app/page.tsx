import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Partners } from "@/components/partners"
import { About } from "@/components/about"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
