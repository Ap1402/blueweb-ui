import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";

const StyledDiv = styled.section`
  padding: 40px;
  padding-bottom: 50px;
`;

const StyledTextDiv = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //background-color:#1d6ecc ;
  padding: 30px;
  h1 {
    font-weight: 800;
  }
  @media (min-width: 720px) {
    margin: 30px;
  }
  a  button {
    margin: 20px;
    padding: 20px;
    color:white;
    background-color: #1d6ecc;
    font-family: "Poppins", sans-serif;
    &:hover{
      color:black;
    }
  }
  h4,
  h5 {
    text-align: left;
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
              Nuestros agentes están listos para evaluar la factibilidad de tu
              zona
            </h5>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" style={{ width: "100%" }}>
                Consultar factibilidad
              </Button>
            </Link>
          </StyledTextDiv>
        }
        fadeDirection="left"
      ></TwoSectionsDivider>

      <TwoSectionsDivider
        rightComponent={
          <StyledTextDiv>
            <h1>Soporte técnico las 24 horas</h1>
            <h4>
              Nuestros agentes están listos para atender tus necesidades las 24
              horas del día
            </h4>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" style={{ width: "100%" }}>
                Contactar
              </Button>
            </Link>
          </StyledTextDiv>
        }
        leftComponent={<img src="/images/WorkSupport.png" alt="support"></img>}
        fadeDirection="right"
      ></TwoSectionsDivider>
    </StyledDiv>
  );
};

export default Ventajas;
