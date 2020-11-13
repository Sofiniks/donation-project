import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 80px;
  color: #fff;
  background: linear-gradient(to bottom, #e3d1a0, #a79156);
  border: none;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 660px) {
    width: 260px;
    height: 60px;
  }
`;

export default function DonationButton({ children }) {
  return <Button>{children}</Button>;
}
