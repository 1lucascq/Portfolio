import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  text-align: justify;
  background: ${props => props.theme.colors.background};
  align-items: center;
  padding: 2em;
  height: 7vh;
  animation: ${props => props.theme.animation.fadeIn(5.4)};
  z-index: 1000000;
  
  nav, ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  li {
    text-decoration: none;
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    transition: 1s;
  }

`;

const NavBar = (): JSX.Element => {
  console.log('bla');
  return (
    <Header>
      <nav>
        <ul>

          <li><a href="#Sobre">Sobre</a></li>
          <li><a href="#Projetos">Projetos</a></li>
          <li><a href="#Contato">Contato</a></li>

        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
