
/*
//importar imagenes
import paw from "./Assets/pawprint1.png";


//importar componentes
import Header from "./Components//Inicio/Header";

function App() {  
  return(
    <div className="Inicio">
      <Header
        img={paw}
        option1="Inicio"
        option2="Registro"
        option3="Adoptar"
        option4="Apadrinar"
        option5="Reportar"
      />


    </div>
  )
  
}
*/
import Inicio from "./Components/Inicio/Inicio";
import Apadrinar from "./Components/Apadrinar/Apadrinar";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/andres/Apadrinar" component={Apadrinar} />
        <Route path="/" component={Inicio} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;