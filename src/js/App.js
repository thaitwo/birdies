import logo from '../logo.svg';
import '../App.css';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import theme from './Theme';

// COMPONENTS
import TopNav from './components/TopNav';
import HeroLarge from './components/HeroLarge';
import Wallet from './components/Wallet';
import AppScreen from './components/AppScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <TopNav />
          <HeroLarge
            text='Join the Fastest Growing Golf Community'
          />
          <FloatWrapper>
            <Wallet />
          </FloatWrapper>
          <AppScreen
            subheader='Tee Time'
            header='Book your next round with 18Birdies'
            description='Explore tee times at thousands of courses to find your next round.'
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
      </div>
    </ThemeProvider>
  );
}

export default App;


const FloatWrapper = styled.div`
  margin: -140px 0 180px;
`;