import React from "react";
import { Story, Meta } from "@storybook/react";
import InteractiveMap from "./InteractiveMap";

export default {
  title: "src/InteractiveMap",
  component: InteractiveMap,
} as Meta;

const Template: Story = () => <InteractiveMap />;

export const Default = Template.bind({});
Default.args = {};
