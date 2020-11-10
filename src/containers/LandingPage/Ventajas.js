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
    font-size:32px;
    margin-bottom:20px;
    font-weight: 800;
  }
  p{
    text-align:center;
    font-size:18px;
  }

  @media (min-width: 720px) {
    margin: 30px;
  }
  a button {
    margin: 20px;
    padding: 20px;
    color: white;
    background-color: #1d6ecc;
    font-family: "Poppins", sans-serif;
    &:hover {
      color: black;

      background-color: white;
    }
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
            <p>
              The following is the stress test for the chosen effect. A 100
              paragraphs of lorem ipsum text will be revealed as you scroll
              down. To reset the test select an option from the button toolbar
              above. The following whitespace is intentionally left blank.
             
            </p>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" color="primary">
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
            <p>
              The following is the stress test for the chosen effect. A 100
              paragraphs of lorem ipsum text will be revealed as you scroll
              down. To reset the test select an option from the button toolbar
              above. The following whitespace is intentionally left blank.
             
            </p>
            <Link
              to="/contacto/factibilidad"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained" color="primary">
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
