import React, { useState } from "react";
import Switch from ".";
const sun = "https://res.cloudinary.com/dh6gxe3jq/image/upload/v1689526523/sun_savvep.png";
const moon = "https://res.cloudinary.com/dh6gxe3jq/image/upload/v1689526523/moon_zzxv5z.png";

// Switch with icon
export const SwitchWithIcon = () => {
  const [isChecked, setisChecked] = useState<boolean>(false);
  return (
    <Switch
      color={isChecked ? "bg-gray-600" : "bg-gray-300"}
      icon={<img src={isChecked ? moon : sun} />}
      isChecked={isChecked}
      onChange={() => setisChecked((prev) => !prev)}
    />
  );
};

// Switch with Color
export const SwitchWithColor = () => {
  const [isChecked, setisChecked] = useState<boolean>(false);
  return (
    <Switch
      isChecked={isChecked}
      color="bg-blue-300 "
      onChange={() => setisChecked((prev) => !prev)}
    />
  );
};

// Switch with BgColor
export const SwitchWithBgColor = () => {
  const [isChecked, setisChecked] = useState<boolean>(false);
  return (
    <Switch
      bgColor="bg-yellow-200"
      isChecked={isChecked}
      color="bg-blue-300 "
      onChange={() => setisChecked((prev) => !prev)}
    />
  );
};


// Switch with Size
export const SwitchWithSize = () => {
  const [isChecked1, setisChecked1] = useState<boolean>(false);
  const [isChecked2, setisChecked2] = useState<boolean>(false);
  const [isChecked3, setisChecked3] = useState<boolean>(false);
  return (
    <div className="flex space-x-5">
      <Switch
      switchSize="sm"
      isChecked={isChecked1}
      color="bg-blue-300 "
      onChange={() => setisChecked1((prev) => !prev)}
    />
    <Switch
      switchSize="md"
      isChecked={isChecked2}
      color="bg-blue-300 "
      onChange={() => setisChecked2((prev) => !prev)}
    />
    <Switch
      switchSize="lg"
      isChecked={isChecked3}
      color="bg-blue-300 "
      onChange={() => setisChecked3((prev) => !prev)}
    />
    </div>
  );
};

