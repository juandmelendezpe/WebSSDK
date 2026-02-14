import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Equipo multidisciplinario de expertos en tecnologia",
  "Metodologias agiles para entregas rapidas y eficientes",
  "Soluciones escalables adaptadas a tu negocio",
  "Soporte continuo y mantenimiento post-lanzamiento",
]

const stats = [
  { value: "150+", label: "Proyectos completados" },
  { value: "50+", label: "Clientes activos" },
  { value: "10+", label: "Anos de experiencia" },
  { value: "99%", label: "Satisfaccion del cliente" },
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
              Innovacion y excelencia en cada linea de codigo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/70">
              STATUS SDK Inc. es una empresa de tecnologia especializada en
              desarrollo de software y analisis de datos. Desde nuestra
              fundacion, hemos ayudado a empresas de todos los tamanos a
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
                alt="STATUS SDK Inc. - equipo y tecnologia"
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
      </div>
    </section>
  )
}
