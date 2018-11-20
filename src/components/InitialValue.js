import React from 'react';
import styled from 'styled-components';

const InitialValueStyled = styled.p`
  align-items: center;
  background-color: #00adff;
  border: none;
  border-radius: 100px;
  color: #fff;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  margin: 0 10px;
  width: 50px;
`;

const InitialValue = ({ value }) => (
  <InitialValueStyled>{value}</InitialValueStyled>
);

export default InitialValue;
