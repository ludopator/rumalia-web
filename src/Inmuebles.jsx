import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Inmuebles() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('rumalia_current_user');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('rumalia_current_user');
    navigate('/');
  };

  const inmuebles = [
    {
      img: "/piso-chamberi.jpg",
      title: "Piso en Chamberí",
      details: "2 habitaciones · 1 baño · 74 m²",
      price: "390.000 €",
      description: "Luminoso piso reformado en una de las zonas más demandadas de Madrid."
    },
    {
      img: "/piso-salamanca.jpg",
      title: "Ático en Salamanca",
      details: "3 habitaciones · 2 baños · 120 m²",
      price: "720.000 €",
      description: "Exclusivo ático con terraza y vistas panorámicas en el barrio de Salamanca."
    },
    {
      img: "/piso-tetuan.jpg",
      title: "Estudio en Tetuán",
      details: "1 habitación · 1 baño · 45 m²",
      price: "195.000 €",
      description: "Perfecto estudio para inversión o primera vivienda en zona bien comunicada."
    },
    {
      img: "/piso-chamberi.jpg",
      title: "Dúplex en Malasaña",
      details: "2 habitaciones · 2 baños · 85 m²",
      price: "450.000 €",
      description: "Moderno dúplex en el corazón de Malasaña, totalmente renovado."
    },
    {
      img: "/piso-salamanca.jpg",
      title: "Piso en Retiro",
      details: "4 habitaciones · 2 baños · 140 m²",
      price: "680.000 €",
      description: "Espacioso piso familiar cerca del Parque del Retiro."
    },
    {
      img: "/piso-tetuan.jpg",
      title: "Loft en Chueca",
      details: "1 habitación · 1 baño · 55 m²",
      price: "320.000 €",
      description: "Loft de diseño en el vibrante barrio de Chueca."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg mr-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Rumalia</h1>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-sm text-gray-600">Hola, {user.email}</span>
            )}
            <button
              onClick={handleLogout}
              className="text-sm text-gray-600 hover:text-black border border-gray-300 px-3 py-1 rounded-full hover:border-black transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Menú lateral */}
      <>
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setSidebarOpen(false)}
        />
        <div className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
                <h2 className="text-xl font-bold">Rumalia</h2>
              </div>
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-2">
              <a 
                href="/" 
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Inicio
              </a>
              <a 
                href="/inmuebles" 
                className="flex items-center gap-3 px-4 py-3 text-gray-700 bg-gray-100 rounded-lg font-medium"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Inmuebles
              </a>
            </nav>
          </div>
        </div>
      </></header>

      {/* Contenido principal */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Todos nuestros inmuebles</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explora nuestra selección completa de propiedades en Madrid
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inmuebles.map((inmueble, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
                <img 
                  src={inmueble.img} 
                  alt={inmueble.title} 
                  className="w-full aspect-[4/3] object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{inmueble.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{inmueble.details}</p>
                  <p className="text-sm text-gray-700 mb-4">{inmueble.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">{inmueble.price}</p>
                    <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                      Ver detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-600 border-t mt-12 py-6 px-6 text-center bg-white">
        <p className="mb-2">
          <a href="/aviso-legal" className="hover:underline">Aviso Legal</a> |{" "}
          <a href="/privacidad" className="hover:underline">Política de Privacidad</a> |{" "}
          <a href="/cookies" className="hover:underline">Política de Cookies</a>
        </p>
        <p>&copy; {new Date().getFullYear()} Rumalia</p>
      </footer>
    </main>
  );
}