import React from 'react';
import styled from 'styled-components';

const text = '<h1> Hello, World! </h1>';

const cursorSpeed = 4;
const Animation = styled.div`
  h1 {
    font-family: monospace;
    position: relative;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 5em;
    /* outline: 2px solid green; */
    /* width: max-content; */
  }

  h1::before, h1::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  h1::before {
    background-color: ${props => props.theme.colors.background};
    animation: typewriter ${cursorSpeed}s steps(${text.length}) 1s forwards;
  }

  h1::after {
    width: 0.125em;
    background: transparent;
    animation:
      typewriter ${cursorSpeed}s steps(${text.length}) 1s forwards,
      blink 800ms steps(${text.length}) infinite
  }

  //                              --> OTA ANIMAÇÃO
  /* h4 {
    opacity: 0;
    transform: translateY(2rem);
    animation: fadeInUp 2s ease ${cursorSpeed + 2}s forwards;
  } */

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: black ;
    }
  }

  //                              --> OTA ANIMAÇÃO
  /* @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    };
  } */

`;

// const TypewriterAnimation = (): JSX.Element => {
//   console.log('bla');
//   return (

const TypewriterAnimation = (): JSX.Element => (
  <Animation>
    <h1>
      {text}
    </h1>
    {/* <h4>TESTANDO A OTA ANIMAÇÃO</h4> */}
  </Animation>
);

export default TypewriterAnimation;
