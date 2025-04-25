
import { useState } from 'react';

export default function Home() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      mensaje: e.target.mensaje.value,
    };
    try {
      await fetch("https://hook.eu1.make.com/8kbck0qr9g5f59vx2r32qs6sfiwryy3b", {
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

  return (
    <>
      <main className="min-h-screen bg-white text-black font-sans">
        <header className="p-4 flex items-center gap-2 shadow-sm bg-white">
          <img src="/icon-rumalia.png" alt="Rumalia icon" className="w-6 h-6" />
          <h1 className="text-xl font-semibold tracking-tight">Rumalia</h1>
        </header>

        <section className="text-center py-12 px-6">
          <h2 className="text-4xl font-bold mb-4">Conecta con tu agente inmobiliario en Madrid</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            En Rumalia te ayudamos a vender o alquilar tu vivienda con atención personalizada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto w-full">
            <a href="#agente" className="flex-1 text-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Contactar</a>
            <a href="#inmuebles" className="flex-1 text-center border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">Ver inmuebles</a>
          </div>
        </section>

        
        <section id="inmuebles" className="py-12 px-6">
  <h3 className="text-3xl font-semibold mb-6 text-center">Inmuebles destacados</h3>
  <div className="flex overflow-x-auto snap-x scroll-smooth gap-6 max-w-6xl mx-auto px-2">
    {[
      {
        img: "/piso-chamberi.jpg",
        title: "Piso en Chamberí",
        details: "2 habitaciones · 1 baño · 74 m²",
        price: "390.000 €"
      },
      {
        img: "/piso-salamanca.jpg",
        title: "Ático en Salamanca",
        details: "3 habitaciones · 2 baños · 120 m²",
        price: "720.000 €"
      },
      {
        img: "/piso-tetuan.jpg",
        title: "Estudio en Tetuán",
        details: "1 habitación · 1 baño · 45 m²",
        price: "195.000 €"
      }
    ].map((piso, i) => (
      <div key={i} className="min-w-[80%] md:min-w-[30%] snap-start shrink-0 rounded-3xl overflow-hidden shadow bg-white">
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
      </main>

      <div className={`fixed top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl shadow z-50 transition-all duration-500 ease-in-out ${showSnackbar ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>✉️ Tu mensaje ha sido enviado. Te contactaremos en breve.</div>
      {showSnackbar && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-xl shadow z-50">
          ✉️ Tu mensaje ha sido enviado. Te contactaremos en breve.
        </div>
      )}

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
