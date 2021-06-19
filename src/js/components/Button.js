import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';

const Button = props => {
  // console.log('hello', props)
    return (
      <ButtonWrapper props={props}>
        <Text.P2B>{props.children}</Text.P2B>
      </ButtonWrapper>
    )
}

export default Button;


const ButtonWrapper = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  display: flex;
  height: ${props => props.props.large ? '48px' : '40px'};
  justify-content: space-between;
  padding: 0 24px;

  p {
    color: ${props => props.theme.colors.white};
  }
`;