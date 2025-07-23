
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { currentUser } = useAuth();
  
  // También verificar localStorage para compatibilidad con sistema anterior
  const localUser = localStorage.getItem('rumalia_current_user');

  if (!currentUser && !localUser) {
    // Redirigir a login guardando la ubicación actual
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
