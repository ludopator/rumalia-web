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

      {/* Hero section */}
      <section className="text-center py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Conecta con tu agente inmobiliario en Madrid</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          En Rumalia te ayudamos a vender o alquilar tu vivienda con atención personalizada, claridad y sin complicaciones.
        </p>
        <div className="space-x-4">
          <a href="#agente" className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800">Habla con un agente</a>
          <a href="#inmuebles" className="px-6 py-3 rounded-xl border border-black text-black hover:bg-gray-100">Ver inmuebles</a>
        </div>
      </section>

      {/* Sección Habla con un agente */}
      <section id="agente" className="py-20 px-6 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Habla con un agente</h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          ¿Quieres vender o alquilar tu casa? ¿Necesitas asesoramiento personalizado para encontrar un piso? Contacta con uno de nuestros agentes especializados en Madrid. Estamos para ayudarte.
        </p>
        <a href="#contacto" className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">Contactar ahora</a>
      </section>

      {/* Sección de Textos legales */}
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
    </main>
  );
}
