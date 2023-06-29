import React from "react";
import { Story, Meta } from "@storybook/react";
import Carousel from "./Carousel";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as Meta;

const Template: Story = () => <Carousel />;

export const Default = Template.bind({});
