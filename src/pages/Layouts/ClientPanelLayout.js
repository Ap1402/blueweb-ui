import React, { useEffect, useState } from "react";
import LogoutModal from "../../components/Modals/LogoutModal";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledDiv = styled.div`
  background-color: #2052b0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .welcome-message {
    color: white;

    padding: 20px 0;
    margin-right: auto;
    p {
      color: white;
      strong {
        font-size: 20px;
      }
    }
  }
`;

const ClientPanelLayout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>BlueWeb </title>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
          integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
          crossorigin=""
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      </Helmet>

      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <a className="navbar-brand " href="#">
          <img src="/images/blue-web.png" style={{ height: "30px" }}></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/clients/" className="nav-link" href="#">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clients/historial" className="nav-link" href="#">
                Historial y saldo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/clients/perfil" className="nav-link" href="#">
                Mis datos
              </Link>
            </li>
          </ul>
          <div className="navbar-nav ml-md-auto">
            <button className="btn btn-light">
              Salir <i className="fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </nav>
      <StyledDiv>
        <div className="container">
          <div className="welcome-message">
            <h2>
              <i className="fas fa-users"></i> Panel de cliente
            </h2>
            <p className="client-name">
              <strong>Bienvenido: </strong>Username
            </p>
            <p className="client-code">
              <strong>Codigo de cliente: </strong>12345678
            </p>
          </div>
          {children}
        </div>
      </StyledDiv>
      <LogoutModal></LogoutModal>
    </>
  );
};

export default ClientPanelLayout;
