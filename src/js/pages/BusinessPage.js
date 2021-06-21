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
import birdiesBusinessImage from '../../assets/discover-18birdies-business.png';

// COMPONENTS
import HeroTwo from '../components/HeroTwo';
import MovieScreen from '../components/MovieScreen';
import JoinForm from '../components/JoinForm';


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
        to='#'
      />
      <MovieScreen 
        header='Discover 18Birdies for Business'
        imageUrl={birdiesBusinessImage}
      />
      <JoinForm />
    </StyledWrapper>
  )
}

export default FeaturesPage;

const StyledWrapper = styled.div`

`;