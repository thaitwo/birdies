import React from 'react';
import styled from 'styled-components';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.label = this.props.label;
  }

  render() {
    return (
      <ButtonWrapper>
        {this.label}
      </ButtonWrapper>
    )
  }
}

export default Button;

const ButtonWrapper = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 16px;
  height: 40px;
  justify-content: space-between;
  padding: 0 24px;
`;