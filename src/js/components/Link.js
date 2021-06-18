import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

const Link = (props) => {
  const icon = props.noIcon ? '' : <Icon path={mdiChevronRight} size={1} />;

  return (
    <StyledLink href="#">
      <Text.P2B>{props.children}</Text.P2B>
      {icon}
    </StyledLink>
  )
}

export default Link;

const StyledLink = styled.a`
  align-items: center;
  color: ${props => props.theme.colors.text.brandPrimary};
  display: flex;
  text-decoration: none;

  p {
    color: ${props => props.theme.colors.text.brandPrimary};
    padding-right: 4px;
  }
`;