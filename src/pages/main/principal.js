import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
import RegistroMascota from "../isabella/uno";
import Diego from "../diego/uno";
import Juan from "../juan/uno";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/andres">         
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
  );
}

export default App;
