import React from 'react';
import SectionContainer from '../components/SectionContainer';
import TypewriterAnimation from '../components/TypewriterAnimation';
import AboutContainer from '../styles/sc-About';

// const About = (): JSX.Element => {
//   console.log('bla');
//   return (

const About = (): JSX.Element => (
  <SectionContainer>
    <TypewriterAnimation />
    <AboutContainer>

      <div id="Sobre">
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

export default About;
