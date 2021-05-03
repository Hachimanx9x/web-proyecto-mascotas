import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./components/Adopt";
import "./assets/css/index.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/diego/perro" component={<div></div>} />
        <Route exact path="/diego/gato" component={<div></div>} />
        <Route path="/" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
