import styled from "styled-components";
import TwoSectionsDivider from "../../components/Dividers/TwoSectionsDivider";

const StyledAboutUs = styled.section`
  color: white;
  width: 100%;
  padding: 50px;
  text-align: center;

  .left {
    width: 50%;
  }
  .right {
    width: 50%;
    color: black;
    font-size: 25px;
    text-align: left;
    h2 {
      position: relative;
      text-align: center;
      font-size: 30px;
    }
    h2:before {
      content: "";
      position: absolute;
      display: inline-block;
      background: #276ef1;
      bottom: -11px;
      width: 100px;
      height: 4px;
      left: 50%;
      right: auto;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    ul {
      margin-top: 3rem;
      list-style: none;
      li {
        margin: 2rem;
      }
    }
  }

  h1,
  h2 {
    position: relative;
  }

  h1:before {
    content: "";
    position: absolute;
    display: inline-block;
    background: #ffff;
    bottom: -11px;
    width: 50px;
    height: 4px;
    left: 50%;
    right: auto;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  p {
    margin: 5rem;
    font-size: 20px;
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs id="aboutUs">
     
      <TwoSectionsDivider
      
        leftComponent={<img src="/images/blue-web.png"></img>}
        rightComponent={
          <>
            <h2>¿Qué nos caracteriza?</h2>
            <ul>
              <li>
                Plataforma de alta Tecnología que nos permite brindarle el mejor
                servicio.
              </li>
              <li>
                Personal profesionalmente capacitado para atender sus
                necesidades.
              </li>
              <li>
                Disponibilidad inmediata de nuestros servicios, con soporte
                técnico las 24 horas
              </li>
            </ul>
          </>
        }
      ></TwoSectionsDivider>
    </StyledAboutUs>
  );
};

export default AboutUs;
