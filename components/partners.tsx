"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Check, Handshake } from "lucide-react"

const CARD_WIDTH = 300
const CARD_GAP = 24
const SCROLL_STEP = CARD_WIDTH + CARD_GAP

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
      "DALL-E (Generación de imágenes)",
      "API de Embeddings",
      "Asistentes con herramientas",
    ],
  },
  {
    name: "Anthropic",
    logo: "https://www.vectorlogo.zone/logos/anthropic/anthropic-icon.svg",
    services: [
      "Claude AI (LLM avanzado)",
      "Análisis de documentos",
      "Generación de código",
      "IA conversacional segura",
    ],
  },
  {
    name: "GitHub",
    logo: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    services: [
      "GitHub Actions (CI/CD)",
      "Copilot (IA para devs)",
      "Repositorios & Colaboración",
      "GitHub Packages",
    ],
  },
  {
    name: "Cisco",
    logo: "https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg",
    services: [
      "Redes empresariales",
      "Ciberseguridad (SecureX)",
      "Webex Colaboración",
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
      "Protección DDoS",
      "Workers (Edge Computing)",
      "Zero Trust Security",
    ],
  },
]

export function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
    const index = Math.round(el.scrollLeft / SCROLL_STEP)
    setActiveIndex(Math.min(Math.max(index, 0), partners.length - 1))
  }, [])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({
      left: direction === "left" ? -SCROLL_STEP : SCROLL_STEP,
      behavior: "smooth",
    })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: index * SCROLL_STEP, behavior: "smooth" })
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    intervalRef.current = setInterval(() => {
      const el = scrollRef.current
      if (!el) return

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollTo({ left: 0, behavior: "smooth" })
      } else {
        el.scrollBy({ left: SCROLL_STEP, behavior: "smooth" })
      }
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlaying])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState)
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  return (
    <section id="aliados" className="relative overflow-hidden bg-[#060620] py-24">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            <Handshake className="h-4 w-4" />
            Alianzas estratégicas
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Aliados tecnológicos de{" "}
            <span className="text-accent">clase mundial</span>
          </h2>
          <p className="mt-4 text-primary-foreground/70 leading-relaxed text-pretty">
            Trabajamos con los líderes de la industria para ofrecer soluciones
            robustas, escalables y de vanguardia.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desvanecimiento lateral */}
          <div
            className={`pointer-events-none absolute left-0 top-0 z-[5] h-full w-12 bg-gradient-to-r from-[#060620] to-transparent transition-opacity duration-300 sm:w-20 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 z-[5] h-full w-12 bg-gradient-to-l from-[#060620] to-transparent transition-opacity duration-300 sm:w-20 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          />

          <button
            onClick={() => {
              setIsAutoPlaying(false)
              scroll("left")
            }}
            disabled={!canScrollLeft}
            className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground shadow-lg backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-0 sm:-left-4 lg:-left-6"
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
            className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground shadow-lg backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-0 sm:-right-4 lg:-right-6"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth pb-2 pt-1"
          >
            {partners.map((partner) => (
              <article
                key={partner.name}
                className="group relative flex w-[300px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-primary-foreground/[0.07] hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/25 transition-all group-hover:bg-accent/25 group-hover:ring-accent/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={40}
                      height={40}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="text-base font-semibold leading-tight text-primary-foreground">
                    {partner.name}
                  </h3>
                </div>

                <div className="relative my-5 h-px bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent" />

                <ul className="relative flex flex-col gap-3">
                  {partner.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 text-sm text-primary-foreground/65"
                    >
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2">
            {partners.map((partner, i) => (
              <button
                key={partner.name}
                onClick={() => {
                  setIsAutoPlaying(false)
                  scrollToIndex(i)
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-7 bg-accent"
                    : "w-2 bg-primary-foreground/25 hover:bg-accent/50"
                } h-2`}
                aria-label={`Ir a ${partner.name}`}
                aria-current={i === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
