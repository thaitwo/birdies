import React from 'react';
import styled from 'styled-components';
import PhoneFrame from './PhoneFrame';
import Button from './Button';
import Text from '../const/typography';

const AppScreen = props => {
  const { header, subheader, description, screenImageUrl } = props;

  return (
    <Wrapper>
      <PhoneWrapper>
        <PhoneFrame size='large' screenImageUrl={screenImageUrl} />
      </PhoneWrapper>
      <TextWrapper>
        <Text.SH>{subheader}</Text.SH>
        <Text.H3>{header}</Text.H3>
        <Text.P1>{description}</Text.P1>
        <Button large>Book Tee Time</Button>
      </TextWrapper>
    </Wrapper>
  );
}

export default AppScreen;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 120px 0;
  text-align: left;

  h3 {
    margin-bottom: 8px;
  }

  button {
    margin-top: 32px;
  }
`;

const PhoneWrapper = styled.div`

`;

const TextWrapper = styled.div`
  padding-left: 104px;
`;