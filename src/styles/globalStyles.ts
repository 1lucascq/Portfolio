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
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  @keyframes slideIn {
    0% {
    -webkit-transform: translateY(-10px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-10px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
              transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      -webkit-filter: blur(0);
              filter: blur(0);
      opacity: 1;
    }
  }

`;
