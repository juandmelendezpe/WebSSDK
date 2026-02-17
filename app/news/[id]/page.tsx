import { notFound } from "next/navigation"
import Image from "next/image"
import { Calendar, User, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import news from "@/public/data/news.json"

interface NewsArticlePageProps {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return news.map((article) => ({
    id: article.id,
  }))
}

export async function generateMetadata({ params }: NewsArticlePageProps) {
  const { id } = await params
  const article = news.find((a) => a.id === id)
  if (!article) return {}

  return {
    title: article.title,
    description: article.subtitle,
    openGraph: {
      title: article.title,
      description: article.subtitle,
      images: [article.image],
    },
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { id } = await params
  const article = news.find((a) => a.id === id)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Navegación */}
      <Navbar />

      {/* Contenedor centrado para todo */}
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-12" style={{ gap: '5px' }}>
        {/* Header con imagen - proporcional al contenedor */}
        <div className="w-full" style={{ marginBottom: '5px' }}>
          <div className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 900px"
            />
          </div>
        </div>

        {/* Título - proporcional al contenedor */}
        <div className="w-full" style={{ marginBottom: '5px' }}>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl text-balance leading-tight" style={{color: '#2C8B7E'}}>
            {article.title}
          </h1>
        </div>

        {/* Subtítulo - proporcional al contenedor */}
        <div className="w-full" style={{ marginBottom: '5px' }}>
          <p className="text-xl leading-relaxed" style={{color: '#4A9B8E'}}>
            {article.subtitle}
          </p>
        </div>

        {/* Contenido del artículo - centrado */}
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none">
            {article.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("##")) {
                return (
                  <h2
                    key={index}
                    className="mt-8 mb-4 font-serif text-2xl font-bold"
                    style={{color: '#3A9A89'}}
                  >
                    {paragraph.replace(/^##\s*/, "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("###")) {
                return (
                  <h3
                    key={index}
                    className="mt-6 mb-3 font-serif text-xl font-semibold"
                    style={{color: '#4FA994'}}
                  >
                    {paragraph.replace(/^###\s*/, "")}
                  </h3>
                )
              }
              if (paragraph.startsWith("-")) {
                return (
                  <ul key={index} className="mt-3 space-y-2 text-foreground/90">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-accent mt-1">•</span>
                          <span>{line.replace(/^-\s*/, "")}</span>
                        </li>
                      ))}
                  </ul>
                )
              }
              if (/^\d+\./.test(paragraph)) {
                return (
                  <ol key={index} className="mt-3 space-y-2 text-foreground/90 list-decimal list-inside">
                    {paragraph
                      .split("\n")
                      .filter((line) => line.trim())
                      .map((line, i) => (
                        <li key={i} className="ml-2">
                          {line.replace(/^\d+\.\s*/, "")}
                        </li>
                      ))}
                  </ol>
                )
              }
              return (
                <p key={index} className="mt-4 text-foreground/90 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>

        {/* Footer con metadatos del artículo */}
        <div className="mx-auto w-[70%] flex flex-wrap gap-6 text-sm text-muted-foreground border-t border-border pt-8 mt-12">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
              <User className="h-4 w-4 text-accent" />
            </div>
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{new Date(article.date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
              {article.category}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
