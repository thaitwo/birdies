import logo from '../logo.svg';
import '../App.css';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import teeTimes from '../assets/tee-times.jpeg';
import elsLogo from '../assets/els-for-autism-logo.jpeg';
import courseSky from '../assets/course-bunker-sky.jpeg';
import Text from './const/typography';

import theme from './Theme';

import { articles } from './const/articles';

// COMPONENTS
import TopNav from './components/TopNav';
import HeroLarge from './components/HeroLarge';
import Button from './components/Button';
import Wallet from './components/Wallet';
import AppScreen from './components/AppScreen';
import Footer from './components/Footer';
import Poster from './components/Poster';
import Testimonial from './components/Testimonial';
import BillboardTwo from './components/BillboardTwo';
import Podiums from './components/Podiums';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <header className="App-header">
          <TopNav />
          <HeroLarge
            text='Join the Fastest Growing Golf Community'
          />
          <FloatWrapper>
            <Wallet />
          </FloatWrapper>
          <AppScreen
            description='Explore tee times at thousands of courses to find your next round.'
            header='Book your next round with 18Birdies'
            imgSrc={teeTimes}
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
          >
            <ul>
              <li>
                <Text.H6>Build Your Community</Text.H6>
              </li>
              <li>
                <Text.H6>Market New Experiences</Text.H6>
              </li>
              <li>
                <Text.H6>Grow Your Revenue</Text.H6>
              </li>
            </ul>
            <Button>Explore Business</Button>
          </BillboardTwo>
          <Podiums
            header='The Clubhouse'
            subheader='Keep up with the latest talk around the 18Birdies Clubhouse, including golf news, instruction, entertainment, and recent product updates.'
            articles={articles}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;


const AppWrapper = styled.div`

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const FloatWrapper = styled.div`
  margin: -140px 0 48px;
`;