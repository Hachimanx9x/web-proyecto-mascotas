import React from "react";
import "../Styles/StyleMaltrato.css";
import Img from "../Assets/perroBanner.svg";
import Img2 from "../Assets/Evidencias.svg";
import Img3 from "../Assets/subir.svg";

//componentes
import { Footer, Nav } from "../../diego/components/Components";
import Banner from "../Components/Banner";
import FormularioReporte from "../Components/FormularioReporte";

export default function Maltrato() {
  let states = {
    Banner: {
      titulo: "Reporte de maltrato",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
    },
    Formulario: {
      titulo: "Formulario de maltrato",
      texto: "¡Gracias por ayudarnos a denunciar!",
    },
    menu: [
      {
        text: "Inicio",
        url: "/",
        active: false,
      },
      {
        text: "Registro",
        url: "/isabella/RegistroMascota",
        active: false,
      },
      {
        text: "Adoptar",
        url: "/diego/adop",
        active: false,
      },
      {
        text: "Apadrinar",
        url: "/andres/apadrinar",
        active: false,
      },
      {
        text: "Reportar",
        url: "/juan/Maltrato",
        active: true,
      },
      {
        text: "Perdida",
        url: "/juan/Perdida",
        active: false,
      },
      {
        text: "Login",
        url: "/juan/Login",
        active: false,
      },
    ],
  };

  return (
    <div className="o-MaltratoContainer">
      <Nav menu={states.menu}> </Nav>

      <Banner
        perro={Img}
        fondo="#22262A"
        titulo={states.Banner.titulo}
        texto={states.Banner.texto}
      />

      <FormularioReporte
        perfilimg={Img2}
        icon={Img3}
        colorboton="#22262A"
        titulo={states.Formulario.titulo}
        texto={states.Formulario.texto}
      />

      <Footer></Footer>
    </div>
  );
}
