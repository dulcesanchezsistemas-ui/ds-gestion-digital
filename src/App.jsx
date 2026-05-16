import {
  FaLaptopCode,
  FaBullhorn,
  FaCogs,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

import logo from "./assets/logo.jpg";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1E293B] overflow-hidden">

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/50230028070"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:scale-110 w-14 h-14 rounded-full flex items-center justify-center text-2xl text-white shadow-xl z-50 transition"
      >
        <FaWhatsapp />
      </a>

      {/* FONDO DECORATIVO */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#B89B72]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] left-[-100px] w-[400px] h-[400px] bg-[#CBD5E1]/40 rounded-full blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-[#F8F5F1]/90 backdrop-blur-xl border-b border-[#E7DED2] px-8 md:px-16 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="DS Gestión Digital"
            className="w-12 h-12 object-contain rounded-xl"
          />

          <h2 className="text-xl md:text-2xl font-bold">
            DS Gestión Digital
          </h2>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-[#64748B]">
          <a href="#" className="hover:text-[#1E293B] transition">Inicio</a>
          <a href="#servicios" className="hover:text-[#1E293B] transition">Servicios</a>
          <a href="#filosofia" className="hover:text-[#1E293B] transition">Filosofía</a>
          <a href="#contacto" className="hover:text-[#1E293B] transition">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          <div>
            <p className="inline-block bg-white border border-[#E7DED2] px-5 py-2 rounded-full text-sm text-[#64748B] mb-6 shadow-sm">
              Agencia digital para negocios modernos
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Tecnología elegante para hacer crecer tu negocio.
            </h1>

            <p className="text-[#64748B] text-lg mt-7 leading-relaxed max-w-xl">
              En DS Gestión Digital ayudamos a emprendedores y empresas a
              digitalizar sus procesos, mejorar su presencia online y proyectar
              una imagen profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="https://wa.me/50230028070"
                target="_blank"
                className="bg-[#1E293B] text-white hover:bg-[#0F172A] px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-3"
              >
                Solicitar asesoría <FaArrowRight />
              </a>

              <a
                href="#servicios"
                className="border border-[#CFC6BA] hover:bg-white px-8 py-4 rounded-full font-semibold transition text-center"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* MOCKUP */}
          <div className="bg-white rounded-[2rem] shadow-2xl border border-[#E7DED2] p-6">
            <div className="bg-[#F8F5F1] rounded-[1.5rem] p-6">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 bg-red-300 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                <span className="w-3 h-3 bg-green-300 rounded-full"></span>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm mb-5">
                <p className="text-sm text-[#64748B] mb-2">Dashboard digital</p>
                <h3 className="text-2xl font-bold">Negocio organizado</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm">
                  <FaChartLine className="text-[#B89B72] text-3xl mb-4" />
                  <p className="font-semibold">Crecimiento</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">
                  <FaCogs className="text-[#B89B72] text-3xl mb-4" />
                  <p className="font-semibold">Automatización</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-8 md:px-16 py-24 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#B89B72] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Servicios
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Soluciones digitales con propósito
          </h2>

          <p className="text-[#64748B] text-lg">
            Diseñamos herramientas modernas para que tu negocio se vea mejor,
            trabaje mejor y conecte mejor con sus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Servicio
            icon={<FaLaptopCode />}
            title="Desarrollo Web"
            text="Páginas web modernas, elegantes y adaptadas a celulares para presentar tu negocio de forma profesional."
          />

          <Servicio
            icon={<FaCogs />}
            title="Automatización"
            text="Digitalizamos procesos manuales para ahorrar tiempo, reducir errores y mejorar la organización."
          />

          <Servicio
            icon={<FaBullhorn />}
            title="Marketing Digital"
            text="Creamos estrategias visuales y digitales para mejorar tu presencia en redes sociales."
          />
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section id="filosofia" className="px-8 md:px-16 py-24">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div>
            <p className="text-[#B89B72] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Nuestra filosofía
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              La tecnología no debe complicar tu negocio. Debe hacerlo crecer.
            </h2>

            <p className="text-[#64748B] text-lg leading-relaxed">
              Por eso creamos soluciones digitales claras, funcionales y
              elegantes, pensadas para negocios que quieren avanzar sin perder
              su esencia.
            </p>
          </div>

          <div className="space-y-5">
            <Detalle text="Diseño limpio, profesional y confiable." />
            <Detalle text="Soluciones adaptadas a cada tipo de negocio." />
            <Detalle text="Comunicación clara y atención personalizada." />
            <Detalle text="Enfoque en resultados reales." />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-8 md:px-16 py-28 bg-[#1E293B] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#B89B72] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Contacto
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tu negocio puede verse más profesional desde hoy.
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Hablemos de tu idea y creemos una solución digital elegante,
            moderna y funcional para tu marca.
          </p>

          <a
            href="https://wa.me/50230028070"
            target="_blank"
            className="bg-white text-[#1E293B] hover:bg-[#F8F5F1] px-10 py-5 rounded-full font-semibold inline-flex items-center gap-3 transition"
          >
            Contactar por WhatsApp <FaWhatsapp />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-[#64748B] text-sm bg-[#F8F5F1]">
        © 2026 DS Gestión Digital — Transformamos ideas en soluciones digitales inteligentes.
      </footer>

    </div>
  );
}

function Servicio({ icon, title, text }) {
  return (
    <div className="bg-[#F8F5F1] border border-[#E7DED2] p-9 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
      <div className="text-4xl text-[#B89B72] mb-7">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-[#64748B] leading-relaxed">{text}</p>
    </div>
  );
}

function Detalle({ text }) {
  return (
    <div className="bg-white border border-[#E7DED2] p-5 rounded-2xl shadow-sm flex items-center gap-4">
      <FaCheckCircle className="text-[#B89B72] text-xl" />
      <p className="text-[#475569] font-medium">{text}</p>
    </div>
  );
}

export default App;