import React from 'react';
import styled from 'styled-components';
import PhoneFrame from './PhoneFrame';
import Button from './Button';

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
          <Subheader>{this.subheader}</Subheader>
          <Header>{this.header}</Header>
          <Description>{this.description}</Description>
          <Button 
            label='Book Tee Time'
          />
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
  text-align: left;
`;

const PhoneWrapper = styled.div`

`;

const TextWrapper = styled.div`
  padding-left: 104px;
`;

const Subheader = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 17px;
  font-weight: bold;
  line-height: 24px;
  text-transform: uppercase;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  margin-bottom: 12px;
`;

const Description = styled.div`
  color: ${props => props.theme.colors.gray400};
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 24px;
`;