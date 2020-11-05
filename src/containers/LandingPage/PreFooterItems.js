import React from "react";
import styled from "styled-components";
import IconWithDescription from "../../components/IconsWithDescription/IconWithDescription";

const Grid = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 90%;

  align-content: center;
  margin-top: 10rem;
  justify-content: center;

  @media (min-width:760px) and (max-width:970px) {
    grid-template-columns: 100px 100px ;
    grid-column-gap: 150px;
  }
  @media (min-width:970px)  {
    grid-template-columns: 100px 100px 100px 100px;
    grid-column-gap: 150px;
  }

`;

const FlexBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const PreFooterItems = () => {
  return (
    <FlexBoxWrapper>
      <Grid>
        <IconWithDescription
          iconClass="fas fa-signal"
          number="90%"
          smallSDescription="De cobertura en el área de Valencia"
        ></IconWithDescription>
        <IconWithDescription
          iconClass="fas fa-network-wired"
          number="90"
          smallSDescription="Equipos funcionales"
        ></IconWithDescription>
        <IconWithDescription
          iconClass="fas fa-user-friends"
          number="90"
          smallSDescription="Clientes"
        ></IconWithDescription>
        <IconWithDescription
          iconClass="fa-signal"
          number="90%"
          smallSDescription="De cobertura en el área de Valencia"
        ></IconWithDescription>
      </Grid>
    </FlexBoxWrapper>
  );
};

export default PreFooterItems;
