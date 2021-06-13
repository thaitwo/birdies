import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button.js';

class TopNav extends React.Component {

  render() {
    return (
      <HeaderBar>
        <LogoWrapper>
          <Logo type='dark' />
        </LogoWrapper>
        <Menu>
          <li>Featured</li>
          <li>Business</li>
          <li>Clubhouse</li>
          <li>Support</li>
          <li>About</li>
        </Menu>
        <ButtonWrapper>
          <Button
            label="Download"
          />
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
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  align-items: center;
  color: black;
  display: flex;
  flex-direction: row;
  font-size: 17px;
  height: 64px;
  list-style-type: none;
  margin: 0;

  li {
    padding: 0 24px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 140px;
`;