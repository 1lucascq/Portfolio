import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './pages/About';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <About />
    </ThemeProvider>
  );
}

export default App;
