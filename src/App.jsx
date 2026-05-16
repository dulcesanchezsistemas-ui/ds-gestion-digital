import {
  FaLaptopCode,
  FaBullhorn,
  FaCogs,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import logo from "./assets/logo.jpg";

function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white overflow-hidden">

      {/* FONDO DECORATIVO */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/50230028070"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:scale-110 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50 transition"
      >
        <FaWhatsapp />
      </a>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/10 backdrop-blur-xl bg-[#070B14]/80 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="DS Gestión Digital"
            className="w-12 h-12 object-contain rounded-xl"
          />

          <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
            DS Gestión Digital
          </h2>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#servicios" className="hover:text-white transition">Servicios</a>
          <a href="#diferencia" className="hover:text-white transition">Diferencia</a>
          <a href="#contacto" className="hover:text-white transition">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 md:px-16 py-28 md:py-36 text-center">
        <div className="inline-block border border-white/10 bg-white/5 px-5 py-2 rounded-full text-sm text-gray-300 mb-8">
          Tecnología estratégica para negocios en crecimiento
        </div>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-6xl mx-auto tracking-tight">
          Digitalizamos tu negocio con soluciones modernas, simples y elegantes.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
          En DS Gestión Digital ayudamos a emprendedores y empresas a dejar atrás
          los procesos manuales mediante páginas web, automatización y presencia
          digital profesional.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
          <a
            href="https://wa.me/50230028070"
            target="_blank"
            className="bg-white text-[#070B14] hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-3"
          >
            Solicitar asesoría <FaArrowRight />
          </a>

          <a
            href="#servicios"
            className="border border-white/15 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition"
          >
            Ver servicios
          </a>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-8 md:px-16 py-24">
        <div className="text-center mb-16">
          <p className="text-gray-400 uppercase tracking-[0.3em] text-sm mb-4">
            Lo que hacemos
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Servicios pensados para transformar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Servicio
            icon={<FaLaptopCode />}
            title="Desarrollo Web"
            text="Creamos sitios web profesionales, rápidos y adaptados a celulares para mostrar tu marca con confianza."
          />

          <Servicio
            icon={<FaCogs />}
            title="Automatización"
            text="Convertimos procesos manuales en flujos digitales más rápidos, ordenados y eficientes."
          />

          <Servicio
            icon={<FaBullhorn />}
            title="Marketing Digital"
            text="Diseñamos estrategias visuales y digitales para mejorar tu presencia en redes y atraer clientes."
          />
        </div>
      </section>

      {/* DIFERENCIA */}
      <section id="diferencia" className="px-8 md:px-16 py-24 bg-white/[0.03]">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div>
            <p className="text-gray-400 uppercase tracking-[0.3em] text-sm mb-4">
              Nuestra diferencia
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              No solo diseñamos. Creamos soluciones con propósito.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Cada proyecto se construye con una visión clara: que tu negocio se
              vea profesional, funcione mejor y pueda crecer en el mundo digital.
            </p>
          </div>

          <div className="space-y-5">
            <Detalle text="Diseño limpio, moderno y elegante." />
            <Detalle text="Soluciones adaptadas a cada negocio." />
            <Detalle text="Comunicación clara y atención personalizada." />
            <Detalle text="Enfoque en resultados, no solo en apariencia." />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-8 md:px-16 py-32 text-center">
        <div className="max-w-4xl mx-auto bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 md:p-16 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tu negocio puede verse más profesional desde hoy.
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Hablemos de tu idea y creemos una solución digital que represente la
            esencia de tu marca.
          </p>

          <a
            href="https://wa.me/50230028070"
            target="_blank"
            className="bg-white text-[#070B14] hover:bg-gray-200 px-10 py-5 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Contactar por WhatsApp <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 DS Gestión Digital — Soluciones digitales inteligentes.
      </footer>
    </div>
  );
}

function Servicio({ icon, title, text }) {
  return (
    <div className="group bg-white/[0.04] border border-white/10 p-9 rounded-[2rem] hover:bg-white/[0.07] transition duration-300">
      <div className="text-4xl text-gray-200 mb-8 group-hover:scale-110 transition">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <p className="text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}

function Detalle({ text }) {
  return (
    <div className="flex items-center gap-4 bg-white/[0.04] border border-white/10 p-5 rounded-2xl">
      <FaCheckCircle className="text-gray-300" />
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

export default App;