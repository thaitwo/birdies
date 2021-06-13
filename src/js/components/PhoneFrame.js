import React from 'react';
import styled from 'styled-components';

class PhoneFrame extends React.Component {
  constructor(props) {
    super(props);

    this.imgSrc = props.imgSrc;
  }

  render() {
    return (
      <OuterFrame>
        <Screen src={this.imgSrc} />
      </OuterFrame>
    )
  }
}

export default PhoneFrame;

const OuterFrame = styled.div`
  background-color: #fff;
  border-radius: 50px;
  box-shadow: inset 4px -7px 26px rgb(145 160 180 / 32%), 0 2px 7px rgb(50 50 93 / 24%), 0 8px 15px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 332px;
  padding: 64px 16px;
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