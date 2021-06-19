import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import DownloadButtons from './DownloadButtons';

const HeroTwo = props => {
  const { header, description } = props;
  return (
    <StyledWrapper>
      <StyledInnerWrapper>
        <div>
          <Text.H2>{header}</Text.H2>
          <Text.P1>{description}</Text.P1>
          <DownloadButtons />
        </div>
      </StyledInnerWrapper>
    </StyledWrapper>
  )
};

export default HeroTwo;

const StyledWrapper = styled.div`

`;

const StyledInnerWrapper = styled.div`

`;