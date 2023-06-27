import React from "react";
import "./Grid.css";

interface GridProps {
  columns: number;
  gap?: number;
}

const Grid: React.FC<GridProps> = ({ columns, gap = 10, children }) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div className="grid" style={gridStyles}>{children}</div>;
};

export default Grid;


/* we have the Grid component implementation followed by the App component where the Grid component is used */
