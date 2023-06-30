import React from "react";
import "./MasonryLayout.css"; // Stylesheet for MasonryLayout

const MasonryLayout = ({ children }) => {
  return <div className="masonry-layout">{children}</div>;
};

export default MasonryLayout;
