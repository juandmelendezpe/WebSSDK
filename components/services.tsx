import { Code2, BarChart3, Database, Shield, Cpu, Globe } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Desarrollo de Software",
    description:
      "Creamos aplicaciones web y moviles a medida, optimizadas para rendimiento y escalabilidad.",
  },
  {
    icon: BarChart3,
    title: "Analisis de Datos",
    description:
      "Transformamos tus datos en insights accionables con dashboards interactivos y reportes avanzados.",
  },
  {
    icon: Database,
    title: "Arquitectura de Datos",
    description:
      "Disenamos e implementamos infraestructuras de datos robustas, seguras y preparadas para el futuro.",
  },
  {
    icon: Shield,
    title: "Ciberseguridad",
    description:
      "Protegemos tu infraestructura digital con auditorias, monitoreo y protocolos de seguridad avanzados.",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description:
      "Integramos modelos de IA y machine learning para automatizar procesos y generar predicciones precisas.",
  },
  {
    icon: Globe,
    title: "Consultoria Digital",
    description:
      "Asesoramos a tu equipo en transformacion digital, metodologias agiles y mejores practicas tecnologicas.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Nuestros servicios
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Soluciones tecnologicas integrales
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Ofrecemos un ecosistema completo de servicios para cubrir cada etapa
            de tu transformacion digital.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
