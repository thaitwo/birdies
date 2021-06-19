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
import advancedGpsImage from '../../assets/advanced-gps-premium.jpeg';

// COMPONENTS
import HeroTwo from '../components/HeroTwo';
import MovieScreen from '../components/MovieScreen';
import AppScreen from '../components/AppScreen';


const FeaturesPage = () => {

  return (
    <StyledWrapper>
      <HeroTwo
        header='The Complete Golf App'
        description='The 18Birdies app provides the most complete, social and interactive mobile experience for your golf game. Our free app helps improve your golf experience on and off the course by connecting you with everything golf.'
        imageUrl={annaImage}
        screenImageUrl={roundSummaryImage}
        downloadButtons
      />
      <StyledBodyWrapper>
        <MovieScreen 
          header='Discover the 18Birdies App'
          imageUrl={discover18BirdiesAppImage}
        />
        <AppScreen 
          header='Golf GPS'
          description='Never look for a yardage marker again, period. Powered by Google Maps, we verify every single tee marker, landing zone, and hole location for over 35,000 courses around the world.'
          screenImageUrl={advancedGpsImage}
          buttonLabel='Learn More'
          buttonLink='#'
        >
          <ul>
            <li>Measure distance to any point on the course</li>
            <li>Toggle between yards and meters</li>
            <li>35,000+ golf courses</li>
          </ul>
          <Text.SH>PREMIUM FEATURES</Text.SH>
          <ul>
            <li>Live Weather Map</li>
            <li>Blind Shot Compass</li>
            <li>Caddy+ Club Recommendations</li>
          </ul>
        </AppScreen>
        <AppScreen 
          header='Tee Times'
          description='Use 18Birdies to book your next round! With over 6,000 courses to choose from there’s sure to be a tee time that’s right for you.'
          screenImageUrl={advancedGpsImage}
          buttonLabel='Learn More'
          buttonLink='#'
        >
          <ul>
            <li>Find daily deals that fit your budget</li>
            <li>Book locally or for a future golf trip</li>
            <li>See course ratings and reviews</li>
          </ul>
        </AppScreen>
        <AppScreen 
          header='Golf Stats &amp; Round History'
          description='Love to analyze your game? Track fairways hit, greens in regulation, putts and more for every hole to see where you can improve the most. View your progress over time.'
          screenImageUrl={advancedGpsImage}
          buttonLabel='Learn More'
          buttonLink='#'
        >
          <ul>
            <li>Track scores to improve your golf game</li>
            <li>Maintain a history of recent golf rounds</li>
            <li>Set goals and measure your success</li>
          </ul>
          <Text.SH>PREMIUM FEATURES</Text.SH>
          <ul>
            <li>Advanced stat tracking with custom charts</li>
            <li>Strokes gained stats</li>
            <li>Complete golf round history</li>
          </ul>
        </AppScreen>
        <AppScreen 
          header='Win Dream Golf Prizes'
          description='Play golf with 18Birdies for a chance to win thousands of prizes, from golf clubs & balls, to once in a lifetime golf experiences.'
          screenImageUrl={advancedGpsImage}
          buttonLabel='Learn More'
          buttonLink='#'
        >
          <ul>
            <li>1 Grand Prize drawing each month</li>
            <li>Hundreds of Instant Prizes every month</li>
            <li>Rack up the Golf Bucks</li>
          </ul>
        </AppScreen>
        <AppScreen 
          header='Join Our Golf Community'
          description='Add friends, play together and share your rounds with your entire golf community. Compete with 18Birdies golfers through course leaderboards and never miss a beat with quality on-demand golf content.'
          screenImageUrl={advancedGpsImage}
          buttonLabel='Learn More'
          buttonLink='#'
        >
          <ul>
            <li>Connect with friends and golf courses</li>
            <li>Share golf rounds, photos and videos</li>
            <li>Explore instructional videos and news</li>
          </ul>
        </AppScreen>
        <AppScreen 
          header='Go Premium'
          description='An 18Birdies Premium Membership delivers you a ton of advanced features, top-tier lesson plans, deep partner discounts that can save you hundreds of dollars, and much more.'
          buttonLabel='Explore Premium'
          buttonLink='#'
          noPhone
        >
          <ul>
            <li>Improve your game with premium lesson plans taught by top-tier golf instructors</li>
            <li>Advanced GPS data points such as elevation, temperature, humidity and wind</li>
            <li>Deeper stats analysis with premium charts, custom filters, and strokes gained metrics</li>
            <li>Premium pays for itself with exclusive discounts from top industry partners</li>
          </ul>
        </AppScreen>
      </StyledBodyWrapper>
    </StyledWrapper>
  )
}

export default FeaturesPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBodyWrapper =  styled.div`
  max-width: 1024px;
  width: 100%;
`;