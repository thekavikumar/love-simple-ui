import React, { FC } from "react";
import { styled, setup } from "goober";

export type ButtonProps = {
  title: string;
  className?: string;
};

setup(React.createElement);

const StyledBtn = styled("button")`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const Button: FC<ButtonProps> = ({ title, className = "" }) => {
  return (
    <StyledBtn className={className} onClick={() => alert(new Date())}>
      {title}
    </StyledBtn>
  );
};
