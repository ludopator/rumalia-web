import { useState } from 'react';

export default function Home() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [user, setUser] = useState(null); // Assuming null means no user is logged in

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
    };
    try {
      await fetch("https://rumalia.app.n8n.cloud/webhook-test/d367404b-6f53-4e08-a6b1-26ae176664fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setShowSnackbar(true);
      e.target.reset();
      setTimeout(() => setShowSnackbar(false), 4000);
    } catch (error) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
    }
  };

  const handleLogout = () => {
    // Clear user data from localStorage or wherever it's stored
    setUser(null);
  };

  return (
    <>
      {/* Header con navegación */}
      <header className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Rumalia</h1>
          </div>

          <nav className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Hola, {user.email}</span>
                <a 
                  href="/inmuebles" 
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Inmuebles
                </a>
                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-600 hover:text-black border border-gray-300 px-3 py-1 rounded-full hover:border-black transition"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <a 
                  href="/login" 
                  className="text-sm text-gray-600 hover:text-black"
                >
                  Iniciar sesión
                </a>
                <a 
                  href="/registro" 
                  className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
                >
                  Registrarse
                </a>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-white text-black font-sans">
        <section className="text-center py-12 px-6">
          <h2 className="text-4xl font-bold mb-4">Conecta con tu agente inmobiliario en Madrid</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            En Rumalia te ayudamos a comprar o vender tu vivienda con atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto w-full">
            <a href="#agente" className="flex-1 text-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Contactar</a>
            <a href="/inmuebles" className="flex-1 text-center border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">Ver inmuebles</a>
          </div>
        </section>

<section id="agente" className="py-12 px-6 max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4 text-center">Habla con un agente</h3>
          <p className="text-gray-700 mb-6 text-center">Rellena el formulario y te contactaremos lo antes posible.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="nombre" type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded-xl" required />
            <input name="email" type="email" placeholder="Correo electrónico" className="w-full border px-4 py-2 rounded-xl" required />
            <input name="telefono" type="tel" placeholder="Teléfono" className="w-full border px-4 py-2 rounded-xl" />
            <textarea name="mensaje" placeholder="¿En qué podemos ayudarte?" className="w-full border px-4 py-2 rounded-xl" rows={4}></textarea>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition" type="submit">Enviar</button>
          </form>
        </section>

{showSnackbar && (
  <div className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow z-50 transition-all duration-500 ease-in-out bg-green-500 text-white">
    ✉️ Tu mensaje ha sido enviado. Te contactaremos en breve.
  </div>
)}

</main>

      <div className={`fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow z-50 transition-all duration-500 ease-in-out ${showSnackbar ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}></div>
      <footer className="text-sm text-gray-600 border-t mt-12 py-6 px-6 text-center bg-white">
        <p className="mb-2">
          <a href="/aviso-legal" className="hover:underline">Aviso Legal</a> |{" "}
          <a href="/privacidad" className="hover:underline">Política de Privacidad</a> |{" "}
          <a href="/cookies" className="hover:underline">Política de Cookies</a>
        </p>
        <p>&copy; {new Date().getFullYear()} Rumalia</p>
      </footer>

<a
  href="https://wa.me/34644494617"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 md:hidden"
  aria-label="Contactar por WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5">
    <path d="M380.9 97.1C339 55.2 283.5 32 224.4 32c-105.9 0-192 86.1-192 192 0 33.7 8.8 66.5 25.5 95.5L32 480l165.5-25.8c27.7 15.1 58.8 23 91 23h.1c105.9 0 192-86.1 192-192 0-59.1-23.1-114.6-65.1-156.6zM224.4 438.5c-28.3 0-56.1-7.6-80.2-22l-5.7-3.4-98.2 15.3 15.7-95.5-3.7-5.9c-15.8-24.8-24.1-53.5-24.1-83 0-88.4 71.9-160.3 160.3-160.3 42.8 0 83 16.7 113.2 47 30.2 30.2 47 70.4 47 113.2 0 88.3-71.9 160.2-160.3 160.2z"/>
  </svg>
</a>

</>
  );
}