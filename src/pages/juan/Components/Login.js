import React from 'react';
import '../Styles/StyleLogin.css';
import Img from '../Assets/Perros.svg';

export default function Login(){
    return (
        <div className="LoginContainer">
        <div className="o-LoginImage">
            <img src={Img} alt="imagen" className="o-LoginImage"></img>
        </div>
        
        <div className="o-LoginContainer">
            <h2>Iniciar sesión</h2>

            <div className="o-CamposContainer">
                <form>
                    <label>Nombre de usuario: *</label>
                    <input type="text" id="UserName" name="username" placeholder="username"></input>

                    <label>Contraseña: *</label>
                    <input type="text" id="Password" name="password" placeholder="password"></input>
                </form>
            </div>

            <div className="o-Butons">
                <button>Ingresar</button>
                <button>Registrar</button>
                <button>Entrar con Google</button>
            </div>

        </div>

    </div>
    )
}