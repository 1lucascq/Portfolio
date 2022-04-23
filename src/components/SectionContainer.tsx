import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  /* margin: auto; */
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: JSX.Element | JSX.Element[]
}

// const SectionContainer: React.FC<Props> = ({ children }) => {
// const SectionContainer = ({ children }: Props): JSX.Element => {
//   console.log('bla');
//   return (

const SectionContainer = ({ children }: Props): JSX.Element => (
  <Container>
    {children}
  </Container>
);

export default SectionContainer;
