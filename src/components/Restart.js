import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

const Button = styled.button`
  align-items: center;
  background-color: #00adff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  justify-content: center;
  margin: 0 10px;
  padding: 10px 35px;
`;

const Restart = () => (
  <Wrapper>
    <Button onClick={() => (window.location.href = '/')}>new game</Button>
  </Wrapper>
);

export default Restart;
