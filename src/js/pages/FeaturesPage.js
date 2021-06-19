// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';
import theme from '../Theme';
import { articles } from '../const/articles';
import * as ROUTES from '../const/routes';

// COMPONENTS
import HeroTwo from '../components/HeroTwo';


const FeaturesPage = () => {

  return (
    <StyledWrapper>
      <HeroTwo
        header='The Complete Golf App'
        description='The 18Birdies app is designed to provide the most complete, social and interactive mobile experience for your golf game. Our free app helps improve your golf experience on and off the course by connecting you with everything golf.'
      />
    </StyledWrapper>
  )
}

export default FeaturesPage;

const StyledWrapper = styled.div`

`;