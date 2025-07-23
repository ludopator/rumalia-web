
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/inmuebles';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Obtener usuarios registrados
    const existingUsers = JSON.parse(localStorage.getItem('rumalia_users') || '[]');
    
    // Buscar usuario
    const user = existingUsers.find(u => 
      u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      setError('Email o contraseña incorrectos');
      setLoading(false);
      return;
    }

    // Autenticar usuario
    localStorage.setItem('rumalia_current_user', JSON.stringify({
      id: user.id,
      email: user.email
    }));

    setLoading(false);
    navigate(from, { replace: true });
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Iniciar sesión</h1>
          <p className="text-gray-600">Accede a tu cuenta de Rumalia</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-black hover:underline font-semibold">
              Regístrate
            </Link>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-gray-600 hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
