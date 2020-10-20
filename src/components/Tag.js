import React from "react";
import styled from "styled-components";

const TagElement = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1px;
  display: inline-block;
  margin-right: 10px;
  background-color: #ffffff;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 0;
  }


  &:last-of-type {
      margin-right: 0;
  }

  h5 {
    color: #7d7d7d;
    font-size: 12px;
    font-weight: 300;
    padding: 2px 10px;
`;

export default function Tag({ children }) {
  return (
    <TagElement>
      <h5>{children}</h5>
    </TagElement>
  );
}
