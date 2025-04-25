import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AvisoLegal from './aviso-legal';
import PoliticaPrivacidad from './privacidad';
import PoliticaCookies from './cookies';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/cookies" element={<PoliticaCookies />} />
      </Routes>
    </Router>
  );
}
