import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      bla
    </ThemeProvider>
  );
}

export default App;
