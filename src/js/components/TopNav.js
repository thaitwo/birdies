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
          <Link to={ROUTES.FEATURES}>Featured</Link>
          <Link to={ROUTES.BUSINESS}>Business</Link>
          <Link to={ROUTES.CLUBHOUSE}>Clubhouse</Link>
          <a href='https://help.18birdies.com/' target='_blank'>Support</a>
          <Link to={ROUTES.ABOUT}>About</Link>
        </Nav>
        <ButtonWrapper>
          <Button to='#'>Download</Button>
        </ButtonWrapper>
      </HeaderBar>
    )
  }
}

export default TopNav;

const HeaderBar = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.primary};
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 0 32px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
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
    color: ${props => props.theme.colors.text.primary};
    font-family: 'Circular Std Book', Arial, Helvetica, sans-serif;
    line-height: 64px;
    padding: 0 24px;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.colors.text.brandPrimary};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;