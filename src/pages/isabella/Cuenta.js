import React from "react";
import ImgperroCuenta from "../../assets/img/perroRegistro.png";
import "./stylecomponets.css"

const Cuenta = () => (
    <div className="ig-cuenta">
        <div className="ig-formulario-registro-banner"> 
            <img src={ImgperroCuenta} alt="perro registro"/>
        </div>
        <div className="i-formulario-registro">
        <h5>¡Haz parte de la iniciativa!</h5>
        <h1>Crea una cuenta</h1>
        <div className="i-datos-formularios">
           <label className="i-texto-datos" for="fnombre" >Nombre de usuario <a href="./">*</a>:</label>
           <input className="i-caja-texto" type="text" name="nombreusuario" id="nombreu" />

           <label  className="i-texto-datos"  for="fcorreo">Dirección de correo electrónico<a href="./">*</a>:</label>  
           <input className="i-caja-texto"  type="text" name="correo" id="correou" />

           <label  className="i-texto-datos"  for="fnombre">Contraseña <a href="./">*</a>:</label>
           <input className="i-caja-texto"  type="text" name="contraseña" id="contraseñau" />  
           <p>Asegúrese de que tenga al menos 15 caracteres O al menos 8 caracteres, incluido un número y una letra minúscula.</p>

           <div className="i-btn-seleccion">
                <input class="i-btn-check" type="checkbox" name="politicas" value="pyp" /> 
                <p>Acepto las <a href="./">políticas de privacidad</a></p> 
            </div>

            <div className="i-btn-seleccion">
                <input className="i-btn-check" type="checkbox" name="info" value="infoservicio" />  <p> Deseo recibir información de los eventos y servicios.</p>
            </div>
            <input className="i-btn-enviar" type="submit" value="Enviar"></input>


        </div>
        </div>

       
    </div>
);

export default Cuenta;