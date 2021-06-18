import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Text from '../const/typography';

const Podiums = (props) => {
  console.log(Text);
  const articlesArray = props.articles;
  const articleList = articlesArray.map((article, index) => {
    return (
      <li key={index}>
        <StyledImage src={article.image} />
        <StyledContentWrapper>
          <StyledCopyWrapper>
            <Text.H6>{article.header}</Text.H6>
            <Text.P2>{article.subheader}</Text.P2>
          </StyledCopyWrapper>
          <Link>Read More</Link>
        </StyledContentWrapper>
      </li>
    );
  })

  return (
    <StyledWrapper>
      <Text.H2>{props.header}</Text.H2>
      <StyledSubheader>
        <Text.P1>{props.subheader}</Text.P1>
      </StyledSubheader>
      <StyledList>
        {articleList}
      </StyledList>
    </StyledWrapper>
  )
}

export default Podiums;

const StyledWrapper = styled.div`
  max-width: 1024px;
  padding: 120px 0;
  text-align: center;
  width: 100%;
`;

const StyledSubheader = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
  text-align: left;

  li {
    box-shadow: ${props => props.theme.shadows.primary};
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 32px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 20px 24px 20px;

`;

const StyledCopyWrapper = styled.div`
  margin-bottom: 16px;

  p {
    color: ${props => props.theme.colors.text.tertiary};
    margin-top: 8px;
  }
`;