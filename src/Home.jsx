export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white text-black font-sans">
        <header className="p-4 flex items-center gap-2 shadow-sm bg-white">
          <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
          <h1 className="text-xl font-semibold tracking-tight">Rumalia</h1>
        </header>
        <section className='py-12 px-6 text-center'>
          <h2 className='text-4xl font-bold mb-4'>Conecta con tu agente inmobiliario en Madrid</h2>
          <p className='text-lg text-gray-700 max-w-2xl mx-auto mb-8'>
            En Rumalia te ayudamos a vender o alquilar tu vivienda con atención personalizada.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto w-full'>
            <a href='#agente' className='flex-1 text-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition'>Contactar</a>
            <a href='#inmuebles' className='flex-1 text-center border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition'>Ver inmuebles</a>
          </div>
        </section>
      </main>
      <footer className="text-sm text-gray-600 border-t mt-12 py-6 px-6 text-center bg-white">
  <p className="mb-2">
    <a href="/aviso-legal" className="hover:underline">Aviso Legal</a> |{" "}
    <a href="/privacidad" className="hover:underline">Política de Privacidad</a> |{" "}
    <a href="/cookies" className="hover:underline">Política de Cookies</a>
  </p>
  <p>&copy; {new Date().getFullYear()} Rumalia</p>
</footer>

    </>
  );
}
