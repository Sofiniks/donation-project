import React from "react";
import styled from "styled-components";
import { GrNext } from "react-icons/gr";

const Button = styled.button`
  width: 35px;
  height: 35px;
  background-color: transparent;
  position: absolute;
  left: 5%;
  top: ${({ prev }) => (prev ? "0%" : null)};
  bottom: ${({ next }) => (next ? "0%" : null)};
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 2;
  @media screen and (max-width: 1160px) {
    cursor: pointer;
    top: 4%;
    left: ${({ prev }) => (prev ? "-2%" : "95%")};
  }
  @media screen and (max-width: 660px) {
    top: 0;
    left: ${({ prev }) => (prev ? "-5%" : "95%")};
  }
  svg {
    transform: ${({ prev }) => (prev ? "rotate(-90deg)" : "rotate(90deg)")};
    width: 35px;
    height: 30px;
    polyline {
      stroke: #fff;
      stroke-width: 1;
    }
    @media screen and (max-width: 1160px) {
      transform: ${({ prev }) => (prev ? "rotate(-180deg)" : "rotate(0)")};
    }
  }
`;

export default function NavButton({ prev, next, onClick }) {
  return (
    <Button prev={prev} next={next} onClick={onClick}>
      <GrNext />
    </Button>
  );
}
