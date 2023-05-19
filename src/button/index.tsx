import React, { ButtonHTMLAttributes, FC } from "react";
import { styled, setup } from "goober";

export interface ButtonProps {
  text?: string;
  loading?: boolean;
  className?: string;
}

export interface Button3Props {
  text?: string;
  className?: string;
}

setup(React.createElement);

const StyledPrimary = styled("button")`
  background-color: "#fff";
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

const StyledLoading = styled("button")`
  background-color: "#fff";
  border: 1px solid #000;
  border-radius: 4px;
  color: #000;
  cursor: not-allowed;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PrimaryButton: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, loading = false, className = "", ...props }) => {

  if (!loading) {
    return (
      <StyledPrimary className={className} {...props}>
        {text}
      </StyledPrimary>
    );
  }

  return (
    <StyledLoading className={className} {...props}>
      {text}
    </StyledLoading>
  );
};

const StyleBtn3 = styled("button")`
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const Button3: FC<
  Button3Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, className = "", ...props }) => {
  return (
    <StyleBtn3 className={className} {...props}>
      {text}
    </StyleBtn3>
  );
};

const StyleBtn4 = styled("button")`
  cursor: pointer;
  &,
  &:after {
    width: 150px;
    height: 76px;
    line-height: 78px;
    font-size: 20px;
    font-family: "Bebas Neue", sans-serif;
    background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
    border: 0;
    color: #fff;
    letter-spacing: 3px;
    box-shadow: 6px 0px 0px #00e6f6;
    outline: transparent;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  &:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "ALTERNATE TEXT";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 3%,
      #00e6f6 3%,
      #00e6f6 5%,
      #ff013c 5%
    );
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  &:hover:after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }
    10% {
      clip-path: var(--slice-3);
      transform: translate(10px, 10px);
    }
    20% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 10px);
    }
    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 5px);
    }
    40% {
      clip-path: var(--slice-2);
      transform: translate(-5px, 0px);
    }
    50% {
      clip-path: var(--slice-3);
      transform: translate(5px, 0px);
    }
    60% {
      clip-path: var(--slice-4);
      transform: translate(5px, 10px);
    }
    70% {
      clip-path: var(--slice-2);
      transform: translate(-10px, 10px);
    }
    80% {
      clip-path: var(--slice-5);
      transform: translate(20px, -10px);
    }
    90% {
      clip-path: var(--slice-1);
      transform: translate(-10px, 0px);
    }
    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
`;

export const Button4: FC<
  Button3Props & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, className = "", ...props }) => {
  return (
    <StyleBtn4 className={className} {...props}>
      {text}
    </StyleBtn4>
  );
};
