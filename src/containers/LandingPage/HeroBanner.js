import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: auto;
  height: auto;
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

const StyledHero = styled.div`
  min-height: 650px;
  position: relative;
  overflow: hidden;
  max-width: 100vmax;
  padding: 150px 0 80px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 650px;
    background-image: url("/img/hero-area.svg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  }
`;

const HeroBanner = () => {
  return (
    <StyledHero id="hero-area" className="hero-area-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <StyledContents className="contents">
              <h2 className="header">Texto de ejemplo</h2>
              <p className="paragraph">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <div className="header-button">
                <Link
                  to="/contacto"
                  rel="nofollow"
                  className="btn btn-landing btn-common"
                >
                  Recibir soporte
                </Link>
                <Link
                  to="/contacto/factibilidad"
                  className="btn btn-landing btn-border"
                >
                  Solicitar servicio
                </Link>
              </div>
            </StyledContents>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
            <div className="intro-img">
              <StyledImage
                className="img-fluid"
                src="/images/landingPage/HeroBanner.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default HeroBanner;
