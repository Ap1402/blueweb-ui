import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const StyledContainer = styled.section`
  background: #f3f9fd;
  padding: 10px 0;
  text-align: center;
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    position: absolute;
    top: 10%;
    font-size: 32px;
    font-weight: 800;
  }
`;

const StyledContainerDiv = styled.div`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;
const StyledImg = styled.img`
  height: 65px;
  opacity: 0.5;
  filter: grayscale(1);
  /* filter: grayscale(100);
  -webkit-filter: grayscale(100); */
  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
  outline: none;
`;

const ClientsCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 975, itemsToShow: 4 },
    { width: 1150, itemsToShow: 6 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
  ];
  return (
    <StyledContainer>
      {/*       <Titles>Nuestros clientes</Titles>
       */}
      <StyledContainerDiv>
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          focusOnSelect={false}
          enableAutoPlay
          autoPlaySpeed={2000}
          pagination={false}
          itemsToShow={5}
          infinite
        >
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>

          <StyledImg src="/images/Gulf_logo.png"></StyledImg>

          <StyledImg src="/images/Gulf_logo.png"></StyledImg>

          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
          <StyledImg src="/images/Gulf_logo.png"></StyledImg>
        </Carousel>
      </StyledContainerDiv>
    </StyledContainer>
  );
};

export default ClientsCarousel;
