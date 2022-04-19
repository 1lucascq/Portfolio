import styled from 'styled-components';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  width: 95%;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    animation: ${props => props.theme.animation.fadeIn(5.4)};
  }

  div > p:nth-last-child(1) {
    margin-bottom: 2em;
  }

  div > ul {    
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 0em 2em;
    grid-gap: 1em;
    grid-template-columns: 1fr 1fr;
  }

`;

export default AboutContainer;
