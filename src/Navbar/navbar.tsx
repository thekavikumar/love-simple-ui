import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

interface NavbarProps {
  title: string;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ title, isLoggedIn, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
        {isLoggedIn && (
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/*npm install @material-ui/core @material-ui/icons
*/