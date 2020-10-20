import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h3`
  padding-left: 20px;
  color: ${({ black }) => (black ? "#000" : "#fff")};
  letter-spacing: 0.1em;
  display: inline-block;
  position: relative;
  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    margin-bottom: 20px;
  }

  &:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f64d40;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
`;

export default function Heading({ children, black }) {
  return <StyledHeading black={black}>{children}</StyledHeading>;
}
