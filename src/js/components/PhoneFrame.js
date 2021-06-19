import React from 'react';
import styled from 'styled-components';

const PhoneFrame = (props) => {
  const { screenImageUrl, size } = props;

  return (
    <OuterFrame size={size}>
      <Screen src={screenImageUrl} />
    </OuterFrame>
  )
}

export default PhoneFrame;

const OuterFrame = styled.div`
  background-color: #fff;
  border-radius: ${props => props.size === 'large' ? '50px' : '40px'};
  box-shadow: inset 4px -7px 26px rgb(145 160 180 / 32%), 0 2px 7px rgb(50 50 93 / 24%), 0 8px 15px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.size === 'large' ? '332px' : '280px'};
  padding: ${props => props.size === 'large' ? '64px 16px' : '48px 16px'};
  position: relative;
  width: 100%;
`;

const Screen = styled.img`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 16%);
  object-fit: cover;
  position: relative;
  width: 100%;
  z-index: 1;
`;