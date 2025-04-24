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
    </main>
  );
}
