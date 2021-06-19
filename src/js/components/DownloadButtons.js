import React from 'react';
import styled from 'styled-components';
import appleDownload from '../../assets/app-download-apple.png';
import googleDownload from '../../assets/app-download-google.png';

const DownloadButtons = (props) => {
  const { topPadding, bottomPadding } = props;
  const appleLink = 'https://apps.apple.com/us/app/18birdies-golf-gps-app/id892700751';
  const googleLink = 'https://play.google.com/store/apps/details?id=com.squarevalley.i8birdies';

  return (
    <StyledWrapper topPadding={topPadding} bottomPadding={bottomPadding}>
      <StyledLink href={appleLink} target='_blank'>
        <ButtonImg src={appleDownload} />
      </StyledLink>
      <StyledLink href={googleLink} target='_blank'>
        <ButtonImg src={googleDownload} />
      </StyledLink>
    </StyledWrapper>
  );
}

export default DownloadButtons;

const StyledLink = styled.a`
  margin-right: 16px;
  
  &:last-of-type {
    margin-right: 0;
  }
`;

const ButtonImg = styled.img`
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 6px;
  width: 136px;
`;

const StyledWrapper = styled.div`
  padding-top: ${props => props.topPadding ? '32px' : '0'};
  padding-bottom: ${props => props.bottomPadding ? '32px' : '0'};
`;