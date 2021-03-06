//import imagenes
import BannerDoggo from "../../Assets/bannerdoggo.png";
import gato2 from "../../Assets/cat.png";
import noticia1 from "../../Assets/noticia1.png";
import noticia2 from "../../Assets/noticia2.png";
import noticia3 from "../../Assets/noticia3.png";

//import componentes
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Objetivos from "./Objetivos";
import { Map, DataPoint } from "../../../diego/components/Components";
import Noticias from "./Noticias";

function Inicio() {
  const array = [
    "Crear conciencia social en la comunidad  sobre la tenencia responsable de mascotas.",
    "Proteger y defender a los animales maltratados y/o abandonados, brindándoles en nuestro centro de adopción, un hogar de paso.",
  ];

  const SlideNoticias = [
    { img: noticia3 },
    { img: noticia1 },
    { img: noticia2 },
  ];

  let state = {
    menu: [
      {
        text: "Inicio",
        url: "/",
        active: true,
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

    infobanner: {
      title: "Centro de adopción de mascotas",
      body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    },

    footer: {
      numero: "123456789",
      email: "correo@gmail.com",
      redso: [
        { red: "Facebook", url: "#" },
        { red: "Instagram", url: "#" },
      ],
    },
  };

  return (
    <div className="Inicio">
      <Header menu={state.menu} />

      <Banner imgbanner={BannerDoggo} info={state.infobanner} />
      <div className="OBJ">
        {array.map((ele, i) => (
          <Objetivos key={i} img={gato2} text={ele} />
        ))}
      </div>
      <div className="Noticias">
        <Noticias img={SlideNoticias} />
      </div>
      <div
        className="flex-container"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Map width="70rem" height="25rem" />

        <div
          style={{
            width: "25rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DataPoint
            DatePoint
            className="o-pet-id"
            hour="10 A.M. a 6 P.M."
            address="Calle 1 con carrera 7"
          />
        </div>
      </div>
      <Footer
        numbers={state.footer.numero}
        email={state.footer.email}
        redso={state.footer.redso}
      />
    </div>
  );
}

export default Inicio;
