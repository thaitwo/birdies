import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = props => {
  const { to } = props;

  return (
    <StyledButton to={to} props={props}>
      {props.children}
    </StyledButton>
  )
}

export default Button;


const StyledButton = styled(Link)`
  align-items: center;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  font-family: 'Circular Std Medium', Arial, Helvetica, sans-serif;
  font-size: 17px;
  height: ${props => props.props.large ? '48px' : '40px'};
  justify-content: space-between;
  padding: 0 24px;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.brandBlue700};
    transition: all .1s;
  }
`;