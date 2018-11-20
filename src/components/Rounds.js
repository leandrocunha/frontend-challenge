import React from 'react';
import styled from 'styled-components';
import InitialValue from './InitialValue';
import Round from './Round';

const Wrapper = styled.div`
  flex: 1;
  padding: 15px;
`;

const Rounds = ({ initialValue, rounds }) => (
  <Wrapper>
    <InitialValue value={initialValue} />
    {rounds.map((round, index) => (
      <Round key={index} {...round} />
    ))}
  </Wrapper>
);

export default Rounds;
