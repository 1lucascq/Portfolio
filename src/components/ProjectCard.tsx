import React from 'react';
import styled from 'styled-components';

const img = 'data:image/jpeg;base64,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';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  /* border: 2px solid black; */
  height: 15em;
  width: 90%;
  box-shadow: 5px 5px 10px rgba(253, 156, 182, 0.5);

  #card-inner-wrapper {
    background: green;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform 0.8s;
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
    background: yellow;
    padding: .2em;
  }

  #card-front img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  #card-back {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    /*TODO: COLOCAR A COR FINAL AQUI NO THEMES GLOBAL */
    background: #404572;
    text-align: center;
    transform: rotateY(180deg);
  }

  #card-back img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }

  #card-back h2 {
    color: aliceblue;
  }
`;

const ProjectCard = (): JSX.Element => {
  console.log('bla');
  return (
    <Card>
      <div id="card-inner-wrapper">
        <div id="card-front">
          <img src={img} alt="testing 123" />
        </div>
        <div id="card-back">
          <h2>título do trabso</h2>
          <p>descrição do trabso</p>
          <ul>lista de tecnologias utilizadas</ul>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
