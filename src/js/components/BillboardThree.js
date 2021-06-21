import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Text from '../const/typography';

const AppScreen = props => {
  const {
    header,
    subheader,
    description,
    screenImageUrl,
    buttonLabel,
    buttonLink,
  } = props;
  const button = buttonLabel ? <Button size='large' to={buttonLink}>{buttonLabel}</Button> : '';

  return (
    <Wrapper>
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
  background: ${props => props.theme.colors.business};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px 0 96px;
  text-align: left;
  width: 100%;

  h3 {
    color: ${props => props.theme.colors.white};
    margin-bottom: 8px;
  }

  p {
    color: ${props => props.theme.colors.white};
    margin-bottom 24px;
  }

  button {
    margin-top: 32px;
  }

  ul {
    margin-bottom: 32px;

    li {
      align-items: center;
      color: ${props => props.theme.colors.white};
      display: flex;
      font-size: 18px;
      margin-bottom: 12px;
    }
  }

  ul li::before {
    content: "check_circle";
    color: ${props => props.theme.colors.primary};
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
  flex: 1;
  max-width: 1024px;
  padding-left: 24px;
  width: 100%:
`;