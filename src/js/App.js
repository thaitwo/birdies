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
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.FEATURES} component={FeaturesPage} />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;


const AppWrapper = styled.div`
  background-color: white;
  min-height: 100vh;

  ul {
    list-style-type: none;
    padding: 0;
  }
`;