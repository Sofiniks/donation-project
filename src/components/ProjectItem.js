import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Tag from "./Tag";
import HandButton from "./buttons/HandButton";
import { TiLocation } from "react-icons/ti";
import PercentsImg from "../assets/percents.svg";

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
  @media screen and (max-width: 425px) {
    width: 320px;
    padding: 0 10px 60px 10px;
    margin-bottom: 70px;
  }
  article {
    @media screen and (max-width: 425px) {
      padding-right: 20px;
      padding-left: 20px;
      max-width: 320px;
    }
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

    @media screen and (max-width: 768px) {
      height: calc(100% - 19px);
    }
    @media screen and (max-width: 425px) {
      right: 0;
      max-width: 320px;
    }
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
    @media screen and (max-width: 425px) {
      right: 0;
      max-width: 100%;
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
    @media screen and (max-width: 425px) {
      left: calc(50%);
    }
  }

  &:hover button {
    display: block;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 20px;
    @media screen and (max-width: 425px) {
      font-size: 14px;
    }
  }

  p {
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    color: #7d7d7d;
    justify-content: flex-start;
    width: 90%;

    @media screen and (max-width: 768px) {
      padding-bottom: 0;
    }
    @media screen and (max-width: 425px) {
      line-height: 20px;
    }

    p {
      font-weight: bold;
      font-size: 12px;
    }
  }

  .percents {
    min-width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    color: #8dca78;
    border: 3px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    flex-direction: column;
    overflow: hidden;
    position: relative;

    h5 {
      font-weight: bold;
      font-size: 8px;
    }
    img {
      position: absolute;
      bottom: -1px;
    }
  }
  .money {
    margin-right: 25px;
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
    @media screen and (max-width: 425px) {
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
  const { heading, text, img, logo, location, percents, deadline } = props;
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  return (
    <Project>
      <article>
        <ImgContainer logo={logo}>
          <img src={img} alt='project' />
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
        <div className='info'>
          <div className='percents'>
            <h5>{percents}</h5>
            <img src={PercentsImg} alt='percents' />
          </div>
          <div className='money'>
            <h5>необходимо собрать</h5>
            <p>
              <span style={{ color: "#8dca78" }}>45 194</span> из 1 000 000 RUB
            </p>
          </div>
          <div className='deadline'>
            <h5>конец</h5>
            <p>{deadline}</p>
          </div>
        </div>
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
