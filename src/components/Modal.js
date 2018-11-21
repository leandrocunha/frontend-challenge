import React from 'react';
import styled from 'styled-components';
import Balloons from './Balloons';

const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0, 173, 255, 0.65);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  padding: 100px;
`;

const Title = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 35px;
  margin: 15px 0;
`;

const Button = styled.button`
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 100px;
  color: #00adff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  margin: 0 10px;
  padding: 15px 55px;
`;

const Modal = () => (
  <ModalStyled>
    <Balloons />
    <Title>You Lose</Title>
    <Button>New game</Button>
  </ModalStyled>
);

export default Modal;
