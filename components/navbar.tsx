"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Noticias", href: "#noticias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  const getLinkHref = (href: string) => {
    if (isHome) {
      return href
    }
    return `/${href}`
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-lg font-bold text-primary-foreground">
            SSDK Inc.
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={getLinkHref(link.href)}
                  className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={getLinkHref("#contacto")}
            className="hidden rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 md:block"
          >
            Contactar
          </a>

          <button
            className="text-primary-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="STATUS SDK Inc. logo"
              width={44}
              height={44}
              className="rounded-full border-2 border-white"
            />
          </Link>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={getLinkHref(link.href)}
                  className="block text-base font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={getLinkHref("#contacto")}
                className="mt-2 block rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                onClick={() => setMobileOpen(false)}
              >
                Contactar
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
