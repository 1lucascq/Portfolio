import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children: JSX.Element
}

// const SectionContainer: React.FC<Props> = ({ children }) => {
const SectionContainer = ({ children }: Props): JSX.Element => {
  console.log('bla');
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SectionContainer;
