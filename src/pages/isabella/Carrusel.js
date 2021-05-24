import React, { Component } from "react";
import Slider from "react-slick";
import Pelos from "../../assets/img/pelos.png"
import CardPU from "./CardPU";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./stylecomponetsGlobal.css"
import { Container } from "@material-ui/core";

export default class PauseOnHover   extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <Container>
      <div >
        <h3> Mascotas registradas </h3>
        <Slider {...settings}>
          <div className="ig-div-carrusel">
           <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645" />
          </div>
          <div>
          <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645" />
          </div>
          <div>
          <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645" />
          </div>
          <div>
          <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645" />
          </div>
          
        </Slider>
      </div>
      </Container>
    );
  }
}