import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
import RegistroMascota from "../isabella/uno";
import Diego from "../diego/uno";
import Juan from "../juan/uno";
//import { Nav } from "../diego/components/Components";
function App() {
  /*let state = {
    menu: [
      {
        text: "Inicio",
        url: "/diego",
        active: false,
      },
      {
        text: "Registro",
        url: "/diego",
        active: false,
      },
      {
        text: "Adoptar",
        url: "/diego",
        active: true,
      },
      {
        text: "Apadrinar",
        url: "/diego",
        active: false,
      },
      {
        text: "Reportar",
        url: "/diego",
        active: false,
      },
      {
        text: "Perdida",
        url: "/diego",
        active: false,
      },
      {
        text: "Login",
        url: "/diego",
        active: false,
      },
    ],
  };*/
  //   <Nav menu={state.menu} />
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/andres">
            <Principal />
          </Route>
          <Route path="/juan">
            <Juan />
          </Route>
          <Route path="/diego">
            <Diego />
          </Route>
          <Route path="/isabella">
            <RegistroMascota />
          </Route>
          <Route path="/">
            <Principal />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
