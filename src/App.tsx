import React from 'react';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import About from './sections/About';
import Contacts from './sections/Contacts';
import Intro from './sections/IntroAnimation';
import Projects from './sections/Projects';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <GlobalStyles />
      <Intro />
      <About />
      <Projects />
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
