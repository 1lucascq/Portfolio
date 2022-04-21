import React, { FC } from 'react';
import styled from 'styled-components';
import { IProjectCard } from '../utils/interfaces';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  height: 15em;
  width: 90%;
  box-shadow: 2px 2px 1px rgba(253, 156, 182, 0.5);
  margin-bottom: 5em;
  

  #card-inner-wrapper {
    /* background: green; */
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    text-align: center;
    transform-style: preserve-3d;
    /* transform: rotateY(180deg); */
    transition: transform 1.5s;
  }

  &:hover #card-inner-wrapper {
    transform: rotateY(180deg);
    cursor: pointer;
  }

  #card-front, #card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  #card-front {
    /* background: yellow; */
    /* padding: .2em; */
  }

  #card-front img {
    width: 100%;
    height: 100%;
    /* object-fit: scale-down; */
    border-radius: 10px;
  }

  
  #card-back, h2, p {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #card-back {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: #404572;
    text-align: center;
    transform: rotateY(180deg);
  }

  /* #card-back img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  } */

  #card-back h2 {
    background-color: black;
    border-radius: 10px 10px 0px 0px;
    color: aliceblue;
    height: 20%;
  }

  #card-back p {
    /* background-color: beige; */
    text-align: justify;
    height: 60%;
    padding: 0.6em; 
  }

  #card-back ul {
    background-color: blue;
    height: 20%;
    text-align: start;
    padding-left: 2em;
    border-radius: 0px 0px 10px 10px;
    align-items: stretch;
  }

  .tech-list {
    display: grid;
    padding: 0em 1em;
    grid-template-columns: 1.2fr 1fr .7fr;
  }
`;

const ProjectCard: FC<IProjectCard> = ({ project }): JSX.Element => {
  const {
    title, description, cover, tech, deploy, gitHub,
  } = project;
  console.log(deploy, gitHub);
  return (
    <Card>
      <div id="card-inner-wrapper">
        <div id="card-front">
          <img src={cover} alt={`${title} cover`} />
        </div>
        <div id="card-back">
          <h2>{title}</h2>
          <p>{description}</p>
          <ul className="tech-list">
            {tech.map(technology => (
              <li>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
