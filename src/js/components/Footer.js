import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.js';
import Text from '../const/typography';
import DownloadButtons from './DownloadButtons.js';

class Footer extends React.Component {
  constructor() {
    super();
    
    this.currentYear = new Date().getFullYear();
  }

  render() {
    return (
      <OuterWrapper>
        <FooterTop>
          <TopBar>
            <Logo type='light' />
            <DownloadButtons />
          </TopBar>
          <SiteMap>
            <StyledList>
              <li>FEATURES</li>
              <li>Tee Times</li>
              <li>GPS+</li>
              <li>Premium Membership</li>
              <li>DreamGames</li>
              <li>Stats &amp; Round History</li>
              <li>Social Golf</li>
              <li>Digital Scorecard</li>
              <li>Side Games</li>
            </StyledList>
            <StyledList>
              <li>BUSINESS</li>
              <li>Tournaments+</li>
              <li>League+</li>
              <li>Community Builder</li>
              <li>Events &amp; Memberships</li>
              <li>Course Intelligence</li>
              <li>Stay &amp; Play</li>
              <li>Pricing</li>
            </StyledList>
            <StyledList>
              <li>CLUBHOUSE</li>
              <li>Shop</li>
              <li>News &amp; Entertainment</li>
              <li>Golf Instruction</li>
              <li>18Birdies News</li>
            </StyledList>
            <StyledList>
              <li>ABOUT</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Press</li>
              <li>Ambassadors</li>
              <li>Partners</li>
            </StyledList>
            <StyledList>
              <li>SUPPORT</li>
              <li>App Support</li>
              <li>Business Support</li>
            </StyledList>
          </SiteMap>
        </FooterTop>
        <FooterBottom>
          <InnerWrapper>
            <LinkGroup>
              <li>Legal Information</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </LinkGroup>
            <Copyright>© {this.currentYear} 18Birdies, LLC. All Rights Reserved.</Copyright>
          </InnerWrapper>
        </FooterBottom>
      </OuterWrapper>
    )
  }
}

export default Footer;

const OuterWrapper = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.gray700};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  font-family: 'Circular Std Book', Arial, Helvetica, sans-serif;
  justify-content: center;
  margin-top: 80px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
`;

const FooterTop = styled.div`
  max-width: 1000px;
  padding: 80px 0;
  width: 100%;
`;

const TopBar = styled.div`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.whiteTransparent08};
  display: flex;
  justify-content: space-between;
  padding: 0 0 24px 0;
`;

const SiteMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 32px 0 0 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    color: ${props => props.theme.colors.whiteTransparent48};
    font-size: 15px;
    padding-bottom: 12px;

    &:first-of-type {
      color: ${props => props.theme.colors.white};
      font-size: 16px !important;
    }
  }
`;

const FooterBottom = styled.div`
  background: ${props => props.theme.colors.gray800};
  color: ${props => props.theme.colors.whiteTransparent48};
  display: flex;
  font-size: 13px;
  justify-content: center;
  padding: 32px 0;
  width: 100%;
`;

const LinkGroup = styled.div`
  display: flex;
  list-style-type: none;

  li {
    border-right: 1px solid ${props => props.theme.colors.whiteTransparent24};
    padding: 0 16px;

    &:first-of-type {
      padding 0 16px 0 0;
    }
    
    &:last-of-type {
      border-right: none;
    }
  }
`;

const Copyright = styled.div`

`;


const ButtonGroup = styled.div`

`;

const ButtonImg = styled.img`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 6px;
  margin-right: 16px;
  width: 136px;

  &:last-of-type {
    margin-right: 0;
  }
`;