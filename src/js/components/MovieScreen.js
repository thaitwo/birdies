// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';

const MovieScreen = (props) => {
  const { header, imageUrl } = props;

  return (
    <StyledWrapper>
      <Text.H3>{header}</Text.H3>
      <StyledImage src={imageUrl} />
    </StyledWrapper>
  );
}

export default MovieScreen;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1024px;
  padding: 120px 0;
  width: 100%;
`;

const StyledImage = styled.img`
  border-radius: 8px;
  margin-top: 64px;
  max-width: 800px;
`;