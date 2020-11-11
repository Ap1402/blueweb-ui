import React from "react";
import styled from "styled-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const StyledContainer = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    align-self: center;
  }
  .headline {
    text-align: center;
    color: $highlight1;
  }
  img {
    height: 60px;
    width:70px;
  }
  .buttons {
    align-self: center;
  }
`;

const ClientsCarousel = () => {
  return (
    <StyledContainer>
      <div className="container">
        <CarouselProvider
          visibleSlides={3}
          totalSlides={5}
          step={2}
          naturalSlideWidth={40}
          naturalSlideHeight={40}
          infinite
        >
          <h2 className="headline">Infinite Carousel</h2>
          <p>
            A carousel that returns to the first slide if the user clicks the
            Next button while on the last slide and returns to the last slide if
            the user clicks the Back button while on the first slide. Also
            behaves similarly with swiping left on the first image or right on
            the last image.
          </p>
          <Slider className="slider">
            <Slide index={0}>
              <img src="/images/Gulf_logo.png"></img>
            </Slide>
            <Slide index={1}>
              <img src="/images/Gulf_logo.png"></img>
            </Slide>
            <Slide index={2}>
              <img src="/images/Gulf_logo.png"></img>
            </Slide>
            <Slide index={3}>
              <img src="/images/Gulf_logo.png"></img>
            </Slide>
            <Slide index={4}>
              <img src="/images/Gulf_logo.png"></img>
            </Slide>
          </Slider>
          <div className="buttons">
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </div>
          <DotGroup />
        </CarouselProvider>
      </div>
    </StyledContainer>
  );
};

export default ClientsCarousel;
