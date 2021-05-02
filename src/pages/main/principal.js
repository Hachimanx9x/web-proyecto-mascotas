import { BrowserRouter, Route, Switch } from "react-router-dom";
import Principal from "../andres/uno";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Principal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
