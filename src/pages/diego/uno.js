import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./components/Adopt";
import Adopdog from "./components/Adopdog";
import Adepdogpet from "./components/Adopdogid";
import "./assets/css/index.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/diego/perro/adop" component={Adepdogpet} />
        <Route exact path="/diego/perro" component={Adopdog} />
        <Route exact path="/diego/gato" component={<div></div>} />
        <Route path="/" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
