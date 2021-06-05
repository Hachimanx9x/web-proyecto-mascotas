//img
import Back from "../assets/fondo adop.png";
import Dog from "../assets/Perros.png";
import Do from "../assets/perro.jpg";
//components
import { Carousel, Banner, Footer, Nav, Form } from "./Components";
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
        urla: "/diego/perro/adop",
      },
      {
        id: 22,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 14,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 34,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 44,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 54,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 74,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
      {
        id: 114,
        nombre: "perro",
        descripcion:
          "Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. ",
        img: Do,
        url: "/diego/perro",
        urla: "/diego/perro/adop",
      },
    ],
    infobanner: {
      title: "Centro de adopción de mascotas",
      body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
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
  };
  return (
    <div>
      <Nav menu={state.menu} />
      <Banner
        imgbanner={Back}
        pet={Dog}
        info={state.infobanner}
        direction="left"
      />
      <Container maxWidth="xl" className="o-container">
        <Carousel title="juan" pets={state.perros} />
        <Form
          img={state.form.img}
          data={state.form.data}
          url={state.form.url}
        />
      </Container>
      <Footer />
    </div>
  );
}
