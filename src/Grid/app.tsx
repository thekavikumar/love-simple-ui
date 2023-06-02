import React from "react";
import Grid from "./Grid";
import "./App.css";

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
