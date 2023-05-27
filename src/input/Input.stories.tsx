import React, { useState } from "react";
import { Input } from "./index";

export const InputStandard = () => {
  const [input, setInput] = useState("Apu");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
      <Input text={input} onChange={handleChange} variant="standard" />
  );
}

export const InputOutlined = () => {
  const [input, setInput] = useState("Apu");

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  return (
      <Input text={input} onChange={handleChange} variant="outlined" />
  );
}
