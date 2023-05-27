import React, { FC } from "react";
import { styled, setup } from "goober";

export interface InputProps {
  text?: string;
  className?: string;
  placeholder?: string;
  variant?: string;
  onChange: (e: any) => void;
}

setup(React.createElement);

const StyledDiv = styled("div")`
  background-color: "#fff";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled("input")`
  border-radius: 4px;
  padding: 15px 16px;
  font-size: 16px;
  outline: none;

  &:hover {
    border: 2px solid #000;
    outline: none;
  }

  &:focus {
    border: 2px solid #2e99e6;
    outline: none;
  }

  ${(props: InputProps) => {
    if (props.variant === "standard")
      return `
            border-bottom: 2px solid #000;
            border-left: none;
            border-right: none;
            border-top: none;
            border-radius:0px;

        `;
    else if (props.variant === "outlined")
      return `
            border: 2px solid #78716F;
        `;
    else
      return `
            background-color: #EFE6E3;
            border: 2px solid #000;
        `;
  }}
`;

export const Input: FC<InputProps> = ({
  text = "",
  className = "",
  placeholder = "",
  variant = "",
  onChange,
  ...props
}) => {
  return (
    <StyledDiv>
      <StyledInput
        id="input-field"
        className={className}
        type="text"
        placeholder={placeholder}
        value={text}
        variant={variant}
        onChange={onChange}
        {...props}
      ></StyledInput>
    </StyledDiv>
  );
};
