import React from 'react';
import styled from 'styled-components';
import logoLight from '../../birdieslogoWhite.svg';
import logoDark from '../../birdieslogo.svg';

class Logo extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.type;
  }

  render() {
    const logoUrl = this.type === 'light' ? logoLight : logoDark;

    return (
      <Wrapper>
        <StyledLogo src={logoUrl} />
      </Wrapper>
    )
  }
}

export default Logo;


const Wrapper = styled.div`

`;

const StyledLogo = styled.img`

`;