import React from 'react';
import styled from 'styled-components';
import TextLink from './TextLink';
import Text from '../const/typography';
import * as ROUTES from '../const/routes';

const Wallet = (props) => {

  return (
    <Wrapper>
      <Card>
        <Text.H3>For Golfers</Text.H3>
        <Text.P1>Take your game to the next level with course GPS, Stats, and more.</Text.P1>
        <TextLink to={ROUTES.FEATURES}>Explore Feature</TextLink>
      </Card>
      <LineDivider />
      <Card>
        <Text.H3>For Courses</Text.H3>
        <Text.P1>Leverage our community to grow your business and increase revenue.</Text.P1>
        <TextLink to={ROUTES.BUSINESS}>Explore Business</TextLink>
      </Card>
    </Wrapper>
  );
}

export default Wallet;

const Wrapper = styled.div`
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: row;
  max-width: 900px;
  padding: 48px 48px 56px 48px;

  h3 {
    margin-bottom: 8px;
  }

  a {
    margin-top: 32px;
  }
`;

const Card = styled.div`
  flex: 1;
  text-align: left;
`;

const LineDivider = styled.div`
  background-color: ${props => props.theme.colors.gray50};
  bottom: 0;
  margin: 0 48px;
  top: 0;
  width: 1px;
`;