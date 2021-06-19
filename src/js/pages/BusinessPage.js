// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';
import theme from '../Theme';
import { articles } from '../const/articles';
import * as ROUTES from '../const/routes';

// IMAGES
import courseBunkerImage from '../../assets/course-bunker-sky.jpeg';
import roundSummaryImage from '../../assets/app-screen-round-summary.jpeg';

// COMPONENTS
import HeroTwo from '../components/HeroTwo';


const FeaturesPage = () => {

  return (
    <StyledWrapper>
      <HeroTwo
        header='Build Your Community. Grow Your Revenue.'
        description='Leverage our community of golfers to build your business, create excitement and drive revenue.'
        imageUrl={courseBunkerImage}
        noPhone
        button
        buttonLabel='Join Today'
      />
    </StyledWrapper>
  )
}

export default FeaturesPage;

const StyledWrapper = styled.div`

`;