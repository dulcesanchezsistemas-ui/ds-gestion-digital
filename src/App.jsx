import {
  FaLaptopCode,
  FaBullhorn,
  FaCogs,
  FaWhatsapp,
} from "react-icons/fa";

import logo from "./assets/logo.jpg";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/502XXXXXXXX"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 transition"
      >
        <FaWhatsapp />
      </a>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="DS Gestión Digital"
            className="w-14 h-14 object-contain rounded-xl"
          />

          <h2 className="text-2xl font-bold text-blue-400">
            DS Gestión Digital
          </h2>

        </div>

        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <a href="#" className="hover:text-blue-400 transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-blue-400 transition">
            Servicios
          </a>

          <a href="#proyectos" className="hover:text-blue-400 transition">
            Proyectos
          </a>

          <a href="#contacto" className="hover:text-blue-400 transition">
            Contacto
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 py-28 text-center">

        <p className="text-blue-400 font-semibold mb-5 uppercase tracking-widest">
          Agencia tecnológica en Guatemala
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-6xl mx-auto">
          Transformamos negocios manuales en soluciones digitales inteligentes
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
          Ayudamos a emprendedores, mini empresas y negocios tradicionales a
          modernizar sus procesos mediante páginas web, automatización,
          marketing digital y herramientas tecnológicas profesionales.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <a
            href="https://wa.me/502XXXXXXXX"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold text-lg transition shadow-lg"
          >
            Solicitar cotización
          </a>

          <a
            href="#servicios"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-950 px-8 py-4 rounded-2xl font-semibold text-lg transition"
          >
            Ver servicios
          </a>

        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="px-8 py-24 bg-slate-900"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Nuestros Servicios
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Ofrecemos soluciones tecnológicas modernas para ayudar a las empresas
          a crecer de manera eficiente, profesional y digital.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-slate-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-xl">

            <FaLaptopCode className="text-6xl text-blue-400 mb-8 mx-auto" />

            <h3 className="text-2xl font-bold text-center mb-5">
              Desarrollo Web
            </h3>

            <p className="text-gray-300 text-center leading-relaxed">
              Creamos páginas web modernas, rápidas y adaptadas a celulares
              para negocios, marcas personales y emprendimientos.
            </p>

          </div>

          <div className="bg-slate-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-xl">

            <FaCogs className="text-6xl text-blue-400 mb-8 mx-auto" />

            <h3 className="text-2xl font-bold text-center mb-5">
              Automatización
            </h3>

            <p className="text-gray-300 text-center leading-relaxed">
              Digitalizamos procesos manuales para ahorrar tiempo, mejorar la
              productividad y optimizar la administración empresarial.
            </p>

          </div>

          <div className="bg-slate-800 p-10 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-xl">

            <FaBullhorn className="text-6xl text-blue-400 mb-8 mx-auto" />

            <h3 className="text-2xl font-bold text-center mb-5">
              Marketing Digital
            </h3>

            <p className="text-gray-300 text-center leading-relaxed">
              Diseñamos estrategias digitales modernas para redes sociales,
              branding y crecimiento de negocios.
            </p>

          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section
        id="proyectos"
        className="px-8 py-24"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5">
          Proyectos Recientes
        </h2>

        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16 text-lg">
          Algunos ejemplos de soluciones tecnológicas y digitales desarrolladas
          para negocios y emprendimientos.
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition">
            <div className="h-56 bg-blue-500"></div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Página Web Empresarial
              </h3>

              <p className="text-gray-300">
                Desarrollo de sitio moderno para una empresa enfocada en
                crecimiento digital y automatización.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition">
            <div className="h-56 bg-purple-500"></div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Sistema Administrativo
              </h3>

              <p className="text-gray-300">
                Plataforma para gestión de clientes, ventas y procesos internos.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition">
            <div className="h-56 bg-green-500"></div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Branding Digital
              </h3>

              <p className="text-gray-300">
                Diseño visual y estrategia digital para redes sociales y marca.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="px-8 py-28 text-center bg-slate-900"
      >

        <h2 className="text-5xl font-bold mb-6">
          ¿Lista para digitalizar tu negocio?
        </h2>

        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          En DS Gestión Digital convertimos ideas en herramientas tecnológicas
          modernas, funcionales y fáciles de usar.
        </p>

        <a
          href="https://wa.me/50230028070"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-2xl font-semibold text-lg transition shadow-lg inline-block"
        >
          Contactar por WhatsApp
        </a>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 text-center text-gray-400">
        © 2026 DS Gestión Digital — Todos los derechos reservados.
      </footer>

    </div>
  )
}

export default App