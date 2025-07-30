
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, microsoftProvider, yahooProvider, appleProvider } from './firebaseConfig';

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

  const handleSubmit = async (e) => {
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

    try {
      // Crear usuario con Firebase Auth
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/inmuebles');
    } catch (firebaseError) {
      // Si falla Firebase, usar el sistema local como fallback
      const existingUsers = JSON.parse(localStorage.getItem('rumalia_users') || '[]');
      
      if (existingUsers.find(user => user.email === formData.email)) {
        setError('Este email ya está registrado');
      } else {
        const newUser = {
          id: Date.now(),
          email: formData.email,
          password: formData.password,
          createdAt: new Date().toISOString()
        };

        existingUsers.push(newUser);
        localStorage.setItem('rumalia_users', JSON.stringify(existingUsers));
        localStorage.setItem('rumalia_current_user', JSON.stringify({
          id: newUser.id,
          email: newUser.email,
          provider: 'local'
        }));

        navigate('/inmuebles');
      }
    }
    
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/inmuebles');
    } catch (error) {
      setError('Error al registrarse con Google: ' + error.message);
    }
    
    setLoading(false);
  };

  const handleMicrosoftSignup = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, microsoftProvider);
      navigate('/inmuebles');
    } catch (error) {
      setError('Error al registrarse con Microsoft: ' + error.message);
    }
    
    setLoading(false);
  };

  const handleYahooSignup = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, yahooProvider);
      navigate('/inmuebles');
    } catch (error) {
      setError('Error al registrarse con Yahoo: ' + error.message);
    }
    
    setLoading(false);
  };

  const handleAppleSignup = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithPopup(auth, appleProvider);
      navigate('/inmuebles');
    } catch (error) {
      setError('Error al registrarse con Apple: ' + error.message);
    }
    
    setLoading(false);
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

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">o</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Registrarse con Google</span>
        </button>

        <button
          onClick={handleMicrosoftSignup}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2 mt-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#F25022" d="M11.4 11.4H0V0h11.4v11.4z"/>
            <path fill="#00A4EF" d="M24 11.4H12.6V0H24v11.4z"/>
            <path fill="#7FBA00" d="M11.4 24H0V12.6h11.4V24z"/>
            <path fill="#FFB900" d="M24 24H12.6V12.6H24V24z"/>
          </svg>
          <span>Registrarse con Microsoft</span>
        </button>

        <button
          onClick={handleYahooSignup}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2 mt-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#720E9E" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 7.178l-2.24 2.652c.402.402.64.954.64 1.563 0 1.225-.992 2.217-2.217 2.217s-2.217-.992-2.217-2.217c0-.609.238-1.161.64-1.563l-2.24-2.652c-.238.238-.476.476-.595.834-.238.715-.238 1.43 0 2.145.119.358.357.596.595.834l2.24-2.652c-.402-.402-.64-.954-.64-1.563 0-1.225.992-2.217 2.217-2.217s2.217.992 2.217 2.217c0 .609-.238 1.161-.64 1.563l2.24 2.652c.238-.238.476-.476.595-.834.238-.715.238-1.43 0-2.145-.119-.358-.357-.596-.595-.834z"/>
          </svg>
          <span>Registrarse con Yahoo</span>
        </button>

        <button
          onClick={handleAppleSignup}
          disabled={loading}
          className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition disabled:opacity-50 flex items-center justify-center space-x-2 mt-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#000000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span>Registrarse con Apple</span>
        </button>

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
