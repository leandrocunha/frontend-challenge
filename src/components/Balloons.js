import React from 'react';
import styled from 'styled-components';
import blueBalloon from './../images/blue@1x.png';
import purpleBalloon from './../images/purple@1x.png';
import redBalloon from './../images/red@1x.png';
import greenBalloon from './../images/green@1x.png';

const Wrapper = styled.div`
  height: 250px;
  position: relative;
  width: 215px;
`;

const Blue = styled.img`
  left: 1px;
  position: absolute;
  top: 1px;
`;

const Purple = styled.img`
  left: 6px;
  position: absolute;
  top: 154px;
`;

const Red = styled.img`
  left: 35px;
  position: absolute;
  top: 23px;
`;

const Green = styled.img`
  left: 121px;
  position: absolute;
  top: 105px;
`;

const Balloons = () => (
  <Wrapper>
    <Blue src={blueBalloon} />
    <Purple src={purpleBalloon} />
    <Red src={redBalloon} />
    <Green src={greenBalloon} />
  </Wrapper>
);

export default Balloons;
