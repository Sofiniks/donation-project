import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 30px 0;

  @media screen and (max-width: 425px) {
    padding: 5px 0 20px 0;
  }

  button {
    cursor: pointer;
  }

  span {
    position: relative;

    &:before {
      display: block;
      width: 1000px;
      content: "";
      position: absolute;
      border-bottom: 1px solid #b19b69;
      top: 50%;
      right: 210px;
    }
    &:after {
      display: block;
      width: 1000px;
      content: "";
      position: absolute;
      border-bottom: 1px solid #b19b69;
      top: 50%;
      left: 210px;
    }
  }
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 30px;
  color: #b19b69;
  box-shadow: 0 5px 12px #e5decc;
`;

export default function ProjectsButton({ children, onClick }) {
  return (
    <ButtonWrapper>
      <span>
        <Button onClick={onClick}>
          <h4>{children}</h4>
        </Button>
      </span>
    </ButtonWrapper>
  );
}
