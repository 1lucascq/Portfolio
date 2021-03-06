import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import SectionContainer from '../components/SectionContainer';
import { IProject, ISectionProps } from '../utils/interfaces';
import projectsData from '../utils/projectsData';

const ProjectsContainer = styled.section<ISectionProps>`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;
  width: 95%;
  opacity: 0;
  animation: ${
  props => (props.isInScreen ? props.theme.animation.fadeIn() : 'none')
};
  
  #Projetos {
    text-align: center;
    margin: 5em;
  }

  h1 ~ p {
    margin-bottom: 3em;
  }

  `;

const Projects = (): JSX.Element => {
  // const [ref, inView, entry] = useInView({ threshold: 1 });
  const [isInScreen, setInScreen] = useState(false);
  // const [ref, inView, entry] = useInView();
  const [ref, inView] = useInView();
  // console.log('inView', inView);
  // console.log('entry', entry);

  useEffect(() => {
    if (inView) {
      setInScreen(true);
    }
  }, [inView, isInScreen]);

  const data = projectsData;
  // console.log(data);
  return (
    <SectionContainer>
      <ProjectsContainer isInScreen={isInScreen}>
        <h1 id="Projetos" ref={ref}>Projetos</h1>
        <p>
          Tive a oportunidade de desenvolver vários projetos ao longo deste último ano
          e abaixo mostro alguns deles desenvolvidos durante o curso da Trybe ou
          buscando por em prática alguma ferramenta extra que busquei conhecer.
        </p>
        {data.toDisplay.map((project: IProject) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Projects;
