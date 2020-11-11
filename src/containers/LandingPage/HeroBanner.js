import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";
import anime from "animejs/lib/anime.es.js";

const HeroBannerStyled = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: calc(100vh - 40px);
  background-image: url("/images/Banner-2.png");

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(57, 49, 49, 0.65);
    z-index: 1;
    content: "";
  }
`;

const StyledBannerInner = styled.div`
  position: absolute;
  z-index: 2;
  width: 50%;
  left: 25%;

  padding: 0 30px;
  box-sizing: border-box;
  top: 50%;
  color: #ffffff;
  text-align: center;
  margin-top: -110px;
  h1 {
    font-size: 44px;
    color: #ffffff;
    line-height: 1.5;
    letter-spacing: 0;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: 0;
    font-weight: 400;
    margin: 0 auto 10px;
  }
  a {
    padding: 0 34px;
    margin: 72px auto 25px;
    line-height: 56px;
    border-radius: 6px;
    height: 56px;
    font-size: 16px;
    box-sizing: border-box;
    background: transparent;
    display: inline-block;
    color: white;
    border: solid 2px white;
    font-weight:bold;
    transition: 0.3s;
    text-align: center;
    &:hover{
      cursor:pointer;
      color:black;

    }
  }

`;

/*
const width = "100%",
  height = "450px";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  width: ${width};
`;

const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
  background-color: black;
  overflow: hidden;

  h1 {
    position: absolute;
    left: 10%;
    top: 25%;
    color: white;
    font-size: 30px;
    font-weight: 500;
  }
  h2 {
    position: absolute;
    left: 10%;
    top: 25%;
    color: white;
    font-size: 30px;
    font-weight: 500;
  }
  button {
    padding: 20px;
    background-color: white;
    color: black;
    position: absolute;
    left: 10%;
    top: 40%;
    width: 200px;
    font-size: 20px;
    font-weight: 500;
    border: 0;
  }
  .first-image {
    height: 100%;
    position: absolute;
    top: 5%;
    right: 7%;
    border-radius: 100px;
  }
  .second-image {
    height: 40%;
    position: absolute;
    top: 30%;
    right: 25%;
  }
`;

const Arrow = styled.div`
  z-index: 2;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 20%;
  width: 10%;
  color: white;
  font-size: 3em;
  cursor: pointer;
  user-select: none;

  ${(props) =>
    props.right
      ? css`
          left: 15%;
        `
      : css`
          left: 10%;
        `}
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.span`
  position: absolute;
  bottom: 5%;
  text-align: center;
  width: ${width};
  z-index: 2;
`;

const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>
        {"<"}
      </Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>
        {">"}
      </Arrow>
    </Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? "● " : "○ "}
        </Dot>
      ))}
    </Dots>
  </Container>
);

const Carousel = makeCarousel(CarouselUI);

const AlternativeCarousel = ({ children }) => {
  return <Carousel>{children}</Carousel>;
}; */

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <StyledBannerInner>
        <h1>Built for Internet Service</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua quis.
        </h2>
        <a href="/start">Get Started for Free</a>
      </StyledBannerInner>
    </HeroBannerStyled>
  );
};

export default HeroBanner;
