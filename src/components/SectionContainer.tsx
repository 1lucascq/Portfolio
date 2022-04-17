import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type Props = {
  children: JSX.Element
}

const SectionContainer = ({ children }: Props): JSX.Element => {
  console.log('bla');
  return (
    <Container>
      {children}
    </Container>
  );
};

export default SectionContainer;
