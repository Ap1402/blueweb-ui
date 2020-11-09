import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";

const StyledDiv = styled.section`
padding: 30px;
`;


const StyledTextDiv = styled.div`
  color: black;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 20px;
  h1{
      font-weight:800;
  }
  @media (min-width:720px){
    margin:30px;

  }
  button{
      margin:20px;
      padding: 20px;
      font-family:'Poppins', sans-serif;
  }

`;
const Ventajas = () => {
  return (
    <StyledDiv>
      <TwoSectionsDivider
        rightComponent={<img src="/images/Signal.png" alt="moon"></img>}
        leftComponent={
          <StyledTextDiv>
            <h1>Fibra óptica y señal inalámbrica</h1>
            <h4>Con nosotros podrás elegir el tipo de conexión que desees </h4>
            <h5>
              Nuestros agentes están listos para evaluar la factibilidad de tu zona
            </h5>
            <Button variant="contained" color="primary">Consultar factibilidad</Button>
          </StyledTextDiv>
        }
      ></TwoSectionsDivider>
    </StyledDiv>
  );
};

export default Ventajas;
