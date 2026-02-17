import Image from "next/image"

const footerLinks = {
  servicios: [
    { label: "Desarrollo de Software", href: "#servicios" },
    { label: "Análisis de Datos", href: "#servicios" },
    { label: "Arquitectura de Datos", href: "#servicios" },
    { label: "Ciberseguridad", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-bold text-primary-foreground">
                STATUS SDK Inc.
              </span>
              <Image
                src="/images/logo.png"
                alt="STATUS SDK Inc. logo"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/60">
              Soluciones innovadoras en desarrollo de software, inteligencia artificial
              y análisis de datos para impulsar tu negocio al siguiente nivel.
            </p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm text-primary-foreground/50">
              <span>Lima, San Isidro | Perú</span>
              <span>clientes@statussdk.com</span>
              <span>L-V 8:00 AM - 6:00 PM | Soporte 24/7</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Servicios
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Empresa
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} STATUS SDK Inc. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
