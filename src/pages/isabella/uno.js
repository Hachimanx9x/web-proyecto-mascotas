import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegistroMascotaAbandonada from "./RegistroMascota";
function App() {
  return (
    <BrowserRouter>
      <Switch>
   
        <Route path="/"  >
          <RegistroMascotaAbandonada />
        </Route>
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
