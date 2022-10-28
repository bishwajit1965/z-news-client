import React from "react";
import { Carousel } from "react-bootstrap";
import Brand1 from "../../../Assets/Brands/Brand1.png";
import Brand2 from "../../../Assets/Brands/Brand2.png";
import "./BrandCarousel.css";

const BrandCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={Brand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default BrandCarousel;
