import './App.css'
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { lightTheme, darkTheme } from './themes/themes';
import useDarkMode from './hooks/useDarkMode';

import Header from './layout/Header/Header'
import Layout from './layout/Layout';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Layout toggleTheme={toggleTheme} theme={theme}></Layout>
      {/* <Header toggleTheme={toggleTheme} theme={theme} /> */}
    </ThemeProvider>
  )
}

export default App
