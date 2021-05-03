import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
import Diego from "../diego/uno";
import Cuenta from "../isabella/Cuenta";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/isabella">
          <Cuenta />
        </Route>
        <Route path="/andres">
          <Cuenta />
        </Route>
        <Route path="/diego">
          <Diego />
        </Route>
        <Route path="/juan">
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
