import React from "react";
import { PrimaryButton, Button3, Button4 } from "./index";

export const ButtonPrimary = () => (
  <PrimaryButton
    text={"Hello World! Click me to show current date :)"}
    onClick={() => {
      alert("Hello World");
    }}
  />
);

export const ButtonLoading = () => (
  <PrimaryButton text={"Loading..."} state="loading" />
);

export const ButtonThree = () => <Button3 text="Button 3" />;

export const ButtonFour = () => <Button4 text="Button 4" />;
