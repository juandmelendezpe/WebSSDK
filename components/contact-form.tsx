"use client"

import { useState } from "react"
import { Send, AlertCircle, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Error al enviar el email")
      }

      setSubmitted(true)
      e.currentTarget.reset()
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el email")
      setTimeout(() => setError(null), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="relative bg-gradient-to-b from-blue-700 via-blue-600 to-blue-800 py-24 overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=800)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          
          <h2 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl text-balance">
            Hablemos de tu proximo proyecto 
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Cuéntanos sobre tus necesidades y te responderemos 
            con una propuesta personalizada.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-full lg:max-w-2xl">
            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-400/50 bg-red-400/10 p-4 backdrop-blur-sm">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-200">Error al enviar</h3>
                  <p className="text-sm text-red-100">{error}</p>
                </div>
              </div>
            )}
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-xl border border-green-400/50 bg-green-400/10 backdrop-blur-sm p-12">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/20">
                    <CheckCircle className="h-7 w-7 text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-200">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mt-2 text-sm text-green-100">
                    Gracias por contactarnos. Te responderemos pronto.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-md p-8 transition-all hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-white"
                    >
                      Correo electronico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de tu empresa"
                    className="w-full rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-lg border border-white/20 bg-blue-900/40 backdrop-blur-sm px-4 py-3 text-sm text-white outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="software">Desarrollo de Software</option>
                    <option value="data">Análisis de Datos</option>
                    <option value="architecture">Arquitectura de Datos</option>
                    <option value="security">Ciberseguridad</option>
                    <option value="ai">Inteligencia Artificial</option>
                    <option value="consulting">Consultoría Digital</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
