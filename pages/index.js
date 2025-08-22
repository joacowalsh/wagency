import Head from 'next/head';

export default function Home() {
  const services = [
    {
      title: 'Community Management',
      desc: 'Gestión profesional de tus redes sociales para construir una comunidad activa y fiel.',
    },
    {
      title: 'Diseño Gráfico',
      desc: 'Creatividades únicas y consistentes con la identidad de tu marca.',
    },
    {
      title: 'Meta Ads',
      desc: 'Campañas efectivas en Facebook e Instagram orientadas a resultados.',
    },
    {
      title: 'Google Ads',
      desc: 'Anuncios dirigidos a clientes potenciales que buscan tus productos o servicios.',
    },
    {
      title: 'Páginas Web',
      desc: 'Desarrollo de sitios atractivos, rápidos y optimizados para SEO.',
    },
    {
      title: 'Email Marketing',
      desc: 'Automatizaciones y newsletters que convierten suscriptores en clientes.',
    },
  ];
  const plans = [
    {
      name: 'Starter',
      bullets: [
        'Landing 1 página',
        'Formulario de contacto',
        'Dominio conectado',
        'SEO básico',
      ],
    },
    {
      name: 'Business',
      bullets: [
        'Hasta 5 secciones',
        'Portfolio y Blog',
        'Integraciones (Analytics, Meta Pixel)',
        'Optimización SEO',
      ],
    },
    {
      name: 'E‑commerce',
      bullets: [
        'Catálogo y pagos',
        'Email transaccional',
        'Automatizaciones',
        'Soporte prioritario',
      ],
    },
  ];
  return (
    <>
      <Head>
        <title>W AGENCY | Agencia de Marketing Digital</title>
        <meta
          name="description"
          content="Soluciones de Marketing Digital para que conectes tu negocio con más clientes todos los días."
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-primary">
        {/* NAVIGATION */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight text-primary">W AGENCY</a>
            <ul className="hidden md:flex gap-6 text-sm">
              <li><a href="#servicios" className="hover:opacity-70">Servicios</a></li>
              <li><a href="#portfolio" className="hover:opacity-70">Portfolio</a></li>
              <li><a href="#planes" className="hover:opacity-70">Planes</a></li>
              <li><a href="#contacto" className="hover:opacity-70">Contacto</a></li>
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-2xl border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition"
            >
              ¡Quiero!
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-4 pt-16 pb-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-secondary">
              🚀 Soluciones integrales
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="block">Soluciones de Marketing Digital</span>
              <span className="block bg-yellow-200 px-1">para que conectes tu negocio</span>
              <span className="block">con más clientes todos los días</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Nos encargamos de tu presencia online de principio a fin: estrategia, diseño, campañas y
              optimización.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-2xl bg-primary text-white px-5 py-3 text-sm font-semibold hover:opacity-90"
              >
                ¡Quiero!
              </a>
              <a
                href="#portfolio"
                className="rounded-2xl border border-primary text-primary px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Ver proyectos
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-slate-500">Responsive</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-2xl font-bold text-primary">SEO</div>
                <div className="text-xs text-slate-500">Optimizado</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <div className="text-2xl font-bold text-primary">Soporte</div>
                <div className="text-xs text-slate-500">Personalizado</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-white shadow-xl p-4">
              <div className="h-full w-full rounded-2xl bg-gradient-to-tr from-primary via-secondary to-indigo-600" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl border border-slate-200 bg-white p-4 shadow-md">
              <p className="text-sm font-semibold">Checklist de lanzamiento</p>
              <ul className="mt-2 text-xs text-slate-600 space-y-1 list-disc list-inside">
                <li>Dominio conectado</li>
                <li>SEO básico</li>
                <li>Analítica</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Servicios</h2>
          <p className="mt-2 text-slate-600">Elige solo lo que necesitás hoy; escalá cuando quieras.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 p-6 hover:shadow-sm transition"
              >
                <div className="text-lg font-semibold text-primary">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Portfolio</h2>
          <p className="mt-2 text-slate-600">Algunos ejemplos de proyectos. Reemplazá las tarjetas con tus casos reales.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <article
                key={n}
                className="group rounded-3xl border border-slate-200 overflow-hidden hover:shadow-sm transition"
              >
                <div className="aspect-[16/10] bg-slate-200" />
                <div className="p-4">
                  <h3 className="font-semibold text-primary">Proyecto {n}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Descripción corta del proyecto y resultados logrados.
                  </p>
                  <a
                    className="mt-3 inline-block text-sm font-medium underline decoration-slate-300 group-hover:decoration-primary"
                    href="#"
                  >
                    Ver caso
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Planes</h2>
          <p className="mt-2 text-slate-600">Comenzá simple y evolucioná en etapas.</p>
          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 p-6">
                <div className="text-lg font-semibold text-primary">{p.name}</div>
                <div className="mt-1 text-sm text-slate-500">Consultá por presupuesto</div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc list-inside">
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex rounded-2xl bg-primary text-white px-4 py-2 text-sm font-semibold"
                >
                  Solicitar
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Preguntas frecuentes</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="font-semibold text-primary">¿Puedo usar mi dominio .com.ar?</div>
              <p className="mt-2 text-sm text-slate-600">
                Sí. Registrás el dominio en NIC Argentina y lo apuntamos al hosting elegido.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="font-semibold text-primary">¿La web es escalable?</div>
              <p className="mt-2 text-sm text-slate-600">
                La arquitectura está pensada para crecer: más secciones, blog o tienda sin rehacer todo.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="font-semibold text-primary">¿Incluye analítica?</div>
              <p className="mt-2 text-sm text-slate-600">
                Incluimos Google Analytics 4 y eventos básicos para medir resultados.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="font-semibold text-primary">¿Cómo contacto soporte?</div>
              <p className="mt-2 text-sm text-slate-600">
                Tenés canal por WhatsApp y email. También podemos agregar mantenimiento mensual.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="mx-auto max-w-2xl px-4 py-16">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Hablemos</h2>
            <p className="mt-2 text-slate-600">
              Completá el formulario y te escribimos para iniciar tu proyecto.
            </p>
            <form
              className="mt-6 grid gap-4"
              method="POST"
              action="https://formspree.io/f/your-form-id"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="nombre"
                  placeholder="Nombre"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  required
                />
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                  required
                />
              </div>
              <input
                name="telefono"
                placeholder="Teléfono"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
              />
              <textarea
                name="mensaje"
                placeholder="Contanos sobre tu proyecto"
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 min-h-[120px]"
              ></textarea>
              <button
                className="rounded-2xl bg-primary text-white px-5 py-3 text-sm font-semibold hover:opacity-90"
                type="submit"
              >
                Enviar consulta
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              También podés escribirnos al
              <a
                href="https://wa.me/5491162887691?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios"
                className="text-secondary underline ml-1"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              . Al enviar aceptás nuestra política de privacidad.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="font-semibold text-primary">W AGENCY</div>
              <div className="text-sm text-slate-600">
                © {new Date().getFullYear()} · Todos los derechos reservados
              </div>
            </div>
            <div className="md:text-right text-sm text-slate-600">
              Hecho con Next.js + Tailwind
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}