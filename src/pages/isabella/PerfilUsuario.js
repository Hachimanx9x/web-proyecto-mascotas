import React from "react";
import {Nav} from "../diego/components/Components";
import CardPU from "./CardPU";
import Pelos from "../../assets/img/pelos.png"
import Avatar from "../../assets/svg/avatar/avatarperro.svg"
import Huella from "../../assets/img/huella1.png"
import "./stylecomponetsGlobal.css"


export default function PerfilUsuario ({nomusuario,avatar,altavatar}) {
    return(
        <div className="ig-perfilU">
            <div>
            <Nav menu={
            [
                {
                  text: "Inicio",
                  url: "/diego",
                  active: true,
                },
                {
                  text: "Registro",
                  url: "/diego",
                  active: false,
                },
                {
                  text: "Adoptar",
                  url: "/diego",
                  active: false,
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
              ]
        } />
                
            </div>

            <div className="ig-info-usuario"> 
            <div className="ig-datos-usuario">
                <div className="ig-datos-usuario-avatar" > <img src={Avatar} alt="avatar de perro" /> </div>
                
                <h3>{nomusuario="jjmanuel026"}</h3>
                <h4>Calificación de huellas:
                    <div className="ig-datos-usuario-huellas"> <img src={Huella} alt="huella punto" />
                    <img src={Huella} alt="huella punto" />
                    <img src={Huella} alt="huella punto" />
                    <img src={Huella} alt="huella punto" />
                     </div> 
                 </h4>
            </div>
            <div className="ig-cont-mascotasusarios">
                <div>
                <h3>Mascotas Apadrinadas:</h3>
                <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645"/>
                </div>
                <div>
                <h3>Mascotas Registradas:</h3>
                <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645"/>
                </div>
                <div>
                <h3>Mascotas Adoptadas:</h3>
                <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645"/>
                </div>
            </div>
                
            </div>

        </div>
    );
     
}