import React from "react";
import MasonryLayout from "./MasonryLayout";
import ImageItem from "./ImageItem";

const App = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image URLs here
  ];

  return (
    <div>
      <h1>Masonry Layout Example</h1>
      <MasonryLayout>
        {images.map((image, index) => (
          <ImageItem key={index} src={image} />
        ))}
      </MasonryLayout>
    </div>
  );
};

export default App;
