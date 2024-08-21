// src/App.jsx
import './App.css'
import './styles/global.css'
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MUIThemeProvider } from '@mui/material';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n/index.jsx';

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
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </ThemeProvider>
);

export default AppWrapper;
