export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans">
      <header className="p-5 flex items-center gap-2 shadow-sm bg-white">
        <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
        <h1 className="text-xl font-semibold tracking-tight">Rumalia</h1>
      </header>

      {/* Hero section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-5xl font-bold mb-4 leading-tight">Conecta con tu agente inmobiliario en Madrid</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          En Rumalia te ayudamos a vender o alquilar tu vivienda con atención personalizada, claridad y sin complicaciones.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#agente" className="bg-[#0071e3] text-white px-7 py-3 rounded-full font-medium hover:bg-[#005bb5] transition">Habla con un agente</a>
          <a href="#inmuebles" className="px-7 py-3 rounded-full border border-[#0071e3] text-[#0071e3] font-medium hover:bg-[#e6f0fb] transition">Ver inmuebles</a>
        </div>
      </section>

      {/* Inmuebles */}
      <section id="inmuebles" className="py-20 px-6">
        <h3 className="text-3xl font-semibold mb-8 text-center">Inmuebles destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{
            img: "/piso-chamberi.jpg",
            title: "Piso en Chamberí",
            details: "2 habitaciones · 1 baño · 74 m²",
            price: "390.000 €"
          }, {
            img: "/piso-salamanca.jpg",
            title: "Ático en Salamanca",
            details: "3 habitaciones · 2 baños · 120 m²",
            price: "720.000 €"
          }, {
            img: "/piso-tetuan.jpg",
            title: "Estudio en Tetuán",
            details: "1 habitación · 1 baño · 45 m²",
            price: "195.000 €"
          }].map((piso, i) => (
            <div key={i} className="rounded-3xl overflow-hidden shadow bg-white">
              <img src={piso.img} alt={piso.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1">{piso.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{piso.details}</p>
                <p className="text-base font-semibold">{piso.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section id="agente" className="py-20 px-6 max-w-2xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-center">Habla con un agente</h3>
        <p className="text-gray-700 mb-6 text-center">Rellena el formulario y te contactaremos lo antes posible.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded-xl" />
          <input type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded-xl" />
          <input type="tel" placeholder="Teléfono" className="w-full border px-4 py-2 rounded-xl" />
          <textarea placeholder="¿En qué podemos ayudarte?" className="w-full border px-4 py-2 rounded-xl" rows={4}></textarea>
          <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full hover:bg-[#005bb5] transition" type="submit">Enviar</button>
        </form>
      </section>

      {/* Legales */}
      <section id="legal" className="py-16 px-6 max-w-4xl mx-auto text-sm text-gray-500">
        <h3 className="text-xl font-semibold mb-4">Textos legales</h3>
        <p className="mb-4">
          <strong>Aviso legal:</strong> Rumalia es una marca comercial registrada. Esta web tiene como finalidad la promoción de servicios inmobiliarios. El uso de este sitio implica la aceptación de nuestras condiciones legales. Todos los derechos reservados.
        </p>
        <p className="mb-4">
          <strong>Política de privacidad:</strong> Los datos que nos facilites serán tratados con la única finalidad de responder a tu consulta. En ningún caso se compartirán con terceros. Puedes ejercer tus derechos de acceso, rectificación o cancelación escribiendo a contacto@rumalia.com.
        </p>
        <p>
          <strong>Política de cookies:</strong> Esta web utiliza cookies técnicas para mejorar la experiencia de usuario. No se usan cookies de terceros sin consentimiento. Al navegar por este sitio aceptas nuestra política de cookies.
        </p>
      </section>
    </main>
  );
}
