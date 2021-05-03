import React from "react";
import ImagePerroAbandonado from "../../assets/img/perroabandonado.png";
import ImageCamara from "../../assets/img/camara.png";
import ImageSubir from "../../assets/img/subir.png";
import Footer from "./Footer";
import "./stylecomponets.css"

const RegistroMascotaAbandonada = () => (
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

    );

export default RegistroMascotaAbandonada;