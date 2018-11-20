import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const Button = styled.button`
  align: center;
  background-color: #00adff;
  border: none;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  margin: 0 10px;
  width: 50px;
`;

const Moves = ({ move }) => (
  <Wrapper>
    <Button onClick={() => move(-1)}>-1</Button>
    <Button onClick={() => move(0)}>0</Button>
    <Button onClick={() => move(1)}>1</Button>
  </Wrapper>
);

export default Moves;
