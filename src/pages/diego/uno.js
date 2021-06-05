import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "./components/Adopt";
import Adopdog from "./components/Adopdog";
import Adopcat from "./components/Adopcat";
import Adepdogpet from "./components/Adopdogid";
import Adepcatpet from "./components/Adopcatid";
import "./assets/css/index.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/diego/perro/adop" component={Adepdogpet} />
        <Route exact path="/diego/gato/adop" component={Adepcatpet} />
        <Route exact path="/diego/perro" component={Adopdog} />
        <Route exact path="/diego/gato" component={Adopcat} />
        <Route exact path="/diego/adop" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
