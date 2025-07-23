
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registro from './Registro';
import Inmuebles from './Inmuebles';
import PrivateRoute from './PrivateRoute';
import AvisoLegal from './aviso-legal';
import PoliticaPrivacidad from './privacidad';
import PoliticaCookies from './cookies';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route 
          path="/inmuebles" 
          element={
            <PrivateRoute>
              <Inmuebles />
            </PrivateRoute>
          } 
        />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>
    </Router>
  );
}
