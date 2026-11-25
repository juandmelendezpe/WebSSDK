"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Noticias", href: "#noticias" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-[#080d26]/95 shadow-lg shadow-black/10 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-serif text-lg font-bold text-white">
            SSDK Inc.
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={getLinkHref(link.href)}
                  className="rounded-md border border-transparent px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:border-accent/70 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
            className="hidden rounded-lg border border-transparent bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:border-cyan-300 hover:opacity-90 hover:shadow-lg hover:shadow-cyan-300/30 focus-visible:border-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 active:border-cyan-400 md:block"
          >
            Habla con nosotros
          </a>

          <button
            className="rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
        <div id="mobile-navigation" className="border-t border-white/15 bg-[#080d26] px-6 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={getLinkHref(link.href)}
                  className="block rounded-md border border-transparent px-3 py-2 text-base font-medium text-white/90 transition-colors hover:border-accent/70 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
