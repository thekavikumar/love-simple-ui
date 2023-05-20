import React, { useState } from "react";
import { PrimaryButton, LoadingButton, Button3, Button4 } from "./index";

export const ButtonPrimary = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  return (
    <PrimaryButton
      text={"Hello World! Click me to show current date :)"}
      onClick={() => {
        setDate(new Date().toLocaleDateString());
        alert(`The current date is "${date}".`);
      }}
    />
  )
};

export const ButtonLoading = () => (
  <LoadingButton text={"Loading..."} loading />
);

export const ButtonThree = () => <Button3 text="Button 3" />;

export const ButtonFour = () => <Button4 text="Button 4" />;
