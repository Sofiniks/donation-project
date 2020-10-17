import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { donations } from "../data";
import NavButton from "./buttons/NavButton";
import DonationButton from "./buttons/DonationButton";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #005ef3;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
`;

const DonationsList = styled.ul`
  overflow: hidden;
  width: 100%;
  padding: 30px;
  @media screen and (max-width: 768px) {
    display: flex;
    width: ${({ width }) => width}px;
    transform: translate(-${({ translateValue }) => translateValue}px, 0);
  }
  @media screen and (max-width: 360px) {
    transform: translate(-${({ translateValue }) => translateValue / 2}px, 0);
  }
`;
const DonationItem = styled.li`
  color: #fff;
  opacity: ${({ active }) => (active ? 1 : 0.2)};
  text-transform: capitalize;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-right: 100px;
  }
  @media screen and (max-width: 360px) {
    margin-right: 30px;
    margin-bottom: 5px;
  }
`;
const DonationContent = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 40px;
  }
`;

export default function Donations() {
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  const [activeItem, setActiveItem] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const handleNext = () => {
    setActiveItem(activeItem + 1);
    setTranslateValue(translateValue + 200);
  };
  const handlePrev = () => {
    setActiveItem(activeItem - 1);
    setTranslateValue(translateValue - 200);
  };
  const list = donations.map((item, index) => {
    return (
      <DonationItem key={item.id} active={index === activeItem}>
        <h1>{item.heading}</h1>
      </DonationItem>
    );
  });
  const text = donations
    .filter((item) => item.id === activeItem + 1)
    .map((item) => {
      return <article key={item.id}>{item.text}</article>;
    });
  const heading = donations
    .filter((item) => item.id === activeItem + 1)
    .map((item) => {
      return <h4 key={item.id}>Расчитать {item.heading}</h4>;
    });
  return (
    <Wrapper>
      {activeItem === 0 ? null : <NavButton prev onClick={handlePrev} />}
      <DonationsList
        translateValue={translateValue}
        width={500 * donations.length}
      >
        {list}
      </DonationsList>

      {activeItem === donations.length - 1 ? null : (
        <NavButton next onClick={handleNext} />
      )}

      <DonationContent>
        {text}

        {isMobile ? (
          <div className='centered'>
            <DonationButton>{heading}</DonationButton>
          </div>
        ) : (
          <DonationButton>{heading}</DonationButton>
        )}
      </DonationContent>
    </Wrapper>
  );
}
