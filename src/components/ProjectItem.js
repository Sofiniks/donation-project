import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Tag from "./Tag";
import HandButton from "./buttons/HandButton";
import { TiLocation } from "react-icons/ti";

const Project = styled.li`
  max-width: 360px;
  margin: 0 auto;
  padding-right: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 80px;
  @media screen and (max-width: 768px) {
    max-width: 325px;
  }
  @media screen and (max-width: 360px) {
    max-width: 320px;
    padding: 0 30px 70px 0;
    margin-left: 20px;
  }

  &:hover:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
    position: absolute;
    top: 19px;
    right: 20px;
    z-index: -1;
    border-radius: 0 0 7px 7px;
  }

  &:before {
    @media screen and (max-width: 768px) {
      content: "";
      display: block;
      width: 100%;
      height: calc(100% - 19px);
      background-color: #f3f3f3;
      position: absolute;
      top: 19px;
      right: 20px;
      z-index: -1;
      border-radius: 0 0 7px 7px;
    }
  }

  button {
    position: absolute;
    left: calc(50% - 20px);
    bottom: -19px;
    transform: translate(-50%, 50%);
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      transform: translate(-50%, 0);
    }
  }

  &:hover button {
    display: block;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
    @media screen and (max-width: 360px) {
      font-size: 14px;
    }
  }

  p {
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    color: #7d7d7d;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
      padding-bottom: 30px;
    }
    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    }

    p {
      font-weight: bold;
      font-size: 12px;
    }
  }

  .percents {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #8dca78;
    border: 2px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;

    h5 {
      font-weight: bold;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  &:before {
    content: "";
    display: block;
    width: 310px;
    height: 190px;
    background-color: #f3f3f3;
    position: absolute;
    top: 19px;
    left: 29px;
    z-index: -1;
    border-radius: 0 0 7px 7px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &:after {
    content: url(${(props) => props.logo});
    display: block;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  img {
    width: 320px;
    border-radius: 0 7px 7px 7px;

    @media screen and (max-width: 768px) {
      width: 285px;
    }
    @media screen and (max-width: 360px) {
      max-width: 280px;
    }
  }
  div {
    position: absolute;
    bottom: 5%;
    left: 5%;
    display: flex;
    align-items: center;
    color: #b19b69;
  }

  h5 {
    color: #fff;
  }
`;

export default function ProjectItem(props) {
  const { heading, text, img, logo, location } = props;
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  /* Сделай компонент более динамические, чтобы он разные тэги принимал, количество процентов и дату окончания  */
  return (
    <Project>
      <article>
        <ImgContainer logo={logo}>
          <img src={img} alt="children" />
          <div>
            <TiLocation />
            <h5>{location}</h5>
          </div>
        </ImgContainer>
        {isTablet && !isMobile ? (
          <>
            <Tag>помощь нуждающимся</Tag>
            <Tag>закят</Tag>
          </>
        ) : null}
        <h4>{heading}</h4>
        <p>{text}</p>
        <div className="info">
          <div className="percents">
            <h5>37%</h5>
          </div>
          <div className="money">
            <h5>необходимо собрать</h5>
            <p>
              <span style={{ color: "#8dca78" }}>45 194</span> из 1 000 000 RUB
            </p>
          </div>
          <div className="deadline">
            <h5>конец</h5>
            <p>завтра</p>
          </div>
        </div>
        {/* Можно просто через media не показывать */}
        {isTablet && !isMobile ? null : (
          <>
            <Tag>помощь нуждающимся</Tag>
            <Tag>закят</Tag>
          </>
        )}
        <HandButton />
      </article>
    </Project>
  );
}
