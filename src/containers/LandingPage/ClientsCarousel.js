import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";

const StyledContainer = styled.section`
  width: 100%;
  height: 350px;
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
  width: 70%;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  height: 90px;
`;

const ClientsCarousel = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 6 },
    { width: 850, itemsToShow: 6 },
    { width: 1150, itemsToShow: 6 },
    { width: 1450, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
  ];
  return (
    <StyledContainer>
      <h1>Empresas que nos recomiendan</h1>
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
