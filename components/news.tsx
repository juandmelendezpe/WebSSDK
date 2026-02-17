"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import news from "@/public/data/news.json"

export function News() {
  return (
    <section id="noticias" className="bg-gradient-to-b from-blue-400 to-blue-600 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl text-balance text-white">
            Mantente informado
          </h2>
          <p className="mt-4 text-white/90 leading-relaxed">
            Descubre las últimas innovaciones, tendencias tecnológicas y éxitos de nuestros clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '8rem 8rem' }}>
          {news.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group flex flex-col rounded-xl overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-400/50 bg-card transition-all hover:border-purple-300 hover:shadow-xl hover:shadow-purple-400/70"
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
                <div className="absolute top-3 right-3 bg-accent/90 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-accent-foreground">
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
                <h3 className="text-lg font-semibold group-hover:text-white transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Subtítulo */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2 flex-grow">
                  {article.subtitle}
                </p>

                {/* Botón Ver Más */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
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
