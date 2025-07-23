
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const currentUser = localStorage.getItem('rumalia_current_user');

  if (!currentUser) {
    // Redirigir a login guardando la ubicación actual
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
