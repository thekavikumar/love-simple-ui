import React from 'react';
import { Menu, MenuItem, MenuButton } from '@mui/material';

interface MenuProps {
  options: string[];
  onSelectOption: (option: string) => void;
}

const CustomMenu: React.FC<MenuProps> = ({ options, onSelectOption }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    handleClose();
  };

  return (
    <div>
      <MenuButton onClick={handleClick}>Open Menu</MenuButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;
