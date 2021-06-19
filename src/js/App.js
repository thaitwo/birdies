// DEPENDENCIES
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../App.css';


// CONSTANTS
import theme from './Theme';
import * as ROUTES from './const/routes';

// PAGES
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import BusinessPage from './pages/BusinessPage';

// COMPONENTS
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
            <TopNav />
            <Body>
              <Route exact path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.FEATURES} component={FeaturesPage} />
              <Route exact path={ROUTES.BUSINESS} component={BusinessPage} />
            </Body>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;


const AppWrapper = styled.div`
  background-color: white;
  font-family: 'Circular Std Book', Arial, Helvetica, sans-serif;
  min-height: 100vh;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const Body = styled.div`
  transform: translateY(64px);
`;