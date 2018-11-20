import React from 'react';
import styled from 'styled-components';
import InitialValue from './InitialValue';

const Wrapper = styled.div`
  flex: 1;
  padding: 15px;
`;

const Rounds = ({ initialValue, rounds }) => (
  <Wrapper>
    <InitialValue value={initialValue} />
    <ul>
      {rounds.map((round, index) => (
        <li key={index}>
          {round.player}
          <br />
          {`[(${round.move} - ${round.lastResult}) / 3] = ${round.result}`}
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Rounds;
