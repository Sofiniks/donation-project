import React from "react";
import styled from "styled-components";
import HandIcon from "../../assets/hand.svg";

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

  img {
    width: 25px;
    height: 35px;
    display: block;
    transform: scale(0.7, 0.7) translateX(100%);
  }

  &:hover {
    background: #005ef3;
  }
`;

export default function HandButton() {
  return (
    <Button>
      <img src={HandIcon} alt='hand' />
    </Button>
  );
}
