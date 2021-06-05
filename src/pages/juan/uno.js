import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../juan/Components/Login";
import Perdida from "../juan/Components/RPerdida";
import Maltrato from "../juan/Components/RMaltrato";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/juan/Maltrato">
          <Maltrato />
        </Route>
        <Route exact path="/juan/Perdida">
          <Perdida />
        </Route>
        <Route exact path="/juan/Login">
          <Login />
        </Route>
        <Route path="/">
          <div>
            <a href="/juan/Login">Login</a>
            <a href="/juan/Perdida">Perdida</a>
            <a href="/juan/Maltrato">Maltrato</a>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
