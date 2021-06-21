import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import Button from './Button';
import DownloadButtons from './DownloadButtons';
import PhoneFrame from './PhoneFrame';

const HeroTwo = props => {
  const {
    header,
    description,
    imageUrl,
    screenImageUrl,
    noPhone,
    downloadButtons,
    button,
    buttonLabel,
    to
  } = props;

  const phoneFrame = noPhone ? '' : <PhoneFrame screenImageUrl={screenImageUrl} />;
  const downloadButtonsVisibility = downloadButtons ? <DownloadButtons topPadding /> : '';
  const buttonVisibility = button ? <Button size='large' to={to}>{buttonLabel}</Button> : '';

  return (
    <StyledWrapper imageUrl={imageUrl}>
      <StyledInnerWrapper>
        <StyledContentWrapper>
          <Text.H2>{header}</Text.H2>
          <Text.P1>{description}</Text.P1>
          {downloadButtonsVisibility}
          {buttonVisibility}
        </StyledContentWrapper>
        {phoneFrame}
      </StyledInnerWrapper>
    </StyledWrapper>
  )
};

export default HeroTwo;

const StyledWrapper = styled.div`
  align-items: center;
  background-image: url(${props => props.imageUrl});
  background-position: center;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px ${props => props.theme.colors.blackTransparent72};
  display: flex;
  flex-direction: row;
  height: 600px;
  justify-content: center;
  overflow: hidden;
  text-align: left;
  width: 100%;

  h2,
  p {
    color: ${props => props.theme.colors.white};
  }

  p {
    margin-bottom 32px;
  }
`;

const StyledContentWrapper = styled.div`
  padding-right: 88px;
`;

const StyledInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: 1024px;
  width: 100%;
`;