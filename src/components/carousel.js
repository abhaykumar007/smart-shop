import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import card1 from "./Carousel/card1.jpg";
import card2 from "./Carousel/card2.png";
import card3 from "./Carousel/card3.jpg";
import card4 from "./Carousel/card4.jpg";
import card5 from "./Carousel/card5.jpg";
function Carouselcard() {
  return (
    <div className="carousel">
      <Carousel infiniteLoop interval={5000} autoPlay showThumbs={false}>
        <div className="carouselCard">
          <img src={card2} alt="card1" />
        </div>
        <div className="carouselCard">
          <img src={card1} alt="card2" />
        </div>
        <div className="carouselCard">
          <img src={card3} alt="card3" />
        </div>
        <div className="carouselCard">
          <img src={card4} alt="card4" />
        </div>
        <div className="carouselCard">
          <img src={card5} alt="card5" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselcard;
