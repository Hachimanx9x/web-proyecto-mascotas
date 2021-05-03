//imgs
import Back from "../assets/fondo adop.png";
import Dog from "../assets/Perros.png";
import Nav from "./nav";
import Banner from "./Banner";
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
  };
  return (
    <div>
      <Nav menu={state.menu} />
      <Banner imgbanner={Back} pet={Dog} info={state.infobanner} />
    </div>
  );
}
export default Adopt;
