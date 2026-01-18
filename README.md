# 🖥️ Portfolio Website Design - Estilo Windows 95

Un sitio web de portfolio interactivo inspirado en la interfaz clásica de Windows 95, construido con React, TypeScript y Tailwind CSS.

## ✨ Características

- 🎨 **Diseño Retro**: Interfaz nostálgica al estilo Windows 95
- 🪟 **Ventanas Interactivas**: Sistema de ventanas completamente funcional con:
  - Arrastrar y soltar
  - Minimizar, maximizar y cerrar
  - Gestión de múltiples ventanas con z-index
  - Barra de título personalizada
- 🖱️ **Iconos de Escritorio**: Accesos directos clickeables para abrir secciones
- 📊 **Barra de Tareas**: Menú de inicio, ventanas abiertas y reloj en tiempo real
- 📱 **Responsive**: Adaptable a diferentes tamaños de pantalla
- ⚡ **Rendimiento**: Hot Module Replacement (HMR) con Vite

## 🚀 Tecnologías

- **React 18.3.1** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite 6.3.5** - Build tool y servidor de desarrollo
- **Tailwind CSS 4.1.12** - Framework de CSS utilitario
- **Lucide React** - Iconos modernos
- **Radix UI** - Componentes accesibles
- **Motion** - Animaciones fluidas

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repositorio>

# Navegar al directorio
cd "Portfolio Website Design"

# Instalar dependencias
npm install

# Instalar React y React-DOM
npm install react@18.3.1 react-dom@18.3.1

# Instalar tipos de TypeScript
npm install --save-dev @types/react @types/react-dom
```

## 🛠️ Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173/`

### Producción

```bash
# Construir para producción
npm run build

# Los archivos compilados estarán en el directorio dist/
```

## 📁 Estructura del Proyecto

```
Portfolio Website Design/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── DesktopIcon.tsx    # Iconos del escritorio
│   │   │   ├── TaskBar.tsx        # Barra de tareas
│   │   │   ├── Window.tsx         # Componente de ventana
│   │   │   ├── figma/            # Componentes de Figma
│   │   │   └── ui/               # Componentes UI de Radix
│   │   └── App.tsx               # Componente principal
│   ├── styles/
│   │   ├── fonts.css             # Fuentes personalizadas
│   │   ├── index.css             # CSS principal
│   │   ├── tailwind.css          # Configuración Tailwind
│   │   └── theme.css             # Variables de tema
│   └── main.tsx                  # Punto de entrada
├── index.html
├── package.json
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts               # Configuración Vite
└── README.md
```

## 🎯 Características Principales

### Ventanas Interactivas

Cada ventana incluye:
- **Título personalizado** con icono
- **Botones de control**: Minimizar, Maximizar, Cerrar
- **Contenido dinámico**: Sobre mí, Experiencia, Proyectos, Contacto
- **Gestión de z-index**: La ventana activa siempre está al frente

### Secciones del Portfolio

1. **👤 Sobre mí**: Información personal y presentación
2. **💼 Experiencia**: Historial profesional y habilidades
3. **💻 Proyectos**: Portafolio de trabajos realizados
4. **📧 Contacto**: Formulario y datos de contacto

## 🎨 Personalización

### Modificar Colores

Edita [src/styles/theme.css](src/styles/theme.css) para cambiar el esquema de colores.

### Agregar Nuevas Ventanas

1. Define el nuevo tipo en `WindowId` en [src/app/App.tsx](src/app/App.tsx)
2. Agrega el estado inicial en `windows`
3. Crea un nuevo `DesktopIcon`
4. Implementa el contenido de la ventana

### Cambiar Fuentes

Actualiza [src/styles/fonts.css](src/styles/fonts.css) con tus fuentes preferidas.

## 🐛 Solución de Problemas

### Página en blanco

Si ves una página en blanco:
1. Verifica que todas las dependencias estén instaladas
2. Revisa la consola del navegador (F12) para errores
3. Asegúrate de que el servidor de desarrollo esté corriendo
4. Limpia la caché del navegador (Ctrl+Shift+R)

### Errores de TypeScript

```bash
# Reiniciar el servidor TypeScript en VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

## 📄 Licencia

Este proyecto está basado en el diseño original de Figma disponible en:
https://www.figma.com/design/QAj9lYBejQtYvG58dgPxqN/Portfolio-Website-Design

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

**Alejadron** - Desarrollador Full Stack

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
  