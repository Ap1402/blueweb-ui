import React from "react";
import styled, { css } from "styled-components";
import makeCarousel from "react-reveal/makeCarousel";
import Fade from "react-reveal/Fade";

const HeroBannerStyled = styled.section`
  width: 100%;
`;

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
  background-color: ${({ theme }) => theme.colors.blue};
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
};

const HeroBanner = () => {
  return (
    <HeroBannerStyled>
      <AlternativeCarousel>
        <Fade>
          <h2>Ofrecemos una de las mejores conexiones del mercado</h2>
          <button>Contactar Ya</button>


          <img className="first-image" alt="circle" src="/images/circle.png"></img>
        </Fade>
      </AlternativeCarousel>
    </HeroBannerStyled>
  );
};

export default HeroBanner;
