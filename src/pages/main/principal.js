import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
import Cuenta from "../isabella/Cuenta";
function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/campeta">
          <Cuenta />
        </Route>
      <Route path="/juan">
          <Cuenta />
        </Route>
      <Route path="/diego">
          <Cuenta />
        </Route>
      <Route path="/isabella">
          <Cuenta />
        </Route>
        <Route path="/">
          <Principal />
        </Route>
     
      </Switch>
    </BrowserRouter>
  );
}

export default App;
