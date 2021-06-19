// DEPENDENCIES
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// IMAGES
import logoLight from '../../birdieslogoWhite.svg';
import logoDark from '../../birdieslogo.svg';

// CONSTANTS
import * as ROUTES from '../const/routes';

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.type;
  }

  render() {
    const logoUrl = this.type === 'light' ? logoLight : logoDark;

    return (
      <Wrapper>
        <StyledLink to={ROUTES.HOME}>
          <StyledLogo src={logoUrl} />
        </StyledLink>
      </Wrapper>
    )
  }
}

export default Logo;


const Wrapper = styled.div`

`;

const StyledLogo = styled.img`

`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;