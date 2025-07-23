
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Registro() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    // Validaciones básicas
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    // Obtener usuarios existentes
    const existingUsers = JSON.parse(localStorage.getItem('rumalia_users') || '[]');
    
    // Verificar si el email ya existe
    if (existingUsers.find(user => user.email === formData.email)) {
      setError('Este email ya está registrado');
      setLoading(false);
      return;
    }

    // Crear nuevo usuario
    const newUser = {
      id: Date.now(),
      email: formData.email,
      password: formData.password, // En producción esto estaría hasheado
      createdAt: new Date().toISOString()
    };

    // Guardar usuario
    existingUsers.push(newUser);
    localStorage.setItem('rumalia_users', JSON.stringify(existingUsers));

    // Autenticar automáticamente
    localStorage.setItem('rumalia_current_user', JSON.stringify({
      id: newUser.id,
      email: newUser.email
    }));

    setLoading(false);
    navigate('/inmuebles');
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Crear cuenta</h1>
          <p className="text-gray-600">Únete a Rumalia para acceder a todos los inmuebles</p>
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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/login" className="text-black hover:underline font-semibold">
              Inicia sesión
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
