import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import featureImage from '../../assets/featuredImageCommunity.png';
import DownloadButtons from './DownloadButtons';

class HeroLarge extends React.Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  render() {
    return (
      <HeroWrapper>
        <ContentWrapper>
          <Text.H1>{this.text}</Text.H1>
          <DownloadButtons />
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
  text-align: center;
  width: 100%;

  h1 {
    color: ${props => props.theme.colors.white};
    margin-bottom: 40px;
  }
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