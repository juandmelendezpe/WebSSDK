"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const partners = [
  {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    services: [
      "Cloud Computing (EC2, Lambda)",
      "Almacenamiento (S3, EBS)",
      "Bases de datos (RDS, DynamoDB)",
      "Machine Learning (SageMaker)",
    ],
  },
  {
    name: "Google Cloud Platform",
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    services: [
      "BigQuery Analytics",
      "Kubernetes Engine (GKE)",
      "Vertex AI / AutoML",
      "Cloud Functions",
    ],
  },
  {
    name: "Microsoft Azure",
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    services: [
      "Azure DevOps",
      "Azure AI Services",
      "Cosmos DB",
      "Azure Functions",
    ],
  },
  {
    name: "Vercel",
    logo: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    services: [
      "Edge Deployments",
      "Serverless Functions",
      "Next.js Hosting",
      "Analytics & Speed Insights",
    ],
  },
  {
    name: "OpenAI",
    logo: "https://www.vectorlogo.zone/logos/openai/openai-icon.svg",
    services: [
      "GPT-4 / LLMs",
      "DALL-E (Generacion de imagenes)",
      "API de Embeddings",
      "Asistentes con herramientas",
    ],
  },
  {
    name: "Anthropic",
    logo: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg",
    services: [
      "Claude AI (LLM avanzado)",
      "Analisis de documentos",
      "Generacion de codigo",
      "IA conversacional segura",
    ],
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    services: [
      "GitHub Actions (CI/CD)",
      "Copilot (IA para devs)",
      "Repositorios & Colaboracion",
      "GitHub Packages",
    ],
  },
  {
    name: "Cisco",
    logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
    services: [
      "Redes empresariales",
      "Ciberseguridad (SecureX)",
      "Webex Collaboration",
      "SD-WAN",
    ],
  },
  {
    name: "Oracle",
    logo: "https://www.vectorlogo.zone/logos/oracle/oracle-icon.svg",
    services: [
      "Oracle Cloud Infrastructure",
      "Base de datos Oracle",
      "ERP & HCM Cloud",
      "Oracle Analytics",
    ],
  },
  {
    name: "Cloudflare",
    logo: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg",
    services: [
      "CDN Global",
      "Proteccion DDoS",
      "Workers (Edge Computing)",
      "Zero Trust Security",
    ],
  },
]

export function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 340
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" })
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    intervalRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el) return

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" })
      }
    }, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll)
    return () => el.removeEventListener("scroll", checkScroll)
  }, [])

  return (
    <section className="bg-muted/50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nuestros Partners
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Aliados tecnologicos de clase mundial
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trabajamos con los lideres de la industria para ofrecer soluciones
            robustas, escalables y de vanguardia.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Navigation buttons */}
          <button
            onClick={() => {
              setIsAutoPlaying(false)
              scroll("left")
            }}
            disabled={!canScrollLeft}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-30 lg:-left-5"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => {
              setIsAutoPlaying(false)
              scroll("right")
            }}
            disabled={!canScrollRight}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-30 lg:-right-5"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="group flex w-[310px] flex-shrink-0 flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Logo + Name */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-background p-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground leading-tight">
                    {partner.name}
                  </h3>
                </div>

                {/* Separator */}
                <div className="my-4 h-px bg-border" />

                {/* Services */}
                <ul className="flex flex-col gap-2.5">
                  {partner.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Scroll indicator dots */}
          <div className="mt-8 flex items-center justify-center gap-1.5">
            {partners.map((partner, i) => (
              <button
                key={partner.name}
                onClick={() => {
                  setIsAutoPlaying(false)
                  const el = scrollRef.current
                  if (!el) return
                  el.scrollTo({ left: i * 340, behavior: "smooth" })
                }}
                className="h-1.5 w-1.5 rounded-full bg-border transition-colors hover:bg-accent"
                aria-label={`Ir a ${partner.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
