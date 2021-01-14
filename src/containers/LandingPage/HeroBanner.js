import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background-color: ${(props) => props.theme.colors.blue};
  position: relative;
  z-index: 1;
  text-transform: uppercase;
  &:hover {
    background-color: white;
    border: solid 1px ${(props) => props.theme.colors.blue};
  }
`;

const StyledButtonBorder = styled.a`
  background-color: white;
  position: relative;
  color: ${(props) => props.theme.colors.blue} !important;
  z-index: 1;
  text-transform: uppercase;
  border: solid 1px ${(props) => props.theme.colors.blue} !important;
  &:hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white !important;
  }
`;
const StyledImage = styled.img`
  height: 600px;
  margin-top: -100px;
`;

const StyledContents = styled.div`
  h2 {
    color: #222222;
    font-size: 42px;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
  }
`;

const HeroBanner = () => {
  return (
    <div id="hero-area" className="hero-area-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <StyledContents className="contents">
              <h2>Built for internet service</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="header-button">
                <StyledButton
                  rel="nofollow"
                  href="https://rebrand.ly/fusion-gg"
                  className="btn"
                >
                  Ir a soporte
                </StyledButton>
                <StyledButtonBorder
                  href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                  className="btn"
                >
                  Solicitar servicio
                </StyledButtonBorder>
              </div>
            </StyledContents>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <div className="intro-img">
              <StyledImage src="/images/landingPage/HeroBanner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
