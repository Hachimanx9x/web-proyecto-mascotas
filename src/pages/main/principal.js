import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
import RegistroMascota from "../isabella/RegistroMascota";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/campeta">
          <RegistroMascota />
        </Route>
      <Route path="/juan">
          <RegistroMascota />
        </Route>
      <Route path="/diego">
          <RegistroMascota />
        </Route>
      <Route path="/isabella">
          <RegistroMascota />
        </Route>
        <Route path="/">
          <Principal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
