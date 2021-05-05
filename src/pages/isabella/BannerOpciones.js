import React from "react";
import "./stylecomponetsGlobal.css"


export default function Banneropciones ({imgbanner,titulo,descrip,colorfondo,altimg}) {
    return(
        <div style={{backgroundColor:colorfondo}} className="ig-bannerop">
            
            <div>
                <img src={imgbanner} alt={altimg} />
            </div>
            <div className="ig-info-bannerop">
                <h1>{titulo}</h1>
                <p>{descrip}</p>
            </div>

        </div>
    );
     
}