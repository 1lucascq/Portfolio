import React from 'react';
import styled from 'styled-components';
import SectionContainer from '../components/SectionContainer';

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;

  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
  }

  /* div > p:only-of-type {
    text-align: start;
    color: blue;
  } */


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

  ul > li {
    /* display: inline-block;
    color: blue; */
    /* display: flex;
    flex-wrap: wrap; */
  }

`;

const About = (): JSX.Element => {
  console.log('bla');
  return (
    <SectionContainer>
      <AboutContainer>
        <div>
          <p>Olá, meu nome é Lucas.</p>
          <p>Sou um Desenvolvedor Full-Stack Jr.</p>
          <p>
            Desde 2021 me dedico integralmente a aprender e melhorar meus
            conhecimentos técnicos sobre desenvolvimento web.
          </p>
        </div>
        <div>
          <p>As tecnologias que mais utilizo atualmente são:</p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>Styled Components</li>
            <li>Material UI</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </AboutContainer>

    </SectionContainer>
  );
};

export default About;
