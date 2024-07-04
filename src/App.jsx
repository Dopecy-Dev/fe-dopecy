import './App.css'
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme } from './themes/themes';
import useDarkMode from './hooks/useDarkMode';

import Header from './layout/Header/Header'

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Header toggleTheme={toggleTheme} theme={theme} />
    </ThemeProvider>
  )
}

export default App
