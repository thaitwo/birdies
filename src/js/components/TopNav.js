import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button.js';
import Text from '../const/typography';

class TopNav extends React.Component {

  render() {
    return (
      <HeaderBar>
        <LogoWrapper>
          <Logo type='dark' />
        </LogoWrapper>
        <Menu>
          <li>
            <Text.P2>Featured</Text.P2>
          </li>
          <li>
            <Text.P2>Business</Text.P2>
          </li>
          <li>
            <Text.P2>Clubhouse</Text.P2>
          </li>
          <li>
            <Text.P2>Support</Text.P2>
          </li>
          <li>
            <Text.P2>About</Text.P2>
          </li>
        </Menu>
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

const Menu = styled.ul`
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

  li {
    padding: 0 24px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;