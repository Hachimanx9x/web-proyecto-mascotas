import React from "react";

import "./stylecomponetsGlobal.css"


export default function CardPU ({nommascota,imgmascota,altmascota,colorfondocard}) {
    return( 
    <div className="ig-cardpumascotas">
        <div className="ig-cont-cardpumascotas">
            <img src={imgmascota} alt={altmascota} />
       
        <div className="ig-info-card" style={{backgroundColor:colorfondocard}} >
          
            <h6>{nommascota}</h6>
        </div>
        </div>
    </div>);

}
