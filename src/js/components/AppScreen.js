import React from 'react';
import styled from 'styled-components';

class AppScreen extends React.Component {
  constructor(props) {
    super(props);

    this.subheader = props.subheader;
    this.header = props.header;
    this.description = props.description;
    this.buttonLabel = props.buttonLabel;
  }

  render() {
    return (
      <Wrapper>
        <PhoneWrapper>

        </PhoneWrapper>
        <TextWrapper>
          <Subheader>{this.subheader}</Subheader>
          <Header>{this.header}</Header>
          <Description>{this.description}</Description>
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
  line-height: 48px;
`;

const Description = styled.div`
  color: ${props => props.theme.colors.gray400};
  font-size: 18px;
  line-height: 28px;
`;