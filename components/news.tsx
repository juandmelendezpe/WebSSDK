"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import news from "@/public/data/news.json"

export function News() {
  return (
    <section
      id="noticias"
      className="relative isolate overflow-hidden bg-blue-950 py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/news-background.svg')" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-indigo-950/90"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-balance text-white">
            Mantente informado
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Descubre las últimas innovaciones, tendencias tecnológicas y éxitos de nuestros clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '8rem 8rem' }}>
          {news.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border-2 border-purple-300 bg-card shadow-lg shadow-purple-950/10 transition-all hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/20 dark:border-purple-400/70"
            >
              {/* Imagen */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute right-3 top-3 rounded-full border border-blue-900/10 bg-white/95 px-3 py-1 dark:border-white/10 dark:bg-slate-950/90">
                  <span className="text-xs font-semibold text-blue-950 dark:text-cyan-100">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col flex-grow p-6" style={{ gap: '5px' }}>
                {/* Metadatos */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.date).toLocaleDateString("es-ES")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <span>{article.readTime}</span>
                </div>

                {/* Título */}
                <h3 className="line-clamp-2 text-lg font-semibold text-card-foreground">
                  {article.title}
                </h3>

                {/* Subtítulo */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 flex-grow">
                  {article.subtitle}
                </p>

                {/* Botón Ver Más */}
                <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-blue-700/20 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 transition-all group-hover:gap-3 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:text-white dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200 dark:group-hover:border-cyan-200 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950">
                  Ver más
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
