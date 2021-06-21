import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Text from '../const/typography';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiChevronRight } from '@mdi/js';

class Billboard extends React.Component {

  render() {
    return (
      <StyledOuterWrapper>
        <StyledLeftWrapper>
          <Text.H3>Take your game further with a Premium Membership</Text.H3>
          <Button size='large' to='#'>Discover Premium</Button>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <Text.H6>Everything in the free version, plus...</Text.H6>
          <StyledList>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>Advanced GPS+</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>Advanced Stats</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>Side Games</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>Partner Benefits &amp; Discounts</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>Premium Lesson Plans</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <Text.P3>and much more!</Text.P3>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
          </StyledList>
        </StyledRightWrapper>
      </StyledOuterWrapper>
    )
  }
}

export default Billboard;

const StyledOuterWrapper = styled.div`
  background: ${props => props.theme.colors.gray800};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1000px;
  padding: 48px;
  width: 100%;

  h3,
  h6 {
    color: ${props => props.theme.colors.white};
    margin-bottom: 32px;
  }

  p {
    color: ${props => props.theme.colors.white};
    padding-left: 12px;
  }
`;

const StyledRightWrapper = styled.div`
  flex: 1;
`;

const StyledLeftWrapper = styled.div`
  flex: 1;
`;

const StyledChevronWrapper = styled.div`
  svg {
    color: ${props => props.theme.colors.whiteTransparent24} !important;
  }
`;  

const StyledList = styled.div`
  border-top: 1px solid ${props => props.theme.colors.whiteTransparent08};
  font-size: 16px;
  list-style-type: none;
  margin: 32px 0 0 0;
  padding: 0;

  li {
    border-bottom: 1px solid ${props => props.theme.colors.whiteTransparent08};
    display: flex;
    justify-content: space-between;
    line-height: 24px;
    padding: 10px 0;
  }

  div {
    align-items: center;
    display: flex;
  }

  span {
    padding-left: 16px;
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;