import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  return (
    <StyledContainer center={props.center}>
      {props.children}
    </StyledContainer>
  );
};

export default Container;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  text-align: ${props => props.center ? 'center' : 'left' };
  width: 100%;
`;