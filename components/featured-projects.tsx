import {
  Activity,
  ArrowRight,
  BarChart3,
  Camera,
  Database,
  HeartPulse,
  ShieldAlert,
} from "lucide-react"

const projects = [
  {
    id: "historias-clinicas",
    title: "Historias clínicas digitales",
    description:
      "Un repositorio propio para organizar historias clínicas y facilitar la consulta y el seguimiento de la información asistencial.",
    resources: ["Repositorio clínico", "Gestión de datos", "Flujos digitales"],
    visual: "clinical",
    background: "bg-[#071326]",
    accent: "text-cyan-300",
    glow: "bg-cyan-300",
  },
  {
    id: "seguridad-inteligente",
    title: "Detección de objetos en cámaras",
    description:
      "Un servicio que analiza cámaras de seguridad, detecta objetos potencialmente peligrosos y genera alertas en tiempo real.",
    resources: ["Cámaras de seguridad", "Visión artificial", "Alertas en tiempo real"],
    visual: "security",
    background: "bg-[#10101f]",
    accent: "text-rose-300",
    glow: "bg-rose-300",
  },
  {
    id: "analisis-retail",
    title: "Inteligencia de datos para retail",
    description:
      "Un proyecto de análisis de datos de una tienda que utiliza Python y PyTorch para explorar patrones y apoyar decisiones de negocio.",
    resources: ["Python", "PyTorch", "Análisis de patrones"],
    visual: "analytics",
    background: "bg-[#0a1720]",
    accent: "text-emerald-300",
    glow: "bg-emerald-300",
  },
] as const

function ProjectVisual({
  type,
}: {
  type: (typeof projects)[number]["visual"]
}) {
  if (type === "clinical") {
    return (
      <div
        className="project-float relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-[#0b1831] p-5 shadow-2xl shadow-cyan-950/30 sm:p-8"
        aria-hidden="true"
      >
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(165,243,252,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(165,243,252,.12) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute left-[7%] top-[13%] h-[75%] w-[86%] -rotate-2 rounded-2xl border border-white/10 bg-[#0e1b34]/95 p-4 shadow-xl backdrop-blur transition-transform duration-700 group-hover:rotate-0 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-cyan-200">
              <HeartPulse className="h-5 w-5" />
              <span className="text-[10px] font-semibold tracking-[0.18em] sm:text-xs">
                HISTORIAL DIGITAL
              </span>
            </div>
            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[9px] text-cyan-100 sm:text-[10px]">
              FICHA CLÍNICA
            </span>
          </div>

          <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-3 sm:gap-5">
            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
                  <Activity className="h-5 w-5" />
                </div>
                <div className="mx-auto mt-3 h-2 w-3/4 rounded-full bg-white/15" />
                <div className="mx-auto mt-2 h-1.5 w-1/2 rounded-full bg-white/10" />
              </div>
              <div className="space-y-2 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="h-1.5 w-4/5 rounded-full bg-cyan-100/20" />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/45 sm:text-[10px]">
                  Seguimiento
                </p>
                <svg viewBox="0 0 220 70" className="mt-3 w-full">
                  <path
                    d="M2 42h35l12-22 16 42 17-34 12 14h30l14-17 13 27 12-10h35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-cyan-300"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                  <div className="mt-2 h-2 w-4/5 rounded-full bg-cyan-200/35" />
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                  <div className="mt-2 h-2 w-3/5 rounded-full bg-cyan-200/35" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[8%] right-[4%] flex items-center gap-2 rounded-xl border border-cyan-200/20 bg-[#0b1831]/90 px-3 py-2 text-xs text-cyan-100 shadow-lg backdrop-blur">
          <Database className="h-4 w-4" />
          Información organizada
        </div>
      </div>
    )
  }

  if (type === "security") {
    return (
      <div
        className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-rose-200/15 bg-[#11111d] p-5 shadow-2xl shadow-rose-950/30 sm:p-8"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgba(244,63,94,0.16),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(253,164,175,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(253,164,175,.12) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute left-[9%] right-[9%] top-[10%] flex items-center justify-between text-[9px] font-semibold tracking-[0.16em] text-white/55 sm:text-[10px]">
          <span className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-rose-300" />
            ANÁLISIS DE CÁMARA
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
            DEMO VISUAL
          </span>
        </div>

        <div className="absolute left-[12%] top-[20%] h-[62%] w-[76%] overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-700 via-slate-900 to-[#171521]">
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(ellipse at 50% 70%, rgba(251,113,133,.18), transparent 55%), linear-gradient(150deg, transparent 40%, rgba(255,255,255,.07) 40.2%, transparent 40.8%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="project-scan absolute left-0 right-0 top-[15%] h-px bg-rose-300 shadow-[0_0_16px_4px_rgba(251,113,133,0.35)]" />

          <div className="absolute left-[35%] top-[19%] h-[58%] w-[29%] rounded-lg border-2 border-dashed border-rose-300/90">
            <span className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-rose-200" />
            <span className="absolute -right-2 -top-2 h-4 w-4 border-r-2 border-t-2 border-rose-200" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-rose-200" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-rose-200" />
            <span className="absolute -top-7 left-0 rounded bg-rose-400 px-2 py-1 text-[8px] font-bold tracking-wider text-slate-950 sm:text-[9px]">
              OBJETO DETECTADO
            </span>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[8px] font-medium tracking-wider text-white/60 sm:text-[9px]">
            <span className="motion-safe:animate-pulse h-1.5 w-1.5 rounded-full bg-rose-300" />
            VISIÓN ARTIFICIAL
          </div>
          <div className="absolute bottom-3 right-3 text-[8px] tracking-wider text-white/40 sm:text-[9px]">
            MONITOREO
          </div>
        </div>

        <div className="absolute bottom-[8%] right-[4%] flex items-center gap-2 rounded-xl border border-rose-200/20 bg-[#19131d]/95 px-3 py-2 text-xs text-rose-100 shadow-lg backdrop-blur">
          <ShieldAlert className="h-4 w-4 text-rose-300" />
          Alerta en tiempo real
        </div>
      </div>
    )
  }

  return (
    <div
      className="project-float relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-emerald-200/15 bg-[#0c1a20] p-5 shadow-2xl shadow-emerald-950/30 sm:p-8"
      aria-hidden="true"
    >
      <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(167,243,208,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(167,243,208,.12) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

      <div className="absolute left-[7%] top-[12%] w-[86%] rounded-2xl border border-white/10 bg-[#102127]/95 p-4 shadow-xl backdrop-blur sm:p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-emerald-200">
            <BarChart3 className="h-5 w-5" />
            <span className="text-[10px] font-semibold tracking-[0.16em] sm:text-xs">
              ANALÍTICA DE TIENDA
            </span>
          </div>
          <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[9px] text-emerald-100 sm:text-[10px]">
            PYTHON · PYTORCH
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] gap-3 sm:gap-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-1.5 w-16 rounded-full bg-white/20" />
                <div className="mt-2 h-2 w-24 rounded-full bg-emerald-100/40" />
              </div>
              <Activity className="h-4 w-4 text-emerald-200/70" />
            </div>
            <div className="mt-5 flex h-24 items-end justify-between gap-2 border-b border-l border-white/10 px-2 sm:h-32">
              {["h-8", "h-12", "h-10", "h-16", "h-14", "h-20", "h-24"].map(
                (height, index) => (
                  <div
                    key={index}
                    className={`project-bar w-full rounded-t-sm bg-gradient-to-t from-emerald-500/30 to-emerald-300/80 ${height}`}
                    style={{ animationDelay: `${index * 110}ms` }}
                  />
                ),
              )}
            </div>
            <div className="mt-2 flex justify-between px-1 text-[8px] text-white/35 sm:text-[9px]">
              <span>PERIODO</span>
              <span>TENDENCIAS</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-300/10 text-emerald-200">
                <Database className="h-4 w-4" />
              </div>
              <div className="mt-4 h-1.5 w-3/4 rounded-full bg-white/15" />
              <div className="mt-2 h-2 w-full rounded-full bg-emerald-200/35" />
              <div className="mt-2 h-1.5 w-2/3 rounded-full bg-white/10" />
            </div>
            <div className="rounded-xl border border-emerald-200/15 bg-emerald-300/[0.07] p-3">
              <span className="text-[8px] font-semibold tracking-wider text-emerald-100/70 sm:text-[9px]">
                PATRONES
              </span>
              <div className="mt-2 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-200/30" />
                <div className="ml-1 h-px flex-1 bg-emerald-200/30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[4%] flex items-center gap-2 rounded-xl border border-emerald-200/20 bg-[#0c1a20]/95 px-3 py-2 text-xs text-emerald-100 shadow-lg backdrop-blur">
        <BarChart3 className="h-4 w-4" />
        Datos para decidir
      </div>
    </div>
  )
}

export function FeaturedProjects() {
  return (
    <div id="proyectos" className="bg-[#060620]">
      <header className="mx-auto max-w-7xl px-6 pb-12 pt-24 text-center">
        
        <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
          Tecnología aplicada a retos reales
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-foreground/70">
          Tres ejemplos de cómo conectamos nuestros servicios con necesidades
          concretas: salud, seguridad y análisis de negocio.
        </p>
      </header>

      {projects.map((project, index) => (
        <section
          key={project.id}
          aria-labelledby={`project-title-${project.id}`}
          className={`group relative isolate flex min-h-[70vh] items-center overflow-hidden py-16 sm:py-20 ${project.background}`}
        >
          <div
            className={`pointer-events-none absolute -top-40 h-[32rem] w-[32rem] rounded-full opacity-[0.08] blur-3xl ${index % 2 === 0 ? "-left-40" : "-right-40"} ${project.glow}`}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <ProjectVisual type={project.visual} />
            </div>

            <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
              <h3
                id={`project-title-${project.id}`}
                className="max-w-xl font-serif text-3xl font-bold leading-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl"
              >
                {project.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/45">
                  Recursos y tecnologías
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.resources.map((resource) => (
                    <li
                      key={resource}
                      className="rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.05] px-3 py-1.5 text-xs font-medium text-primary-foreground/80"
                    >
                      {resource}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="px-6 py-12 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
        >
          Hablemos de un proyecto similar
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
