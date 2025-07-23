
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, microsoftProvider } from './firebaseConfig';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Primero intentar con Firebase Auth
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(from, { replace: true });
    } catch (firebaseError) {
      // Si falla Firebase, intentar con el sistema local como fallback
      const existingUsers = JSON.parse(localStorage.getItem('rumalia_users') || '[]');
      const user = existingUsers.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (!user) {
        setError('Email o contraseña incorrectos');
      } else {
        localStorage.setItem('rumalia_current_user', JSON.stringify({
          id: user.id,
          email: user.email,
          provider: 'local'
        }));
        navigate(from, { replace: true });
      }
    }
    
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Error al iniciar sesión con Google: ' + error.message);
    }
    
    setLoading(false);
  };

  const handleMicrosoftLogin = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, microsoftProvider);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Error al iniciar sesión con Microsoft: ' + error.message);
    }
    
    setLoading(false);
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

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">o</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Iniciar sesión con Google</span>
        </button>

        <button
          onClick={handleMicrosoftLogin}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2 mt-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#F25022" d="M11.4 11.4H0V0h11.4v11.4z"/>
            <path fill="#00A4EF" d="M24 11.4H12.6V0H24v11.4z"/>
            <path fill="#7FBA00" d="M11.4 24H0V12.6h11.4V24z"/>
            <path fill="#FFB900" d="M24 24H12.6V12.6H24V24z"/>
          </svg>
          <span>Iniciar sesión con Microsoft</span>
        </button>

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
