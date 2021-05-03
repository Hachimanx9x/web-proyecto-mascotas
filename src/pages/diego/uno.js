import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./components/Adopt";
import "./assets/css/index.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/ruta1">
          <Principal />
        </Route>
        <Route path="/">
          <Principal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
