import { useMemo } from 'react';
import {
  ThemeProvider,
  StyledEngineProvider,
  unstable_createMuiStrictModeTheme as createTheme,
  CssBaseline
} from '@mui/material';
import getTheme from './theme';
import Button from './components/button';
import './App.css';

const App = () => {
  const darkMode = false;

  const defaultTheme = useMemo(
    () => getTheme(darkMode ? 'dark' : 'light'),
    [darkMode]
  );
  const theme = createTheme(defaultTheme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <Button title="My Button" action={() => {}} />
          </header>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
