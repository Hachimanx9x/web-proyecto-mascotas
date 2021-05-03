import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../juan/Components/Login";
import Perdida from "../juan/Components/RPerdida";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/juan/Perdida">
            <Perdida />
        </Route>
        <Route path="/juan/Login">
            <Login />
        </Route>
        <Route path="/">
          <div>
            <a href="/juan/Login">Login en desarrollo</a>
            <a href="/juan/Perdida">Perdida en desarrollo</a>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
