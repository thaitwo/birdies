import React from 'react';
import styled from 'styled-components';
import PhoneFrame from './PhoneFrame';
import Button from './Button';
import Text from '../const/typography';

class AppScreen extends React.Component {
  constructor(props) {
    super(props);

    this.subheader = props.subheader;
    this.header = props.header;
    this.description = props.description;
    this.buttonLabel = props.buttonLabel;
    this.imgSrc = props.imgSrc;
  }

  render() {
    return (
      <Wrapper>
        <PhoneWrapper>
          <PhoneFrame
            imgSrc={this.imgSrc}
          />
        </PhoneWrapper>
        <TextWrapper>
          <Text.SH>{this.subheader}</Text.SH>
          <Text.H3>{this.header}</Text.H3>
          <Text.P1>{this.description}</Text.P1>
          <Button large>Book Tee Time</Button>
        </TextWrapper>
      </Wrapper>
    );
  }
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