import React from "react";
import styled from "styled-components";
/* СВГ иконки лучше экспортировать с фигмы, зачем нам посторонняя реакт либа */
import { IoIosHand } from "react-icons/io";

const Button = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: linear-gradient(to bottom, #689ef4, #005ef3);
  border-radius: 50%;
  border: none;
  box-shadow: 0 5px 18px #689ef4;
  cursor: pointer;

  svg {
    width: 25px;
    height: 35px;
    transform: scale(-1, 1);
  }

  &:hover {
    background: #005ef3;
  }
`;

export default function HandButton() {
  return (
    <Button>
      <IoIosHand />
    </Button>
  );
}
