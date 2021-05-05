import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cuenta from  "./Cuenta";
import RegistroMascotaAbandonada from "./RegistroMascota";
import PerfilUsuario from "./PerfilUsuario";
import Carrusel from "./Carrusel";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/isabella/Carrusel"  >
          <Carrusel />
        </Route>
      <Route exact path="/isabella/PerfilU"  >
          <PerfilUsuario />
        </Route>
      <Route exact path="/isabella/Cuenta"  >
          <Cuenta />
        </Route>
      <Route path="/isabella/RegistroMascota"  >
          <RegistroMascotaAbandonada />
        </Route>
   
        <Route path="/"  >
          <RegistroMascotaAbandonada />
        </Route>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
