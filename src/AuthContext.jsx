
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    // Limpiar también el localStorage para compatibilidad con autenticación anterior
    localStorage.removeItem('rumalia_current_user');
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      
      // Mantener sincronizado el localStorage para compatibilidad
      if (user) {
        localStorage.setItem('rumalia_current_user', JSON.stringify({
          id: user.uid,
          email: user.email,
          provider: user.providerData[0]?.providerId || 'email'
        }));
      } else {
        localStorage.removeItem('rumalia_current_user');
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
