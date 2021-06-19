// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';

// COMPONENTS
import Button from './Button';

const BillboardTwo = (props) => {
  const { imageUrl, header, subheader, children, buttonLabel } = props;

  return (
    <StyledWrapper imageUrl={imageUrl}>
      <StyledContentWrapper>
        <Text.H2>{header}</Text.H2>
        <StyledSubheaderWrapper>
          <Text.P1>{subheader}</Text.P1>
        </StyledSubheaderWrapper>
        {children}
        <Button large topPadding>{buttonLabel}</Button>
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

const StyledSubheaderWrapper = styled.div`
  margin-bottom: 24px;
  max-width: 700px;
`;

const StyledContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  text-align: center;
  width: 100%;

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