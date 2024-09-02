import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';
import LogoGreen from '../../logos/LogoGreen';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: '#ffffff',
        color: '#000000',
        border:"none",
        boxShadow:"none"
      }}
    >
      <Toolbar>
        <LogoGreen/>
        <Box sx={{ ml:10}}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<Search sx={{ color: '#9e9e9e' }} />}
          />
        </Box>
        <Box sx={{ display:"flex",alignItems:"center",justifyContent:"flex-end",width:"80%" }}>
        <IconButton color="inherit">
          <Notifications />
        </IconButton>
        </Box>
       
      </Toolbar>
    </AppBar>
  );
};

export default Header;
