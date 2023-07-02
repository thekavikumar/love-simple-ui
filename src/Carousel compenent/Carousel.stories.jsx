import React from 'react';
import Carousel from './carousel';

const MyComponent = () => {
  const slides = [
    <img src="slide1.jpg" alt="Slide 1" />,
    <img src="slide2.jpg" alt="Slide 2" />,
    <img src="slide3.jpg" alt="Slide 3" />,
    // Add more slides here
  ];

  return (
    <div>
      <h1>My Carousel</h1>
      <Carousel slides={slides} />
    </div>
  );
};

export default MyComponent;
