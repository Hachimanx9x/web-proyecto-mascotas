import React from "react";
import "../Styles/StyleLogin.css";
import Img from "../Assets/Perros.svg";
import Img2 from "../Assets/Perros.svg";

import { Footer, Nav } from "../../diego/components/Components";
import Banner from "../Components/Banner";
import FormularioReporte from "../Components/FormularioReporte";

export default function Perdida() {
  let states = {
    Banner: {
      titulo: "Reporte de perdida",
      texto:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.",
    },
    Formulario: {
      titulo: "Reporte de perdida",
      texto: "¡Gracias por ayudarnos a buscar!",
    },
    menu: [
      {
        text: "Inicio",
        url: "/juan",
        active: false,
      },
      {
        text: "Registro",
        url: "/juan",
        active: false,
      },
      {
        text: "Adoptar",
        url: "/juan",
        active: false,
      },
      {
        text: "Apadrinar",
        url: "/juan",
        active: false,
      },
      {
        text: "Reportar",
        url: "/juan",
        active: false,
      },
      {
        text: "Perdida",
        url: "/juan",
        active: true,
      },
      {
        text: "Login",
        url: "/juan",
        active: false,
      },
    ],
  };


  return (
    <div className="o-PerdidaContainer">

      <Nav menu={states.menu}> </Nav>

      <Banner
        perro={Img}
        fondo="#22262A"
        titulo={states.Banner.titulo}
        texto={states.Banner.texto}
      />

      <FormularioReporte
        perfilimg={Img2}
        colorboton="#22262A"
        titulo={states.Formulario.titulo}
        texto={states.Formulario.texto}
      />

      <Footer></Footer>
      
    </div>
  );
}
