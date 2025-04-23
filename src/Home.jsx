export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
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
...
      </footer>
    </main>
  );
}
