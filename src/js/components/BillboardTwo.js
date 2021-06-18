import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';

const BillboardTwo = (props) => {
  return (
    <StyledWrapper imageUrl={props.imageUrl}>
      <StyledContentWrapper>
        <Text.H2>{props.header}</Text.H2>
        <Text.P1>{props.subheader}</Text.P1>
        {props.children}
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

export default BillboardTwo;


const StyledWrapper = styled.div`
  align-items: center;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  box-shadow:inset 0 0 0 2000px ${props => props.theme.colors.secondaryTransparent88};
  background-size: cover;
  color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 120px 0;
  width: 100%;

  h2,
  h6,
  p {
    color: ${props => props.theme.colors.white};
  }
`;

const StyledContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  text-align: center;
  width: 100%;

  h4 {
    max-width: 800px;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 32px 0 0 0;
    padding: 0;

    li {
      padding: 0 24px;
    }
  }

  button {
    margin-top 48px;
  }
`;

const StyledSubheader = styled.h6`
  max-width: 800px;
`;