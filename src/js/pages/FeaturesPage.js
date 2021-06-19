// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';
import theme from '../Theme';
import { articles } from '../const/articles';
import * as ROUTES from '../const/routes';

// IMAGES
import annaImage from '../../assets/anna-nordqvist.jpeg';
import roundSummaryImage from '../../assets/app-screen-round-summary.jpeg';
import discover18BirdiesAppImage from '../../assets/discover-18birdies.png';

// COMPONENTS
import HeroTwo from '../components/HeroTwo';
import MovieScreen from '../components/MovieScreen';


const FeaturesPage = () => {

  return (
    <StyledWrapper>
      <HeroTwo
        header='The Complete Golf App'
        description='The 18Birdies app provides the most complete, social and interactive mobile experience for your golf game. Our free app helps improve your golf experience on and off the course by connecting you with everything golf.'
        imageUrl={annaImage}
        screenImageUrl={roundSummaryImage}
      />
      <MovieScreen 
        header='Discover the 18Birdies App'
        imageUrl={discover18BirdiesAppImage}
      />
    </StyledWrapper>
  )
}

export default FeaturesPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;