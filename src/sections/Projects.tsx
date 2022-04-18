import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import SectionContainer from '../components/SectionContainer';

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;
  width: 95%;
  
  h1 {
    text-align: center;
    margin: 5em;
  }

  p {
    margin-bottom: 3em;
  }
  `;

const Projects = (): JSX.Element => {
  console.log('bla');
  return (
    <SectionContainer>
      <ProjectsContainer>
        <h1 id="Projetos">Projetos</h1>
        <p>
          Tive a oportunidade de desenvolver vários projetos ao longo deste último ano
          e abaixo mostro alguns deles desenvolvidos durante o curso da Trybe ou
          buscando por em prática alguma ferramenta extra que busquei conhecer.
        </p>

        <ProjectCard />
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;
