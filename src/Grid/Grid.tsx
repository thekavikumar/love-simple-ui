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

const App: React.FC = () => {
  return (
    <div className="App">
      <Grid columns={3} gap={20}>
        <div className="grid-item">Item 1</div>
        <div className="grid-item">Item 2</div>
        <div className="grid-item">Item 3</div>
        <div className="grid-item">Item 4</div>
        <div className="grid-item">Item 5</div>
        <div className="grid-item">Item 6</div>
      </Grid>
    </div>
  );
};

export default App;

/* we have the Grid component implementation followed by the App component where the Grid component is used */
