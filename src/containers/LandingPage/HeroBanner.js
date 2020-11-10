import React from "react";
import styled, { css } from "styled-components";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";

const HeroBannerStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("/images/Banner-2.png");
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
  box-sizing: border-box;
  user-select: none;
  background-size: 100% 100%;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(57, 49, 49, 0.4);
    z-index: 1;
    content: "";
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
  return <HeroBannerStyled></HeroBannerStyled>;
};

export default HeroBanner;
