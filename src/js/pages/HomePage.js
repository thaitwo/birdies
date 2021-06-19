// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';

// CONSTANTS
import Text from '../const/typography';
import theme from '../Theme';
import { articles } from '../const/articles';
import * as ROUTES from '../const/routes';

// IMAGES
import teeTimes from '../../assets/tee-times.jpeg';
import elsLogo from '../../assets/els-for-autism-logo.jpeg';
import courseSky from '../../assets/course-bunker-sky.jpeg';

// COMPONENTS
import HeroLarge from '../components/HeroLarge';
import Wallet from '../components/Wallet';
import AppScreen from '../components/AppScreen';
import Poster from '../components/Poster';
import Testimonial from '../components/Testimonial';
import BillboardTwo from '../components/BillboardTwo';
import Podiums from '../components/Podiums';

const HomePage = () => {

  return (
    <StyledWrapper>
      <HeroLarge
        text='Join the Fastest Growing Golf Community'
      />
      <FloatWrapper>
        <Wallet />
      </FloatWrapper>
      <AppScreen
        description='Explore tee times at thousands of courses to find your next round.'
        header='Book your next round with 18Birdies'
        screenImageUrl={teeTimes}
        buttonLabel='Book Tee Time'
        subheader='TEE TIME'
      />
      <Poster />
      <Testimonial
        quote='The 18Birdies team uses technology not only to improve game performance, but to inspire the mental approach to the game and ultimately help people enjoy their golf more. I applaud that.'
        author='Ernie Els — Four-Time Major Champion'
        logoUrl={elsLogo}
      />
      <BillboardTwo
        imageUrl={courseSky}
        header='18Birdies for Business'
        subheader='Harness the power of the 18Birdies app and community to enhance your course experience, grow golfer participation and increase customer engagement.'
        buttonLabel='Explore Business'
      >
        <ul>
          <li>
            <Text.H6>1. Build Your Community</Text.H6>
          </li>
          <li>
            <Text.H6>2. Market New Experiences</Text.H6>
          </li>
          <li>
            <Text.H6>3. Grow Your Revenue</Text.H6>
          </li>
        </ul>
      </BillboardTwo>
      <Podiums
        header='The Clubhouse'
        subheader='Keep up with the latest talk around the 18Birdies Clubhouse, including golf news, instruction, entertainment, and recent product updates.'
        articles={articles}
      />
    </StyledWrapper>
  )
}

export default HomePage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
`;

const FloatWrapper = styled.div`
  margin: -120px 0 48px;
`;
