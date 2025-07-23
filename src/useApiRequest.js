
import { useAuth } from './AuthContext';

export function useApiRequest() {
  const { accessToken, refreshToken, logout } = useAuth();

  const makeRequest = async (url, options = {}) => {
    let token = accessToken;
    
    // Si no hay token, intentar refrescarlo
    if (!token) {
      token = await refreshToken();
    }
    
    // Si aún no hay token, el usuario no está autenticado
    if (!token) {
      throw new Error('Usuario no autenticado');
    }

    const requestOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, requestOptions);
      
      // Si el token ha expirado (401), intentar refrescarlo
      if (response.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          // Reintentar la petición con el nuevo token
          requestOptions.headers.Authorization = `Bearer ${newToken}`;
          return await fetch(url, requestOptions);
        } else {
          // Si no se puede refrescar, cerrar sesión
          await logout();
          throw new Error('Sesión expirada');
        }
      }
      
      return response;
    } catch (error) {
      console.error('Error en la petición:', error);
      throw error;
    }
  };

  return { makeRequest };
}
