"use client"

import { useState } from "react"
import { Send, MapPin, Mail, Clock, Headset } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Lima, San Isidro | Perú",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ssdk.es",
  },
  {
    icon: Clock,
    label: "Horario de oficina",
    value: "Lunes a Viernes: 8:00 AM - 6:00 PM",
  },
  {
    icon: Headset,
    label: "Soporte tecnico",
    value: "Disponible 24/7",
  },
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contacto
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Hablemos de tu proximo proyecto
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cuentanos sobre tus necesidades y te responderemos en menos de 24
            horas con una propuesta personalizada.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}


          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-accent/30 bg-accent/5 p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Send className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-card-foreground"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-card-foreground"
                    >
                      Correo electronico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-card-foreground"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-card-foreground"
                  >
                    Servicio de interes
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="software">Desarrollo de Software</option>
                    <option value="data">Analisis de Datos</option>
                    <option value="architecture">Arquitectura de Datos</option>
                    <option value="security">Ciberseguridad</option>
                    <option value="ai">Inteligencia Artificial</option>
                    <option value="consulting">Consultoria Digital</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-card-foreground"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Cuentanos sobre tu proyecto..."
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
