import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Icon from '@mdi/react';
import { mdiCheckCircle, mdiChevronRight } from '@mdi/js';

class Billboard extends React.Component {

  render() {
    return (
      <StyledOuterWrapper>
        <StyledLeftWrapper>
          <StyledHeader>Take your game further with a Premium Membership</StyledHeader>
          <Button>Discover Premium</Button>
        </StyledLeftWrapper>
        <StyledRightWrapper>
          <StyledSubheader>Everything in the free version, plus...</StyledSubheader>
          <StyledList>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>Advanced GPS+</span>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>Advanced Stats</span>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>Side Games</span>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>Partner Benefits &amp; Discounts</span>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>Premium Lesson Plans</span>
              </div>
              <StyledChevronWrapper>
                <Icon path={mdiChevronRight} size={1} />
              </StyledChevronWrapper>
            </li>
            <li>
              <div>
                <Icon path={mdiCheckCircle} size={1} />
                <span>and much more!</span>
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
`;

const StyledRightWrapper = styled.div`
  flex: 1;
`;

const StyledLeftWrapper = styled.div`
  flex: 1;
`;

const StyledHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 44px;
  margin-bottom: 40px;
`;

const StyledSubheader = styled.div`

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