
//import imagenes
import BannerDoggo from "../../Assets/bannerdoggo.png";

//import componentes
import Header from "../Inicio/Header";
import Footer from "../Inicio/Footer";
import Banner from "../Inicio/Banner";


function Apadrinar(){
    
    let state = {
       
        menu: [
            {
              text: "Inicio",
              url: "/andres",
              active: false,
            },
            {
              text: "Registro",
              url: "/andres",
              active: false,
            },
            {
              text: "Adoptar",
              url: "/andres",
              active: false,
            },
            {
              text: "Apadrinar",
              url: "/andres",
              active: true,
            },
            {
              text: "Reportar",
              url: "/andres",
              active: false,
            },
            {
              text: "Perdida",
              url: "/andres",
              active: false,
            },
            {
              text: "Login",
              url: "/andres",
              active: false,
            },
          ],

          infobanner: {
            title: "Apadrina una mascota",
            body:
              "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
          },
       
        footer: {
            numero: "123456789",
            email: "corre@gmail.com",
            redso: [
              { red: "Facebook", url: "#" },
              { red: "Instagram", url: "#" },
            ],
          }
    };
    
    return(
        <div className="Apadrinar">

            <Header
                 menu={state.menu}
            />

            <Banner 
                imgbanner={BannerDoggo} 
                 info={state.infobanner} 

            />

            <Footer
                numbers={state.footer.numero}
                email={state.footer.email}
                redso={state.footer.redso}
            />
        </div>
        
        
    );
}

export default Apadrinar;