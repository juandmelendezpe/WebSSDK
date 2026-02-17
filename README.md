# SSDK Inc. - Website

Sitio web corporativo moderno para **SSDK Inc.** - Soluciones innovadoras en desarrollo de software y análisis de datos.

## 🎯 Descripción

Este proyecto es una aplicación web de próxima generación construida con **Next.js 16** que presenta a SSDK Inc., una empresa especializada en:
- Desarrollo de software personalizado
- Análisis de datos avanzado
- Soluciones tecnológicas innovadoras

## ✨ Características Principales

- **Diseño Responsivo**: Sitio completamente adaptable a dispositivos móviles y de escritorio
- **Interfaz Moderna**: Componentes UI profesionales con Radix UI y Tailwind CSS
- **Tema Oscuro/Claro**: Soporte para modo oscuro y claro con `next-themes`
- **Formulario de Contacto**: Formulario validado para consultas de clientes
- **Renderizado Rápido**: Next.js 16 con Turbo para desarrollo ultra rápido
- **Tipado Completo**: TypeScript para mayor seguridad y mantenibilidad
- **SEO Optimizado**: Metadatos dinámicos y estructura HTML semántica

## 🛠️ Stack Tecnológico

### Core
- **Next.js 16.1.6** - Framework React con SSR y optimizaciones integradas
- **React 18.3.1** - Biblioteca de UI
- **TypeScript 5.7.3** - Lenguaje tipado
- **Tailwind CSS 3.4.17** - Framework CSS utility-first

### Componentes & UI
- **shadcn/ui** - Componentes accesibles y reutilizables basados en Radix UI
- **Lucide React** - Iconografía moderna
- **Embla Carousel** - Carrusel de imágenes
- **Recharts** - Gráficos interactivos
- **Sonner** - Notificaciones tipo toast

### Formularios & Validación
- **React Hook Form** - Gestión de formularios eficiente
- **Zod** - Validación de esquemas TypeScript
- **HookForm Resolvers** - Integración entre RHF y Zod

### Utilidades
- **next-themes** - Gestión de temas
- **date-fns** - Utilidades de fechas
- **clsx & class-variance-authority** - Gestión de clases CSS
- **Autoprefixer** - Prefijos CSS automáticos
- **PostCSS** - Procesamiento de CSS

## 📋 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **pnpm**: v8.0.0 o superior (o npm/yarn como alternativa)

## 🚀 Instalación

### 1. Clonar el repositorio
```bash
git clone <repository-url>
cd WebSSDK
```

### 2. Instalar dependencias
```bash
pnpm install
```

O si usas npm:
```bash
npm install
```

## 📦 Scripts Disponibles

```bash
# Desarrollo con Turbo (más rápido)
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint
```

### Desarrollo

Inicia el servidor de desarrollo:
```bash
pnpm dev
```

Luego abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
WebSSDK/
├── app/                          # Directorio de aplicación (App Router de Next.js)
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx               # Layout raíz
│   ├── globals.css              # Estilos globales
│   └── news/                    # Sección de noticias
│       └── [id]/                # Página dinámica de artículos
│           └── page.tsx         # Detalle del artículo
│
├── components/                   # Componentes React reutilizables
│   ├── navbar.tsx               # Barra de navegación
│   ├── hero.tsx                 # Sección principal
│   ├── services.tsx             # Sección de servicios
│   ├── partners.tsx             # Sección de partners
│   ├── news.tsx                 # Sección de noticias
│   ├── about.tsx                # Sección acerca de
│   ├── contact-form.tsx         # Formulario de contacto
│   ├── footer.tsx               # Pie de página
│   ├── theme-provider.tsx       # Proveedor de tema
│   └── ui/                      # Componentes UI base de shadcn/ui
│       ├── button.tsx           # Componente botón
│       ├── card.tsx             # Componente tarjeta
│       ├── form.tsx             # Componente formulario
│       ├── input.tsx            # Componente entrada
│       └── ...otros componentes
│
├── hooks/                        # Hooks React personalizados
│   ├── use-mobile.tsx           # Hook para detectar dispositivo móvil
│   └── use-toast.ts             # Hook para notificaciones
│
├── lib/                          # Utilidades y funciones auxiliares
│   └── utils.ts                 # Funciones de utilidad generales
│
├── public/                       # Archivos estáticos públicos
│   ├── images/                  # Imágenes del sitio
│   └── data/                    # Datos JSON
│       └── news.json            # Artículos de noticias
│
├── styles/                       # Archivos de estilos
│   └── globals.css              # Estilos CSS globales
│
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración TypeScript
├── next.config.mjs              # Configuración Next.js
├── tailwind.config.ts           # Configuración Tailwind CSS
├── postcss.config.mjs           # Configuración PostCSS
└── components.json              # Configuración de componentes
```

## 🧩 Componentes Principales

### Secciones
- **Navbar** - Navegación principal con soporte para tema oscuro/claro y enrutamiento inteligente
- **Hero** - Sección principal con valor de propuesta y fondo dinámico
- **Services** - Catálogo de servicios ofrecidos con fondo degradado `from-muted/30 to-muted/50`
- **Partners** - Logos e información de partners con fondo degradado `from-background to-muted/40`
- **News** - Sección de noticias con artículos dinámicos y fondo degradado `from-muted/50 to-background`
- **About** - Información sobre la empresa
- **ContactForm** - Formulario de contacto validado
- **Footer** - Pie de página con información de contacto

### Diseño Visual
- **Esquema de Colores**: Paleta verde profesional (#2C8B7E, #4A9B8E, #3A9A89, #4FA994)
- **Fondos Degradados**: Diferenciación visual entre secciones Partners, Servicios y Noticias
  - Partners: Transición suave desde el fondo base hacia gris medio
  - Servicios: Tono intermedio más oscuro para distinción clara
  - Noticias: Degradado que regresa al fondo base antes del footer
- **Tipografía**: Títulos en verde para mejor legibilidad digital
- **Espaciado**: Márgenes de 5px entre componentes para coherencia visual

### UI Components (shadcn/ui)
Disponemos de una amplia gama de componentes profesionales:
- Acordeones, alertas, avatares, badges
- Botones, tarjetas, checkboxes, diálogos
- Dropdowns, formularios, inputs, etiquetas
- Popovers, radio buttons, scrolls, selectores
- Sliders, switches, tabs, textareas
- Tooltips y más

## 🆕 Cambios Recientes (Febrero 2026)

### Mejoras de Diseño Visual
- **Fondos Degradados**: Se implementaron fondos degradados distintos en tres secciones clave:
  - **Partners**: `bg-gradient-to-b from-background to-muted/40` - Transición clara desde el inicio
  - **Servicios**: `bg-gradient-to-b from-muted/30 to-muted/50` - Tonalidad intermedia diferenciada
  - **Noticias**: `bg-gradient-to-b from-muted/50 to-background` - Retorno gradual hacia el footer

### Navegación Mejorada
- Enrutamiento inteligente del navbar que funciona correctamente en todas las rutas
- Links dinámicos que entienden si están en la página principal o en rutas secundarias
- Soporte completo para menú móvil responsive

### Sección de Noticias
- Sistema JSON para gestión de artículos (`public/data/news.json`)
- Página de artículos individual con ruta dinámica `/news/[id]`
- Metadatos de artículos (autor, fecha, tiempo de lectura, categoría)
- Actualización de contenido cada 3 días sin cambios de código

## ⚙️ Configuración

### Variables de Entorno

Si necesitas agregar variables de entorno, crea un archivo `.env.local`:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.ejemplo.com
```

### Tailwind CSS

La configuración de Tailwind está en [tailwind.config.ts](tailwind.config.ts). Personaliza colores, fuentes y breakpoints según necesites.

### Temas

El proyecto soporta tema oscuro/claro gracias a `next-themes`. El proveedor de tema está configurado en [components/theme-provider.tsx](components/theme-provider.tsx).

## 🎨 Fuentes Tipográficas

El proyecto utiliza dos fuentes de Google:
- **Inter** - Para texto general
- **Playfair Display** - Para títulos y encabezados

## 🔍 Linting

Ejecuta el linter para verificar la calidad del código:

```bash
pnpm lint
```

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Large screens (1280px+)

## 🌐 SEO

El proyecto incluye configuración SEO con:
- Título y descripción meta dinámicos
- Idioma configurado en español (`lang="es"`)
- Open Graph tags (configurables)
- Robots.txt (a implementar según necesites)

## 📝 Notas de Desarrollo

- Los errores de TypeScript en la compilación se ignoran según `next.config.mjs`
- Se utiliza el patrón de App Router de Next.js 13+
- Los componentes están definidos como Server Components por defecto
- Use `'use client'` al inicio del archivo para Client Components

## 🎨 Cambios Recientes (17 de Febrero 2026)

### Estilos y Diseño

#### Fondos Degradados Azules
- **Partners**: Degradado azul oscuro (`from-blue-700 to-blue-900`)
- **Services**: Degradado azul medio (`from-blue-500 to-blue-700`) con imagen paralax
- **News**: Degradado azul claro (`from-blue-400 to-blue-600`)
- **Contacto**: Gradiente azul completo (`from-blue-700 via-blue-600 to-blue-800`) con imagen paralax de fondo

#### Efectos Visuales
- **Bordes Neon**: 
  - Partners: Azul neon (`border-cyan-400`) con sombra luminosa
  - News: Lila neon (`border-purple-400`) con sombra luminosa
- **Efecto Parallax**: Agregado a los componentes Services y Contacto para mayor profundidad visual
- **Glassmorphism**: Formulario de contacto con efecto glass (`backdrop-blur-md`, `bg-white/10`)

#### Mejoras en Componentes

**Partners Cards**
- Aumento de altura 10% (`h-[440px]`)
- Contenido centrado verticalmente y horizontalmente
- Bordes neon azul brillante

**News Cards**
- Bordes neon lila (`border-purple-400`)
- Sombra luminosa mejorada

**Services**
- Imagen de fondo paralax con efecto `backgroundAttachment: 'fixed'`
- Mejor contraste con texto blanco

**Formulario de Contacto**
- Centrado en la página
- Efecto glass con transparencia
- Inputs con bordes blancos semitransparentes
- Mejor visibilidad del select (fondo azul oscuro)
- Estilos mejorados para focus estados

**Componente About**
- Información de contacto movida a footer del componente
- Estructura de 4 columnas para datos de contacto
- Separador visual con línea superior

### Cambios de Estructura
- Eliminada sección de información de contacto del formulario
- Agregado footer de contacto en el componente About
- Reorganización del grid del formulario para centrado

## 🚢 Deploy

### Vercel (Recomendado)

1. Push el código a GitHub
2. Conecta el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente que es un proyecto Next.js
4. Click en Deploy

### Otros Proveedores

El proyecto se puede desplegar en cualquier servicio que soporte Node.js:
- **Netlify**
- **Railway**
- **Render**
- **Docker/Kubernetes**

## 📞 Contacto y Soporte

Para consultas sobre SSDK Inc., utiliza el formulario de contacto en el sitio web.

## 📄 Licencia

Este proyecto es privado y propiedad de SSDK Inc.

---

**Última actualización**: 17 de febrero 2026 - Mejoras de diseño visual y efectos parallax

Construido con ❤️ usando Next.js, React y Tailwind CSS
