
import Inicio from "./Components/Inicio/Inicio";
import Apadrinar from "./Components/Apadrinar/Apadrinar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./Assets/css/banner.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/andres/apadrinar" component={Apadrinar} />
        <Route path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;