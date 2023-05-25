import React, { FC, useState, useEffect } from "react";
import { styled, setup } from "goober";

export interface DropdownProps {
  options: string[];
  className?: string;
  text?: string;
}

setup(React.createElement);

const StyledDropdownWrapper = styled("div")`
  position: relative;
  display: inline-block;
`;

const StyledDropdownButton = styled("button")`
  background-color: #49484a;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
`;

const StyledDropdownMenu = styled("ul")`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 5px 0;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  list-style: none;
`;

const StyledDropdownMenuItem = styled("li")`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #49484a;
    color: white;
  }
`;

export const Dropdown: FC<DropdownProps> = ({
  options,
  className = "",
  text = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <StyledDropdownWrapper className={className}>
      <StyledDropdownButton onClick={toggleDropdown}>
        {selectedOption || text}
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownMenu>
          {options.map((option) => (
            <StyledDropdownMenuItem
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </StyledDropdownMenuItem>
          ))}
        </StyledDropdownMenu>
      )}
    </StyledDropdownWrapper>
  );
};

export const DropdownWithIcon: FC<DropdownProps> = ({
  options,
  className = "",
  text = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <StyledDropdownWrapper className={className}>
      <StyledDropdownButton onClick={toggleDropdown}>
        {selectedOption || text}
        <span
          style={{
            display: "inline-block",
            marginLeft: "10px",
            transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d="M8 10.5l-6-6h12l-6 6z" />
          </svg>
        </span>
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownMenu>
          {options.map((option) => (
            <StyledDropdownMenuItem
              key={option}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </StyledDropdownMenuItem>
          ))}
        </StyledDropdownMenu>
      )}
    </StyledDropdownWrapper>
  );
};

export const DropdownWithSearch: FC<DropdownProps> = ({
  options,
  className = "",
  text = "Select an option",
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledDropdownWrapper className={className}>
      <StyledDropdownButton onClick={toggleDropdown}>
        {selectedOption || text}
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownMenu>
          <input
            type="text"
            placeholder="Search options..."
            style={{
              width: "97%",
              padding: "5px 10px",
              boxSizing: "border-box",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <StyledDropdownMenuItem
                key={option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </StyledDropdownMenuItem>
            ))
          ) : (
            <StyledDropdownMenuItem>No options found.</StyledDropdownMenuItem>
          )}
        </StyledDropdownMenu>
      )}
    </StyledDropdownWrapper>
  );
};

export const DropdownOnHover: FC<DropdownProps> = ({
  options,
  className = "",
  text = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  let timer: number | null = null;

  const handleMouseEnter = () => {
    clearTimeout(timer!);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timer = window.setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <StyledDropdownWrapper
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledDropdownButton>{selectedOption || text}</StyledDropdownButton>
      {isOpen && (
        <StyledDropdownMenu>
          {options.length > 0 ? (
            options.map((option) => (
              <StyledDropdownMenuItem
                key={option}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </StyledDropdownMenuItem>
            ))
          ) : (
            <StyledDropdownMenuItem>
              No options available.
            </StyledDropdownMenuItem>
          )}
        </StyledDropdownMenu>
      )}
    </StyledDropdownWrapper>
  );
};
