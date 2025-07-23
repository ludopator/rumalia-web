
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut, getIdToken } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(null);

  const logout = () => {
    // Limpiar tokens y datos del usuario
    localStorage.removeItem('rumalia_current_user');
    localStorage.removeItem('rumalia_access_token');
    setAccessToken(null);
    return signOut(auth);
  };

  const refreshToken = async () => {
    if (currentUser) {
      try {
        const token = await getIdToken(currentUser, true);
        setAccessToken(token);
        localStorage.setItem('rumalia_access_token', token);
        return token;
      } catch (error) {
        console.error('Error al refrescar token:', error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          // Obtener token de acceso
          const token = await getIdToken(user);
          setAccessToken(token);
          
          // Guardar datos del usuario y token
          const userData = {
            id: user.uid,
            email: user.email,
            provider: user.providerData[0]?.providerId || 'email',
            lastLogin: new Date().toISOString()
          };
          
          localStorage.setItem('rumalia_current_user', JSON.stringify(userData));
          localStorage.setItem('rumalia_access_token', token);
          
          // Configurar renovación automática del token cada 50 minutos
          const tokenInterval = setInterval(async () => {
            await refreshToken();
          }, 50 * 60 * 1000); // 50 minutos
          
          // Limpiar intervalo cuando el usuario se desconecte
          return () => clearInterval(tokenInterval);
          
        } catch (error) {
          console.error('Error al obtener token:', error);
        }
      } else {
        // Usuario no autenticado, limpiar datos
        localStorage.removeItem('rumalia_current_user');
        localStorage.removeItem('rumalia_access_token');
        setAccessToken(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Verificar token al cargar la aplicación
  useEffect(() => {
    const storedToken = localStorage.getItem('rumalia_access_token');
    if (storedToken && !accessToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const value = {
    currentUser,
    accessToken,
    logout,
    refreshToken
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
