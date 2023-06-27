import React from "react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
};

export const DefaultGrid = () => (
  <Grid columns={3} gap={20}>
    <div className="grid-item">Item 1</div>
    <div className="grid-item">Item 2</div>
    <div className="grid-item">Item 3</div>
    <div className="grid-item">Item 4</div>
    <div className="grid-item">Item 5</div>
    <div className="grid-item">Item 6</div>
  </Grid>
);

export const CustomGrid = () => (
  <Grid columns={2} gap={10}>
    <div className="grid-item">Apple</div>
    <div className="grid-item">Banana</div>
    <div className="grid-item">Orange</div>
    <div className="grid-item">Grapes</div>
    <div className="grid-item">Watermelon</div>
    <div className="grid-item">Pineapple</div>
  </Grid>
);

/*
In this example, we define two stories for the Grid component using Storybook. The first story, DefaultGrid, renders the Grid component with 3 columns and a gap of 20 pixels. It contains six grid items with some sample text.

The second story, CustomGrid, demonstrates another usage of the Grid component with 2 columns and a gap of 10 pixels. It displays grid items with fruit names.

To use this stories.tsx file, make sure you have Storybook set up in your project. The stories will appear in the Storybook UI, allowing you to interact with and view the Grid component in different scenarios.
*/