//img
import Back from "../assets/fondo adop.png";
import Dog from "../assets/Perros.png";
import Do from "../assets/perro.jpg";
//components
import { Carousel, Banner, Footer, Nav, Info } from "./Components";
//Material UI
import Container from "@material-ui/core/Container";
export default function AdopDog() {
  let state = {
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
        active: true,
      },
      {
        text: "Apadrinar",
        url: "/andres/apadrinar",
        active: false,
      },
      {
        text: "Reportar",
        url: "/juan/Maltrato",
        active: false,
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

    perros: [
      {
        id: 12,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 22,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 14,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 34,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 44,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 54,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 74,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
      {
        id: 114,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
      },
    ],
    infobanner: {
      title: "Centro de adopci??n de mascotas",
      body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est??ndar de las industrias desde el a??o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us?? una galer??a de textos y los mezcl?? de tal manera que logr?? hacer un libro de textos especimen. No s??lo sobrevivi?? 500 a??os, sino que tambien ingres?? como texto de relleno en documentos electr??nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci??n de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y m??s recientemente con software de autoedici??n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    },

    form: {
      img: Do,
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
        <Carousel title="juan" pets={state.perros} />
        <Info pet={state.form} data={state.appointment} />
      </Container>
      <Footer />
    </div>
  );
}
