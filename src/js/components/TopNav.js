// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// COMPONENTS
import Logo from './Logo';
import Button from './Button.js';

// CONSTANTS
import * as ROUTES from '../const/routes';
import Text from '../const/typography';

class TopNav extends React.Component {

  render() {
    return (
      <HeaderBar>
        <LogoWrapper>
          <Logo type='dark' />
        </LogoWrapper>
        <Nav>
          <StyledLink to={ROUTES.FEATURES}>
            <Text.P2>Featured</Text.P2>
          </StyledLink>
          <StyledLink to={ROUTES.BUSINESS}>
            <Text.P2>Business</Text.P2>
          </StyledLink>
          <StyledLink to={ROUTES.CLUBHOUSE}>
            <Text.P2>Clubhouse</Text.P2>
          </StyledLink>
          <a href='https://help.18birdies.com/' target='_blank'>
            <Text.P2>Support</Text.P2>
          </a>
          <StyledLink to={ROUTES.ABOUT}>
            <Text.P2>About</Text.P2>
          </StyledLink>
        </Nav>
        <ButtonWrapper>
          <Button>Download</Button>
        </ButtonWrapper>
      </HeaderBar>
    )
  }
}

export default TopNav;

const HeaderBar = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.white};
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 32px;
  position: absolute;
  right: 0;
  top: 0;
`;

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Nav = styled.div`
  align-items: center;
  color: black;
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 17px;
  height: 64px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    padding: 0 24px;
    text-decoration: none;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;