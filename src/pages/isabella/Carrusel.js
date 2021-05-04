import React, { Component } from "react";
import Slider from "react-slick";
import Pelos from "../../assets/img/pelos.png"
import CardPU from "./CardPU";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./stylecomponetsGlobal.css"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Mascotas registradas </h2>
        <Slider {...settings}>
          <div className="ig-div-carrusel">
            <CardPU nommascota="Pelos" imgmascota={Pelos} altmascota="imagen del perro pelos" colorfondocard="#FF5645" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}