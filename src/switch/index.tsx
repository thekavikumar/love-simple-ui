import React, {FC, InputHTMLAttributes, useState } from "react";
import "../global.css";
import { cn } from "../lib/util";

export interface SwitchProps{
  isChecked: boolean;
  icon?: JSX.Element;
  color?: string;
  switchSize?: 'sm' | 'md' | 'lg'; 
  bgColor?:string;
}


const Switch:FC<SwitchProps & InputHTMLAttributes<HTMLInputElement>> = ({
  isChecked,
  color = "bg-green-500",
  icon,
  switchSize="md",
  bgColor="bg-gray-300",
  ...rest
}: SwitchProps) => {

  const [sizes,setSizes] = useState({
    sm: ["w-12 h-7","w-6 h-6","top-[1.5px] left-[0.5px]","translate-x-5"],
    md: ["w-16 h-9","w-9 h-9","top-0","translate-x-7"],
    lg: ["w-20 h-10","w-10 h-10","top-0","translate-x-10"] ,
  })
  return (
    <div
      className={cn(
        `${
          isChecked ? color : bgColor
        }  ${sizes[switchSize][0]} flex items-center  rounded-full relative`
      )}
    >
      <label
        className={cn(`cursor-pointer w-full h-full ${isChecked ? "left-7" : ""}`)}
      >
        <input {...rest} className="w-0 h-0" type="checkbox" />
        <div
          className={cn(
            `absolute ${
              isChecked ? sizes[switchSize][3] : ""
            } ${sizes[switchSize][2]}  flex justify-center items-center rounded-3xl ${sizes[switchSize][1]} bg-white
            transition-transform p-2`
          )}
        >
          {icon}
        </div>
      </label>
    </div>
  );
}

export default Switch