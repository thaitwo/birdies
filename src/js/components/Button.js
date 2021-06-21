import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = props => {
  const { to, size, width } = props;

  return (
    <StyledButton to={to} size={size} width={width}>
      {props.children}
    </StyledButton>
  )
}

export default Button;


const StyledButton = styled(Link)`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  box-sizing: border-box;
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  font-family: 'Circular Std Medium', Arial, Helvetica, sans-serif;
  font-size: 17px;
  height: ${props => props.size === 'large' ? '48px' : '40px'};
  justify-content: center;
  padding: 0 24px;
  text-decoration: none;
  ${props => props.width === 'fullwidth' ? 'width: 100%' : '' };

  &:hover {
    background: ${props => props.theme.colors.brandBlue700};
    transition: all .1s;
  }
`;