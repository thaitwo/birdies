import React from 'react';
import styled from 'styled-components';
import PhoneFrame from './PhoneFrame';
import Button from './Button';
import Text from '../const/typography';
import Icon from '@mdi/react';

const AppScreen = props => {
  const {
    header,
    subheader,
    description,
    screenImageUrl,
    buttonLabel,
    buttonLink,
    noPhone
  } = props;
  const button = buttonLabel ? <Button large to={buttonLink}>{buttonLabel}</Button> : '';
  const phone = noPhone ? '' : <PhoneWrapper><PhoneFrame size='large' screenImageUrl={screenImageUrl} /></PhoneWrapper>;

  return (
    <Wrapper>
      {phone}
      <TextWrapper>
        <Text.SH>{subheader}</Text.SH>
        <Text.H3>{header}</Text.H3>
        <Text.P1>{description}</Text.P1>
        {props.children}
        {button}
      </TextWrapper>
    </Wrapper>
  );
}

export default AppScreen;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 160px 0;
  max-width: 1024px;
  text-align: left;
  width: 100%;

  h3 {
    margin-bottom: 8px;
  }

  p {
    margin-bottom 24px;
  }

  button {
    margin-top: 32px;
  }

  ul {
    margin-bottom: 32px;

    li {
      align-items: center;
      color: ${props => props.theme.colors.text.secondary};
      display: flex;
      font-size: 18px;
      margin-bottom: 12px;
    }
  }

  ul:first-of-type li::before {
    content: "check_circle";
    color: ${props => props.theme.colors.text.secondary};
    font-family: 'Material Icons';
    font-size: 24px;
    padding-right: 12px;
    -webkit-font-feature-settings: 'liga';
  }
  
  ul li::before {
    content: "star";
    color: ${props => props.theme.colors.text.brandPrimary};
    font-family: 'Material Icons';
    font-size: 24px;
    padding-right: 12px;
    -webkit-font-feature-settings: 'liga';
  }
`;

const PhoneWrapper = styled.div`
  flex: 1;
`;

const TextWrapper = styled.div`
  padding-left: 24px;
  flex: 1;
`;