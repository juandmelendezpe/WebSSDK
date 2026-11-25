import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FeaturedProjects } from "@/components/featured-projects"
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
      <FeaturedProjects />
      <News />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}
