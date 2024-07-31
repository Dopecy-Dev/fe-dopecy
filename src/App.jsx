import './App.css'

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './themes/themes';
import useDarkMode from './hooks/useDarkMode';

import Header from './layout/Header/Header'
import Layout from './layout/Layout';
import Routers from './Routers/Routers';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const appliedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {/* <Layout toggleTheme={toggleTheme} theme={theme}></Layout> */}
      <Routers></Routers>
      {/* <Header toggleTheme={toggleTheme} theme={theme} /> */}
    </ThemeProvider>
  )
}

export default App
