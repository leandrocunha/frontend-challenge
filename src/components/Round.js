import React from 'react';
import styled from 'styled-components';

const RoundStyled = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: ${props =>
    props.player === 1 ? 'flex-start' : 'row-reverse'};
  margin: 15px;
`;

const Answer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  border-top-left-radius: ${props => (props.player === 1 ? 0 : '20px')};
  border-top-right-radius: ${props => (props.player === 0 ? 0 : '20px')};
  box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 4px 0.5px;
  margin: 10px 15px 0 15px;
  padding: 15px;
`;

const Avatar = styled.img`
  border: #c7c7c7 2px solid;
  border-radius: 4px;
`;

const Round = ({ lastResult, move, player, result }) => (
  <RoundStyled player={player}>
    <Avatar
      alt={`player ${player}`}
      src={`https://api.adorable.io/avatars/20/${player}.png`}
    />
    <Answer player={player}>
      {`[(${move} - ${lastResult}) / 3] =`} <strong>{result}</strong>
    </Answer>
  </RoundStyled>
);

export default Round;
