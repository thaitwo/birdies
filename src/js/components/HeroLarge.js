import React from 'react';
import styled from 'styled-components';
import appleDownload from '../../assets/app-download-apple.png';
import googleDownload from '../../assets/app-download-google.png';
import featureImage from '../../assets/featuredImageCommunity.png';

class HeroLarge extends React.Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  render() {
    return (
      <HeroWrapper>
        <ContentWrapper>
          <HeaderText>{this.text}</HeaderText>
          <ButtonGroup>
            <ButtonImg src={appleDownload} />
            <ButtonImg src={googleDownload} />
          </ButtonGroup>
        </ContentWrapper>
      </HeroWrapper>
    );
  }
}

export default HeroLarge;

const HeroWrapper = styled.div`
  align-items: center;
  background-image: url(${featureImage});
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px ${props => props.theme.colors.blackTransparent64};
  display: flex;
  flex-direction: column;
  height: 680px;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 600px
`;

const HeaderText = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 48px;
  line-height: 1.25;
  margin: 0 0 24px 0;
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