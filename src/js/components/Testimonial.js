import React from 'react';
import styled from 'styled-components';
import Text from '../const/typography';
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen } from '@mdi/js';

class Testimonial extends React.Component {
  constructor(props) {
    super(props);

    this.quote = props.quote;
    this.author = props.author;
    this.logoUrl = props.logoUrl;
  }

  render() {
    return (
      <StyledWrapper>
        <StyledQuoteIcon>
          <Icon path={mdiFormatQuoteOpen} size={5} />
        </StyledQuoteIcon>
        <StyledQuoteWrapper>
          <Text.H5>{this.quote}</Text.H5>
          <Text.H5B>{this.author}</Text.H5B>
        </StyledQuoteWrapper>
        <StyledLogo src={this.logoUrl} />
      </StyledWrapper>
    );
  }
}

export default Testimonial;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 120px auto;
  max-width: 1000px;
  width: 100%;

  h5 {
    margin-bottom: 16px;
  }
`;

const StyledQuoteWrapper = styled.div`
  padding: 0 24px;
`;

const StyledQuoteIcon = styled.div`
  align-self: start;
  color: ${props => props.theme.colors.gray100};
  margin-top: -24px;
`;

const StyledLogo = styled.img`
  max-width: 140px;
  width: 100%;
`;