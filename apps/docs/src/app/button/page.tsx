"use client";

import { PrimaryButton } from "@love-simple-ui/react";
const Button = () => {
  return (
    <PrimaryButton text="Primary Button" onClick={() => alert("Hello World")} />
  );
};

export default Button;
