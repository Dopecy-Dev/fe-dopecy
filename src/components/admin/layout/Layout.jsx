import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', minHeight: '100vh', mt: 5 }}
      >
        <Header />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
