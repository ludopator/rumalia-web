export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="p-6 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold tracking-tight">Rumalia</h1>
        </div>
        <nav className="space-x-6">
          <a href="#inmuebles" className="hover:underline">Inmuebles</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
          <a href="#legal" className="hover:underline">Legal</a>
        </nav>
      </header>
      <section className="text-center py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Conecta con tu agente inmobiliario en Madrid</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          En Rumalia te ayudamos a vender o alquilar tu vivienda con atención personalizada, claridad y sin complicaciones.
        </p>
        <div className="space-x-4">
          <a href="#contacto" className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800">Habla con un agente</a>
          <a href="#inmuebles" className="px-6 py-3 rounded-xl border border-black text-black hover:bg-gray-100">Ver inmuebles</a>
        </div>
      </section>
      <section id="inmuebles" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-8 text-center">Inmuebles destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="border rounded-xl overflow-hidden shadow hover:shadow-md transition">
            <img src="/piso-chamberi.jpg" alt="Piso en Madrid" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">Piso en Chamberí</h4>
              <p className="text-gray-600 mb-2">2 habitaciones, 1 baño · 74 m²</p>
              <p className="font-bold text-lg">390.000 €</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
        <p className="text-gray-700 mb-6">¿Tienes dudas, una propiedad o quieres hablar con un asesor? Escríbenos directamente y te responderemos lo antes posible.</p>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded-xl" />
          <input type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded-xl" />
          <input type="tel" placeholder="Teléfono" className="w-full border px-4 py-2 rounded-xl" />
          <textarea placeholder="¿En qué podemos ayudarte?" className="w-full border px-4 py-2 rounded-xl" rows={4}></textarea>
          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800" type="submit">Enviar</button>
        </form>
      </section>
      <section id="legal" className="py-16 px-6 max-w-4xl mx-auto text-sm text-gray-600">
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
      <footer className="bg-white border-t text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rumalia. Todos los derechos reservados.
      </footer>
    </main>
  );
}
