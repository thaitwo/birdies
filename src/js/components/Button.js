import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';

const Button = props => {
  // console.log('hello', props)
    return (
      <ButtonWrapper props={props}>
        {props.children}
      </ButtonWrapper>
    )
}

export default Button;


const ButtonWrapper = styled.button`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.white};
  display: flex;
  font-family: 'Circular Std Medium', Arial, Helvetica, sans-serif;
  font-size: 17px;
  height: ${props => props.props.large ? '48px' : '40px'};
  justify-content: space-between;
  padding: 0 24px;
`;