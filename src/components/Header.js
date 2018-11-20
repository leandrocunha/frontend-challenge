import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background-color: #00adff;
  box-shadow: rgba(0, 0, 0, 0.08) 1px 1px 4px 0.5px;
  display: flex;
  padding: 15px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const Avatar = styled.img`
  border: #008ee0 2px solid;
  border-radius: 4px;
  margin: 0 12px 0 0;
`;

const Header = ({ player }) => (
  <HeaderStyled>
    <Avatar
      alt={`player ${player}`}
      src={`https://api.adorable.io/avatars/20/${player}.png`}
    />
    <Title>{`Player ${player}`}</Title>
  </HeaderStyled>
);

export default Header;
