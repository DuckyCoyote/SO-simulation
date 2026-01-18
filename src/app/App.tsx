import { useState, useEffect } from 'react';
import { Window } from './components/Window';
import { TaskBar } from './components/TaskBar';
import { DesktopIcon } from './components/DesktopIcon';
import { Briefcase, Code, User, Mail } from 'lucide-react';

type WindowId = 'about' | 'experience' | 'projects' | 'contact';

interface WindowState {
  id: WindowId;
  title: string;
  icon: string;
  isOpen: boolean;
  zIndex: number;
}

export default function App() {
  const [windows, setWindows] = useState<Record<WindowId, WindowState>>({
    about: { id: 'about', title: 'Sobre mí', icon: '👤', isOpen: false, zIndex: 1 },
    experience: { id: 'experience', title: 'Experiencia', icon: '💼', isOpen: false, zIndex: 1 },
    projects: { id: 'projects', title: 'Proyectos', icon: '💻', isOpen: false, zIndex: 1 },
    contact: { id: 'contact', title: 'Contacto', icon: '📧', isOpen: false, zIndex: 1 },
  });
  const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(1);
  const [showStartMenu, setShowStartMenu] = useState(false);

  const openWindow = (id: WindowId) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, zIndex: newZIndex },
    }));
    setActiveWindow(id);
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const focusWindow = (id: WindowId) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], zIndex: newZIndex },
    }));
    setActiveWindow(id);
  };

  const openWindows = Object.values(windows).filter((w) => w.isOpen);

  return (
    <div
      className="size-full relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #008080 0%, #006666 100%)',
      }}
    >
      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <DesktopIcon icon="👤" label="Sobre mí" onClick={() => openWindow('about')} />
        <DesktopIcon icon="💼" label="Experiencia" onClick={() => openWindow('experience')} />
        <DesktopIcon icon="💻" label="Proyectos" onClick={() => openWindow('projects')} />
        <DesktopIcon icon="📧" label="Contacto" onClick={() => openWindow('contact')} />
      </div>

      {/* Windows */}
      {windows.about.isOpen && (
        <Window
          title={windows.about.title}
          icon={windows.about.icon}
          onClose={() => closeWindow('about')}
          defaultPosition={{ x: 120, y: 80 }}
          zIndex={windows.about.zIndex}
          onFocus={() => focusWindow('about')}
        >
          <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
            <h2 className="mb-4 flex items-center gap-2">
              <User className="w-6 h-6" />
              <span>Alejadron - Desarrollador Full Stack</span>
            </h2>
            <div className="space-y-3">
              <p>
                ¡Hola! Soy Alejadron, un desarrollador apasionado por crear experiencias digitales
                únicas y funcionales.
              </p>
              <p>
                Mi carrera profesional se centra en el desarrollo web moderno, con especial énfasis
                en tecnologías como React, TypeScript, Node.js y bases de datos SQL/NoSQL.
              </p>
              <p>
                Me encanta explorar nuevas tecnologías y aplicar soluciones creativas a problemas
                complejos. Siempre busco mejorar mis habilidades y aprender de cada proyecto.
              </p>
              <div className="mt-4 p-3 bg-[#c0c0c0] border-2 shadow-[inset_-1px_-1px_0_0_#ffffff,inset_1px_1px_0_0_#808080]">
                <p className="font-bold mb-2">Especialidades:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Desarrollo Frontend (React, Vue, Angular)</li>
                  <li>Desarrollo Backend (Node.js, Python, Java)</li>
                  <li>Bases de datos y arquitectura de sistemas</li>
                  <li>UI/UX y diseño de interfaces</li>
                </ul>
              </div>
            </div>
          </div>
        </Window>
      )}

      {windows.experience.isOpen && (
        <Window
          title={windows.experience.title}
          icon={windows.experience.icon}
          onClose={() => closeWindow('experience')}
          defaultPosition={{ x: 160, y: 120 }}
          zIndex={windows.experience.zIndex}
          onFocus={() => focusWindow('experience')}
        >
          <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
            <h2 className="mb-4 flex items-center gap-2">
              <Briefcase className="w-6 h-6" />
              <span>Experiencia Profesional</span>
            </h2>
            <div className="space-y-4">
              {/* Experiencia 1 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">Senior Full Stack Developer</h3>
                <p className="text-[#000080] mb-2">TechCorp Inc. | 2022 - Presente</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Desarrollo de aplicaciones web escalables con React y Node.js</li>
                  <li>Liderazgo de equipo de 5 desarrolladores</li>
                  <li>Implementación de arquitecturas microservicios</li>
                  <li>Mejora del rendimiento en un 40%</li>
                </ul>
              </div>

              {/* Experiencia 2 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">Full Stack Developer</h3>
                <p className="text-[#000080] mb-2">StartupXYZ | 2020 - 2022</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Desarrollo de MVP para startup tecnológica</li>
                  <li>Integración de APIs RESTful y GraphQL</li>
                  <li>Implementación de sistemas de autenticación</li>
                  <li>Trabajo con metodologías ágiles (Scrum)</li>
                </ul>
              </div>

              {/* Experiencia 3 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">Junior Frontend Developer</h3>
                <p className="text-[#000080] mb-2">WebAgency | 2018 - 2020</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Desarrollo de sitios web responsivos</li>
                  <li>Maquetación HTML/CSS y JavaScript</li>
                  <li>Colaboración con diseñadores UX/UI</li>
                  <li>Optimización SEO y accesibilidad</li>
                </ul>
              </div>
            </div>
          </div>
        </Window>
      )}

      {windows.projects.isOpen && (
        <Window
          title={windows.projects.title}
          icon={windows.projects.icon}
          onClose={() => closeWindow('projects')}
          defaultPosition={{ x: 200, y: 160 }}
          zIndex={windows.projects.zIndex}
          onFocus={() => focusWindow('projects')}
        >
          <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
            <h2 className="mb-4 flex items-center gap-2">
              <Code className="w-6 h-6" />
              <span>Proyectos Personales</span>
            </h2>
            <div className="space-y-4">
              {/* Proyecto 1 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">🎮 RetroGames Hub</h3>
                <p className="mb-2">Plataforma de juegos retro online con multiplayer</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">React</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">WebSocket</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">Canvas API</span>
                </div>
                <p>✨ +10K usuarios activos mensuales</p>
              </div>

              {/* Proyecto 2 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">📚 BookTracker</h3>
                <p className="mb-2">Aplicación para seguimiento de lectura y reseñas</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">Vue.js</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">Firebase</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">PWA</span>
                </div>
                <p>✨ Featured en Product Hunt</p>
              </div>

              {/* Proyecto 3 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">🤖 AI Chat Assistant</h3>
                <p className="mb-2">Chatbot inteligente con procesamiento de lenguaje natural</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">Python</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">TensorFlow</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">FastAPI</span>
                </div>
                <p>✨ Open source - 500+ stars en GitHub</p>
              </div>

              {/* Proyecto 4 */}
              <div className="border-2 border-[#808080] p-3 bg-[#f0f0f0]">
                <h3 className="font-bold mb-1">🎨 PixelArt Editor</h3>
                <p className="mb-2">Editor de pixel art online con herramientas avanzadas</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">TypeScript</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">Canvas</span>
                  <span className="px-2 py-1 bg-[#000080] text-white text-sm">IndexedDB</span>
                </div>
                <p>✨ 5K+ creaciones compartidas</p>
              </div>
            </div>
          </div>
        </Window>
      )}

      {windows.contact.isOpen && (
        <Window
          title={windows.contact.title}
          icon={windows.contact.icon}
          onClose={() => closeWindow('contact')}
          defaultPosition={{ x: 240, y: 200 }}
          zIndex={windows.contact.zIndex}
          onFocus={() => focusWindow('contact')}
        >
          <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px' }}>
            <h2 className="mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <span>Información de Contacto</span>
            </h2>
            <div className="space-y-4">
              <p>¿Interesado en trabajar juntos o tienes alguna pregunta?</p>
              <p>¡No dudes en contactarme!</p>

              <div className="border-2 border-[#808080] p-4 bg-[#f0f0f0] space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-[#000080]">alejadron@email.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <p className="font-bold">LinkedIn</p>
                    <p className="text-[#000080]">linkedin.com/in/alejadron</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p className="font-bold">GitHub</p>
                    <p className="text-[#000080]">github.com/alejadron</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🐦</span>
                  <div>
                    <p className="font-bold">Twitter</p>
                    <p className="text-[#000080]">@alejadron_dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <p className="font-bold">Website</p>
                    <p className="text-[#000080]">www.alejadron.dev</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#ffffe0] border-2 border-[#808080]">
                <p className="font-bold mb-1">💡 Disponibilidad</p>
                <p>Actualmente abierto a nuevas oportunidades y proyectos freelance.</p>
              </div>
            </div>
          </div>
        </Window>
      )}

      {/* Start Menu */}
      {showStartMenu && (
        <div
          className="absolute bottom-10 left-1 w-64 bg-[#c0c0c0] border-2 shadow-[2px_2px_4px_rgba(0,0,0,0.4)]"
          style={{ fontFamily: 'VT323, monospace' }}
        >
          <div className="bg-gradient-to-b from-[#000080] to-[#1084d0] text-white p-2 text-xl">
            Alejadron Portfolio 95
          </div>
          <div className="p-1">
            <button
              onClick={() => {
                openWindow('about');
                setShowStartMenu(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-lg"
            >
              <span>👤</span> Sobre mí
            </button>
            <button
              onClick={() => {
                openWindow('experience');
                setShowStartMenu(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-lg"
            >
              <span>💼</span> Experiencia
            </button>
            <button
              onClick={() => {
                openWindow('projects');
                setShowStartMenu(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-lg"
            >
              <span>💻</span> Proyectos
            </button>
            <button
              onClick={() => {
                openWindow('contact');
                setShowStartMenu(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-lg"
            >
              <span>📧</span> Contacto
            </button>
            <div className="border-t border-[#808080] my-1"></div>
            <button className="w-full text-left px-3 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-2 text-lg">
              <span>🔌</span> Cerrar sesión
            </button>
          </div>
        </div>
      )}

      {/* TaskBar */}
      <TaskBar
        onStartClick={() => setShowStartMenu(!showStartMenu)}
        openWindows={openWindows}
        activeWindow={activeWindow}
        onWindowClick={(id) => focusWindow(id as WindowId)}
      />
    </div>
  );
}
