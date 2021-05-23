//img
import Back from "../assets/backcat.png";
import Dog from "../assets/cat.png";
import Ga from "../assets/gato.jpg";
//components
import { Carousel, Banner, Footer, Nav, Info } from "./Components";
//Material UI
import Container from "@material-ui/core/Container";
export default function AdopDog() {
  let state = {
    menu: [
      {
        text: "Inicio",
        url: "/diego",
        active: false,
      },
      {
        text: "Registro",
        url: "/diego",
        active: false,
      },
      {
        text: "Adoptar",
        url: "/diego",
        active: true,
      },
      {
        text: "Apadrinar",
        url: "/diego",
        active: false,
      },
      {
        text: "Reportar",
        url: "/diego",
        active: false,
      },
      {
        text: "Perdida",
        url: "/diego",
        active: false,
      },
      {
        text: "Login",
        url: "/diego",
        active: false,
      },
    ],

    gatos: [
      {
        id: 12,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
        url: "/diego/gato",
        urla: "/diego/gato/adop",
      },
      {
        id: 22,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
        url: "/diego/gato",
        urla: "/diego/gato/adop",
      },
      {
        id: 32,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
        url: "/diego/gato",
        urla: "/diego/gato/adop",
      },
      {
        id: 42,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
        url: "/diego/gato",
        urla: "/diego/gato/adop",
      },
      {
        id: 43,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
        url: "/diego/gato",
        urla: "/diego/gato/adop",
      },
    ],
    infobanner: {
      title: "Centro de adopción de mascotas",
      body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    },

    form: {
      img: Ga,
      data: {
        name: "juan",
        sex: "Hembra",
        age: "13",
        race: "Desconocida",
        size: "Grande",
        weight: 14,
        character: "Amable y energica",
      },
      url: "/diego/perro/adop",
    },
    appointment: {
      msj: "5/05/2021 de 10am a 12pm",
      yields: "Centrar",
    },
  };
  return (
    <div>
      <Nav menu={state.menu} />
      <Banner imgbanner={Back} pet={Dog} info={state.infobanner} />
      <Container maxWidth="xl" className="o-container">
        <Carousel title="juan" pets={state.gatos} />
        <Info pet={state.form} data={state.appointment} />
      </Container>
      <Footer />
    </div>
  );
}
