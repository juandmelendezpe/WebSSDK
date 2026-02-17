"use client"

import { useRef, useEffect, useCallback } from "react"
import { Bot, Cpu, TrendingUp } from "lucide-react"

const aiHighlights = [
  {
    icon: Bot,
    title: "Automatizacion Inteligente",
    description: "Reduccion de hasta un 60% en tareas operativas repetitivas mediante IA.",
  },
  {
    icon: Cpu,
    title: "Decisiones Basadas en Datos",
    description: "Modelos predictivos que transforman datos en ventajas competitivas reales.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Escalable",
    description: "Soluciones que se adaptan y crecen con las necesidades de tu empresa.",
  },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 12000), 120)
    const particles: Particle[] = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
    particlesRef.current = particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initParticles(canvas.offsetWidth, canvas.offsetHeight)
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const particles = particlesRef.current
      const connectionDistance = 150
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        // Mouse interaction - glow near cursor
        const mdx = p.x - mouse.x
        const mdy = p.y - mouse.y
        const mouseDist = Math.sqrt(mdx * mdx + mdy * mdy)
        const glowBoost = mouseDist < 200 ? (1 - mouseDist / 200) * 0.6 : 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity + glowBoost})`
        ctx.fill()

        if (glowBoost > 0) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius + 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${glowBoost * 0.3})`
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[#060620]">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060620]/30 via-transparent to-[#060620]/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              La <span className="text-accent">inteligencia artificial</span> es el motor de la industria del futuro
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
              Las empresas que integran IA hoy lideran manana. En STATUS SDK Inc.
              desarrollamos soluciones innovadoras que combinan inteligencia artificial,
              análisis de datos y desarrollo de software para transformar tu operación
              y posicionarte a la vanguardia de tu industria.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/60">
              Desde la automatizacion de procesos hasta modelos predictivos avanzados,
              ayudamos a tu empresa a tomar decisiones más rápidas, reducir costos
              y descubrir oportunidades que antes eran invisibles.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {aiHighlights.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
