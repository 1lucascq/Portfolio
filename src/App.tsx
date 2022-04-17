import React from 'react';
import { ThemeProvider } from 'styled-components';
import About from './sections/About';
import Contacts from './sections/Contacts';
import Projects from './sections/Projects';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <About />
      <Projects />
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
