import React from "react";
import "../Styles/StyleLogin.css";
import Img from "../Assets/Perrito.svg";
import Img2 from "../Assets/GoogleIcon.svg";

export default function Login() {
  return (
    <>
      <div className="o-LoginContainer">
        <div className="o-LoginImage">
          <img src={Img} alt="imagen" className="o-LoginImage"></img>
        </div>

        <div className="o-Login">
          <h2>Iniciar sesión</h2>

          <div className="o-CamposContainer">
            <form>
              <label>Nombre de usuario: *</label>
              <input
                className="o-InputText"
                type="text"
                id="UserName"
                name="username"
                placeholder="username"
              ></input>

              <label>Contraseña: *</label>
              <input
                className="o-InputText"
                type="password"
                id="Password"
                name="password"
                placeholder="password"
              ></input>
            </form>
          </div>

          <div className="o-ButtonsContainer">
            <button className="o-Button">
              <a href="/isabella/PerfilU">Ingresar</a>
            </button>
            <button className="o-Button">
              <a href="/isabella/Cuenta">Registrar</a>
            </button>
            <button className="o-GoogleButton" id="btnGoogle">
              <img src={Img2} alt="imagen" className="o-GoogleIcon"></img>Entrar
              con Google
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        a {
          color: #fff;
        }
      `}</style>
    </>
  );
}
