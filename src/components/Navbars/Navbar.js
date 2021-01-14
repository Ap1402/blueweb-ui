import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgStyledDiv = styled.div`
  img {
    align-self: flex-start;
    padding: 5px 0 5px 50px;
    height: 55px;
    z-index: 10000;
  }
`;

const StyledNav = styled.nav`
  background-color: white;
  font-size: 15px;
  .container .navbar-collapse .navbar-nav .nav-item.active a,
  .container .navbar-collapse .navbar-nav .nav-item a:hover,
  .container .navbar-nav .nav-item a:hover::before {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const Navbar = (props) => {
  return (
    <StyledNav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
      <div className="container">
        <ImgStyledDiv>
          <img src="/images/Logo.png" alt="BlueWeb"></img>
        </ImgStyledDiv>
        <Link to="/" href="/"></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="lni-menu"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/servicios" href="/servicios">
                Servicios
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/nosotros" href="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/contacto" href="/contacto">
                Contacto
              </Link>
            </li>

            {props.children}
          </ul>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
