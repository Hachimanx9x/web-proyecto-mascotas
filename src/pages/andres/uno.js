

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

export default App;
