// src/App.jsx
import './App.css'
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx';

import Routers from './Routers/Routers';

const App = () => {
  const { appliedTheme } = useTheme();

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Routers />
    </MUIThemeProvider>
  );
}

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
