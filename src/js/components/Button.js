import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ButtonWrapper>
        <Text.P2B>{this.props.children}</Text.P2B>
      </ButtonWrapper>
    )
  }
}

export default Button;

const ButtonWrapper = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 24px;

  p {
    color: ${props => props.theme.colors.white};
  }
`;