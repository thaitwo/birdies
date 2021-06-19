import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiChevronRight } from '@mdi/js';

const TextLink = (props) => {
  const { noIcon, to } = props;
  const icon = noIcon ? '' : <Icon path={mdiChevronRight} size={1} />;

  return (
    <StyledLink to={to}>
      <Text.P2B>{props.children}</Text.P2B>
      {icon}
    </StyledLink>
  )
}

export default TextLink;

const StyledLink = styled(Link)`
  align-items: center;
  color: ${props => props.theme.colors.text.brandPrimary};
  display: flex;
  text-decoration: none;

  p {
    color: ${props => props.theme.colors.text.brandPrimary};
    padding-right: 4px;
  }
`;