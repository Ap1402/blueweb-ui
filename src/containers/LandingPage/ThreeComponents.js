import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slide } from "pure-react-carousel";
import { Fade } from "react-reveal";

const StyledBackgroundColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-content: center;
  justify-content: center;
  text-align: center;
  position: relative;
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
  }
  .home-title {
    line-height: 128%;
    color: #000000;
    text-align: center;
    padding: 50px;
    @media (max-width: 720px) {
      padding-top: 80px;
      font-size: 24px;
    }
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
  }
  .cuadrado {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
    color: black;
    i {
      color: inherit;
      font-size: 50px;
    }
    h4 {
      font-size: 18px;
      text-align: center;
      margin-top: 10px;
    }
    h5 {
      max-width: 310px;
      color: #8c8889;
      text-align: center;
      font-size: 14px;
    }
  }
`;
const ThreeComponents = () => {
  return (
    <StyledBackgroundColorWrapper backgroundColor="white">
      <Container>
        <Fade bottom cascade>
          <Row>
            <Col sm={12}>
              <h1 className="home-title">
                How can we help you to speed up your connection?
              </h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="cuadrado">
                <i class="fas fa-headset"></i>
                <h4>Mockup Text</h4>
                <h5>
                  Create a more connected product design workflow. Bring
                  designers, product managers, and front-end developers to work
                  better and together.
                </h5>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="cuadrado">
                <i class="far fa-comment-dots"></i>
                <h4>Mockup Text</h4>
                <h5>
                  Create a more connected product design workflow. Bring
                  designers, product managers, and front-end developers to work
                  better and together.
                </h5>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="cuadrado">
                <i class="fas fa-network-wired"></i>
                <h4>Mockup Text</h4>
                <h5>
                  Create a more connected product design workflow. Bring
                  designers, product managers, and front-end developers to work
                  better and together.
                </h5>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </StyledBackgroundColorWrapper>
  );
};

export default ThreeComponents;
