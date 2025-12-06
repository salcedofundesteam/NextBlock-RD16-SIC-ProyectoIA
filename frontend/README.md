# NextBlock - Inteligencia Inmobiliaria

Una landing page profesional de alto rendimiento para un sistema de predicción inmobiliaria impulsado por IA. Construida con tecnologías web modernas para garantizar una experiencia de usuario premium.

## 🚀 Tecnologías Utilizadas

- **Framework**: React 18 (via Vite)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS v4
- **Componentes UI**: DaisyUI
- **Enrutamiento**: React Router DOM
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React

## 📂 Estructura del Proyecto

```
src/
├── components/       # Componentes de UI reutilizables
│   ├── Navbar.tsx    # Navegación responsiva
│   ├── Hero.tsx      # Sección principal con animaciones
│   ├── Features.tsx  # Cuadrícula de beneficios
│   ├── HowItWorks.tsx # Explicación del proceso
│   ├── VisualDemo.tsx # Demo interactiva de gráficos
│   ├── Testimonials.tsx # Prueba social
│   └── Footer.tsx    # Enlaces de pie de página
├── pages/            # Componentes de página
│   ├── LandingPage.tsx # Landing page pública
│   ├── LoginPage.tsx   # Página de inicio de sesión simulada
│   └── AdminPage.tsx   # Panel de administración protegido
├── routes/           # Configuración de rutas
│   ├── AppRouter.tsx   # Configuración principal del router
│   └── ProtectedRoute.tsx # Guardia de ruta para páginas privadas
├── layout/           # Envoltorios de diseño (si es necesario)
└── main.tsx          # Punto de entrada de la aplicación
```

## 🔗 Rutas

| Ruta | Tipo | Descripción |
|-------|------|-------------|
| `/` | Pública | La landing page principal mostrando el producto. |
| `/login` | Pública | Punto de acceso para el área privada. Simula autenticación. |
| `/admin` | Privada | Panel protegido. Requiere inicio de sesión (simulado). Redirige al login si no está autenticado. |

## 🛠️ Cómo Ejecutar

1. **Instalar Dependencias**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desarrollo**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

3. **Construir para Producción**
   ```bash
   npm run build
   ```

## 🎨 Estilos y Animaciones

- **TailwindCSS v4**: Utiliza el último framework CSS first-utility para un estilizado rápido.
- **DaisyUI**: Proporciona clases de componentes semánticos (ej: `btn`, `card`, `hero`) para mantener la consistencia.
- **Framer Motion**: Maneja todas las animaciones de entrada (fade-in, slide-up) y transiciones interactivas.
- **Glassmorphism**: Efecto logrado usando `backdrop-blur` y fondos semitransparentes para una sensación tecnológica moderna.

## 📈 Escalabilidad y Expansión Futura

- **Integración Backend**: El `LoginPage` actualmente usa `localStorage` para simulación. Reemplaza `handleLogin` con una llamada API real (ej: Firebase, Supabase, o API REST).
- **Gestión de Estado**: Para estados de app complejos, considera agregar Zustand o Redux.
- **Panel de Admin**: La ruta `/admin` es un marcador de posición. Puedes expandirla agregando rutas anidadas (ej: `/admin/analytics`, `/admin/settings`) en `AppRouter.tsx`.
- **Pruebas**: Agrega pruebas unitarias (Vitest) y pruebas E2E (Playwright) antes del despliegue en producción.

## 📝 Notas

- **Configuración Tailwind v4**: Configurado vía plugin `@tailwindcss/vite` en `vite.config.ts`. Estilos personalizados y `@plugin "daisyui"` están en `src/index.css`.
- **Temas**: Usa temas por defecto de DaisyUI. Puede personalizarse en CSS o vía controlador de temas.

---

