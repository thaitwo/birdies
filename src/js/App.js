import logo from '../logo.svg';
import '../App.css';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import teeTimes from '../assets/tee-times.jpeg';

import theme from './Theme';

// COMPONENTS
import TopNav from './components/TopNav';
import HeroLarge from './components/HeroLarge';
import Wallet from './components/Wallet';
import AppScreen from './components/AppScreen';
import Footer from './components/Footer';
import Billboard from './components/Billboard';

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
            subheader='Tee Time'
          />
          <Billboard />
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
`;

const FloatWrapper = styled.div`
  margin: -140px 0 48px;
`;