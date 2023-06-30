import React from "react";

const ImageItem = ({ src }) => {
  return (
    <div className="image-item">
      <img src={src} alt="" />
    </div>
  );
};

export default ImageItem;
