
import { useState } from 'react';

export default function TwoFactorModal({ isOpen, onSubmit, onCancel, userEmail }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      setError('El código debe tener 6 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    
    // Por ahora aceptamos cualquier código de 6 dígitos
    setTimeout(() => {
      onSubmit(code);
      setLoading(false);
    }, 500);
  };

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            {/* Icono de aplicación de autenticación */}
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Verificación en dos pasos</h2>
          <p className="text-gray-600 text-sm">
            Introduce el código de verificación de tu aplicación de autenticación
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {userEmail}
          </p>
        </div>

        <div className="mb-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Google Authenticator, Authy o similar</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <div className="relative">
            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              placeholder="000000"
              className="w-full text-center text-2xl font-mono tracking-widest border-2 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              maxLength={6}
              autoFocus
            />
            <div className="text-xs text-gray-500 text-center mt-2">
              Código de 6 dígitos
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition"
              disabled={loading}
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading || code.length !== 6}
              className="flex-1 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verificando...' : 'Verificar'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            ¿Problemas para acceder? 
            <button className="text-blue-600 hover:underline ml-1">
              Contacta con soporte
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
