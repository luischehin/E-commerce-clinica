import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarr from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Carrousel from './components/carrousel/Carrousel';
import Turnos from './components/sacarturno/SacarTurno';
import Footer from './components/footer/Footer';
import Register from './components/register/Register'; // Importa el componente de registro

function App() {
  return (
    <Router>
      <Navbarr />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/carrousel">
          <Carrousel />
        </Route>
        <Route path="/turnos">
          <Turnos />
        </Route>
        <Route path="/register"> {/* Define la ruta para la página de registro */}
          <Register />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
