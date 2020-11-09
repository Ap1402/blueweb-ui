import HeroBanner from "../containers/LandingPage/HeroBanner";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SupportBanner from "../containers/LandingPage/SupportBanner";
import {Link} from 'react-router-dom'
import AboutUs from '../containers/LandingPage/AboutUs'
import Testimonials from "../containers/LandingPage/Testimonials";
import Ventajas from "../containers/LandingPage/Ventajas";

const StyledBackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  position: relative;
  .custom-shape-divider-top-1604333882 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1604333882 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 147px;
  }

  .custom-shape-divider-top-1604333882 .shape-fill {
    fill: #276ef1;
  }
  a {
    text-decoration: none;
    color: black;
  }
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.colors.blue};
  h1,
  h2 {
    color: black;
  }
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 150px;
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .cuadrado {
    & {
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: box-shadow, transform;
      transition-property: box-shadow, transform;
    }
    &:hover,
    &:focus,
    &:active {
      box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      cursor: pointer;
      background-color: #454655;
    }

    background-color: #004bc6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
    color: white;
    i {
      color: white;
      font-size: 50px;
    }
    h4 {
      text-align: center;
      margin-top: 10px;
    }
    h5 {
      text-align: center;
      font-size: 14px;
    }
  }
`;

const Home = ()=> {

  return (
    <>
      <HeroBanner></HeroBanner>
      <SupportBanner></SupportBanner>
      <AboutUs></AboutUs>
      <Ventajas></Ventajas>
      <Testimonials></Testimonials>
      
      <StyledBackgroundColorWrapper backgroundColor="white">
        <div class="custom-shape-divider-top-1604333882">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <h1>¿Tienes alguna duda?</h1>
        <h2>Aquí puedes encontrar la respuesta</h2>
        <Container>
          <Row className="grid">
            <Col sm={12} md={4}>
              <Link to="/contacto">
                <div className="cuadrado">
                  <i class="fas fa-headset"></i>
                  <h4>Contáctanos</h4>
                  <h5>Envíanos tu duda</h5>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={4}>
              <Link to="/contacto">
                <div className="cuadrado">
                  <i class="far fa-comment-dots"></i>
                  <h4>Habla con un agente</h4>
                  <h5>Chatea ahora</h5>
                </div>
              </Link>
            </Col>
            <Col sm={12} md={4}>
              <Link to="/planes">
                <div className="cuadrado">
                  <i class="fas fa-network-wired"></i>
                  <h4>Nuestros planes</h4>
                  <h5>Consulta nuestros planes</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </StyledBackgroundColorWrapper>
    </>
  );
}

export default Home;