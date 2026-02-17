import Image from "next/image"
import { CheckCircle2, MapPin, Mail, Clock, Headset } from "lucide-react"

const highlights = [
  "Equipo multidisciplinario de expertos en tecnología",
  "Metodologías ágiles para entregas rápidas y eficientes",
  "Soluciones escalables adaptadas a tu negocio",
  "Soporte continuo y mantenimiento post-lanzamiento",
]

const stats = [
  { value: "150+", label: "Proyectos completados" },
  { value: "50+", label: "Clientes activos" },
  { value: "10+", label: "Años de experiencia" },
  { value: "99%", label: "Satisfacción del cliente" },
]

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lima, San Isidro | Perú",
  },
  {
    icon: Mail,
    label: "Email",
    value: "clientes@statussdk.com",
  },
  {
    icon: Clock,
    label: "Horario de oficina",
    value: "Lunes a Viernes: 8:00 AM - 6:00 PM",
  },
  {
    icon: Headset,
    label: "Soporte técnico",
    value: "Disponible 24/7",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Sobre nosotros
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
              Innovación y excelencia en cada línea de código
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              STATUS SDK Inc. es una empresa de tecnología especializada en
              desarrollo de software y análisis de datos. Desde nuestra
              fundación, hemos ayudado a empresas de todos los tamaños a
              transformar sus operaciones mediante soluciones digitales
              innovadoras.
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
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-5 text-center"
                >
                  <p className="font-serif text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-primary-foreground/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="mt-20 border-t border-primary-foreground/10 pt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
