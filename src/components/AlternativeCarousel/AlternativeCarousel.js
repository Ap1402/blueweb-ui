import makeCarousel from "react-reveal/makeCarousel";
import styled, { css } from "styled-components";

const width = "100%",
  height = "350px";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height:100%;
  width: ${width};
`;

const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;

const Arrow = styled.div`
  z-index: 2;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  color: white;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${(props) =>
    props.right
      ? css`
          left: 90%;
        `
      : css`
          left: 0%;
        `}
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.span`
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

export default AlternativeCarousel;
