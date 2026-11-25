import Image from "next/image"
import { CheckCircle2, MapPin, Mail, Clock, Headset } from "lucide-react"

const highlights = [
  "Equipo multidisciplinario de expertos en tecnología",
  "Metodologías ágiles para entregas rápidas y eficientes",
  "Soluciones escalables adaptadas a tu negocio",
  "Soporte continuo y mantenimiento post-lanzamiento",
]

const capabilities = [
  { title: "IA aplicada", description: "para retos concretos" },
  { title: "I+D individual", description: "desarrollo a medida" },
  { title: "Prototipos evaluables", description: "antes de escalar" },
  { title: "Integración con sistemas", description: "adopción en procesos existentes" },
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lima, San Isidro - Perú" + "| Castilla y León, Ávila - España",

  },
  {
    icon: Mail,
    label: "Email",
    value: "clientes@statussdk.com",
  },
  {
    icon: Headset,
    label: "Soporte técnico",
    value: "Disponible 24/7",
  },
]

export function About() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden bg-[#101b36] py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about-background.svg')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#101b36]/90 via-[#142349]/90 to-[#10172f]/95"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Sobre nosotros
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Innovación y excelencia en cada línea de código
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              En STATUS SDK Inc. impulsamos la investigación y el desarrollo
              tecnológico desde un enfoque individualizado. Analizamos cada
              idea y necesidad para diseñar, validar y construir soluciones de
              software y análisis de datos a la medida, acompañando cada
              iniciativa desde la exploración inicial hasta su implementación.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-sm text-primary-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/banner.png"
                alt="STATUS SDK Inc. - equipo y tecnología"
                width={700}
                height={220}
                className="w-full object-cover"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="flex min-h-32 flex-col items-center justify-center rounded-xl border-2 border-white/20 bg-primary-foreground/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-primary-foreground/10 hover:shadow-lg hover:shadow-cyan-400/50"
                >
                  <p className="font-serif text-xl font-bold text-accent">
                    {capability.title}
                  </p>
                  <p className="mt-1 text-xs font-medium text-primary-foreground/60">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-20 border-t border-primary-foreground/10 pt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-primary-foreground/60">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
