import Slide from "react-reveal/Slide";
import styled from "styled-components";

const StyledCarouselChildren = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: relative;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
  img {
    height: 250px;
  }
`;

const CarouselChildren = () => {
  return (
    <StyledCarouselChildren>
      <img src="/images/Banner.jpg" />
      <Slide>
        <h1>TEST</h1>
      </Slide>
    </StyledCarouselChildren>
  );
};

export default CarouselChildren;
