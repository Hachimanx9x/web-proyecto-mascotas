import React from "react";
import SvgTelefono from "../../assets/svg/icons/call.svg";
import SvgCorreo from "../../assets/svg/icons/mail.svg";
import SvgFace from "../../assets/svg/icons/facebook.svg";
import SvgInstagram from "../../assets/svg/icons/instagram.svg";
import "./stylecomponetsGlobal.css"


const Footer = () => (
        <div className="ig-footer">
            <div className="ig-contacto">
            <div className="ig-contacto-cont">
                <img src={SvgTelefono} alt="d" />
                <div className="ig-contacto-numeros">
                    <li>  123456789  </li>
                    <li>  +57 123456789  </li>
                </div>
                </div>
            <div className="ig-contacto-cont">
            <img src={SvgCorreo} alt="d" />
            <div>
            <li>  ElCorreo@gmail.com  </li>
            </div>
            </div>
            <div className="ig-contacto-cont">
                <img src={SvgFace} alt="dsad" />
                <img src={SvgInstagram} alt="asdasd" />
            </div>

            
            </div>
            </div>
      

    );

export default Footer;