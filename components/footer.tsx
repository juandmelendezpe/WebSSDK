import Image from "next/image"

const footerLinks = {
  servicios: [
    { label: "Desarrollo de Software", href: "#servicios" },
    { label: "Análisis de Datos", href: "#servicios" },
    { label: "Inteligencia Artificial", href: "#servicios" },
    { label: "Automatización de Procesos", href: "#servicios" },
    { label: "Consultoría Tecnológica", href: "#servicios" },
    { label: "Desarrollo de Negocios y Transformación Digital", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
    { label: "Política de privacidad", href: "#privacidad" },
    { label: "Términos y condiciones", href: "#terminos" },
    
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#080d26] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-bold text-white">
                STATUS SOFTWARE & DEVELOPMENT KERNEL Inc.
              </span>
              <Image
                src="/images/logo.png"
                alt="STATUS SDK Inc. logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Soluciones innovadoras en desarrollo de software, inteligencia artificial
              y análisis de datos para impulsar tu negocio.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-white/70">
              <span>Lima, San Isidro | Perú</span>
              <span>Castilla y León, Ávila | España</span>
              <span>clientes@statussdk.com</span>
              <span>Soporte 24/7</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Servicios
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Empresa
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} STATUS SOFTWARE & DEVELOPMENT KERNEL Inc. |  Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
