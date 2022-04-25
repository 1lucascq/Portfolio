import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    scroll-behavior: smooth;
    scroll-padding-top: 300px;
    width: 100%;
    height: 100%;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    overflow: hidden;
  }

  @keyframes slideIn {
    0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
    }
    100% {
      -webkit-filter: blur(12px);
              filter: blur(12px);
      opacity: 0;
    }
  }

`;
