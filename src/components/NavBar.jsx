import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const [anchorElMenu, setAnchorElMenu] = useState(null);

  const openMenu = (e) => setAnchorElMenu(e.currentTarget);

  const closeMenu = () => setAnchorElMenu(null);

  return (
    <AppBar position='static' sx={{ width: '100vw' }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        <Box
          sx={{ ml: 5, display: 'flex', justifyContent: 'center', '&:hover': { cursor: 'pointer' } }}
          onClick={() => navigate('/')}
        >
          <Typography variant='h1'>Pepe Concentration Game</Typography>
        </Box>
        <IconButton onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          sx={{ mt: '20px' }}
          anchorEl={anchorElMenu}
          open={Boolean(anchorElMenu)}
          onClose={closeMenu}
        >
          <MenuItem>
            <Typography variant='body1' color='primary'>jk there is nothing here</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;