//imgs
import Back from "../assets/fondo adop.png";
import Dog from "../assets/Perros.png";
import Do from "../assets/perro.jpg";
import Ga from "../assets/gato.jpg";
//components
import { Carousel, Banner, Footer, Nav } from "./Components";

import Container from "@material-ui/core/Container";
function Adopt() {
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
    infobanner: {
      title: "Centro de adopción de mascotas",
      body:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    },
    perros: [
      {
        id: 12,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 22,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 14,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 34,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 44,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 54,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 74,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
      {
        id: 114,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
      },
    ],
    gatos: [
      {
        id: 12,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
      },
      {
        id: 22,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
      },
      {
        id: 32,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
      },
      {
        id: 42,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
      },
      {
        id: 43,
        nombre: "Gato",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Ga,
      },
    ],
    footer: {
      numero: "123456789",
      email: "corre@gmail.com",
      redso: [
        { red: "Facebook", url: "#" },
        { red: "Instagram", url: "#" },
      ],
    },
  };
  return (
    <div>
      <Nav menu={state.menu} />
      <Banner imgbanner={Back} pet={Dog} info={state.infobanner} />
      <Container maxWidth="xl" className="o-container">
        <Carousel title="juan" pets={state.perros} />
        <Carousel title="Gato" pets={state.gatos} />
      </Container>

      <Footer
        numers={state.footer.numero}
        email={state.footer.email}
        redso={state.footer.redso}
      />
    </div>
  );
}
export default Adopt;
