import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <div>
        <img src="image1.jpg" alt="Image 1" />
        <p className="legend">Image 1 description</p>
      </div>
      <div>
        <img src="image2.jpg" alt="Image 2" />
        <p className="legend">Image 2 description</p>
      </div>
      <div>
        <img src="image3.jpg" alt="Image 3" />
        <p className="legend">Image 3 description</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
