import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  IconButton,
  Button,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { MoreVert as MoreVertIcon } from '@material-ui/icons';

interface MenuProps {
  options: MenuOption[];
}

interface MenuOption {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
}

const CustomMenu: React.FC<MenuProps> = ({ options }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="menu"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem key={index} onClick={option.onClick}>
            {option.icon && (
              <ListItemIcon>{option.icon}</ListItemIcon>
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomMenu;