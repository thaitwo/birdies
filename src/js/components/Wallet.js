import React from 'react';
import styled from 'styled-components';

class Wallet extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Wrapper>
        <Card>
          <Header>For Golfers</Header>
          <Description>Take your game to the next level with course GPS, Stats, and more.</Description>
          <TextLink>Explore Features</TextLink>
        </Card>
        <LineDivider />
        <Card>
          <Header>For Courses</Header>
          <Description>Leverage our community to grow your business and increase revenue.</Description>
          <TextLink>Explore Business</TextLink>
        </Card>
      </Wrapper>
    );
  }
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

const Header = styled.h3`
  font-size: 28px;
  line-height: 1.25;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin: 0 0 40px 0;
`;

const TextLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
  line-height: 32px;
`;