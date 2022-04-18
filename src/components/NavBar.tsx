import React, { useRef } from 'react';
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
  animation: slide-in-left 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  /* transition: .6s; */
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

  @keyframes slide-in-left {
  0% {
    -webkit-transform: translateY(-200px);
            transform: translateY(-200px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

  `;

const NavBar = (): JSX.Element => {
  console.log('bla');
  console.log(useRef);
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
