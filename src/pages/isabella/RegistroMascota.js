import React from "react";
import ImagePerroAbandonado from "../../assets/img/perroabandonado.png";
import ImageCamara from "../../assets/img/camara.png";
import ImageSubir from "../../assets/img/subir.png";
import {Nav} from "../diego/components/Components";
import Banneropciones from "./BannerOpciones";
import ImgPerro from "../../assets/img/perrohappy.png";
import Footer from "./Footer";
import "./stylecomponets.css"

const RegistroMascotaAbandonada = () => (

    <div className="ig-RME">
        <Nav menu={
            [
                {
                  text: "Inicio",
                  url: "/diego",
                  active: false,
                },
                {
                  text: "Registro",
                  url: "/diego",
                  active: true,
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

        <Banneropciones 
        imgbanner={ImgPerro}
        titulo="Registro de mascota encontrada"
        descrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.when an unknown printer
         took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
           popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        colorfondo="#4587FF"
        altimg="perro-feliz"   />

    <div className="ig-registro-mascota-encontrada">
        <h5>¡Gracias por encontarla!</h5>
        <h1>Registra a la mascota encontrada</h1>

        <div className="i-fomulario-mascota-encontrada">
                <div class="i-datos-mascota-encontrada">

       
                  
                        <div className="i-img-mascota-encontrada">
                            <img src={ImagePerroAbandonado} alt="" />
                                <div className="i-iconos-mascota-encontrada">
                                    <img src={ImageCamara} alt="" />
                                    <img src={ImageSubir} alt=""/>
                                </div>
                         </div>

                         <div className="i-datos-lado-mascota-encontrada">

                        <label  className="i-datos-texto-mascota-encontrada"  for="fnombre">Especie <div className="tooltip">*<span className="tooltiptext">Escriba la especie del animal encontrado (ejemplo: perro, gato, ave, etc.)</span></div> :</label>
                        <input className="i-caja-mascota-mencontrada"  type="text" name="especie" id="especiea" /> 
                      
                        <div className="i-btn-seleccion">
                            <input className="i-btn-check" type="checkbox" name="sexo" value="H" />  <p>Hembra</p> 
                            <input className="i-btn-check" type="checkbox" name="sexo" value="M" />  <p> Macho</p>
                        </div>

                        <label  className="i-datos-texto-mascota-encontrada"  for="fnombre">Fecha de hallazgo<a href="./">(DD/MM/AA)</a>:</label>
                        <input className="i-caja-mascota-mencontrada"  type="date" name="fecha" id="fechaid" /> 

                    </div> 

                        </div>

                        <div className="i-informacion-contenedo-mascota-encontrada">

                                <div className="i-informacion-zona">
                                <label  className="i-datos-texto-mascota-encontrada"  for="fnombre">Departamento<a href="./">*</a>:</label>
                                <input className="i-caja-datos-zona"  type="text" name="especie" id="especiea" /> 

                                <label  className="i-datos-texto-mascota-encontrada"  for="fnombre">Ciudad<a href="./">*</a>:</label>
                                <input className="i-caja-datos-zona"  type="text" name="especie" id="especiea" /> 

                                </div>
                                <label  className="i-datos-texto-mascota-encontrada"  for="fnombre">Descripción<a href="./">*</a>:</label>
                                <textarea id="subject" name="subject" placeholder="" ></textarea>

                                </div>
                                <div className="i-boton-registart">
                                <input className="i-btn-registrar" type="submit" value="Registrar"/>
                                </div>
                                </div>

                                <Footer />

                        


    </div>
    </div>

    );

export default RegistroMascotaAbandonada;